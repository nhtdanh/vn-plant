-- 1. Extensions
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS ltree;
CREATE EXTENSION IF NOT EXISTS unaccent;

-- 2. Hàm tính toán tsvector dùng chung
CREATE OR REPLACE FUNCTION calc_taxon_search_vector(
    p_taxon_id INT,
    p_vietnamese_name TEXT,
    p_scientific_name TEXT,
    p_order_in_book TEXT,
    p_habit TEXT,
    p_leaf TEXT,
    p_reproduction TEXT,
    p_distribution_text TEXT,
    p_description TEXT,
    p_author TEXT,
    p_note TEXT,
    p_value TEXT
) RETURNS tsvector AS $$
DECLARE
    v_content_b TEXT;
    v_content_c TEXT;
BEGIN
    -- Weight B: Tên khoa học & Số thứ tự sách
    v_content_b := COALESCE(p_scientific_name, '') || ' ' || COALESCE(p_order_in_book, '');

    -- Weight C: Tên gọi khác, đặc điểm hình thái, mô tả...
    -- Lấy string_agg từ các bảng liên quan
    v_content_c := 
        COALESCE((SELECT string_agg(cn.name, ' ') FROM taxon_common_name cn WHERE cn.taxon_id = p_taxon_id AND (cn.language = 'vi' OR cn.language IS NULL)), '') || ' ' ||
        COALESCE((SELECT string_agg(s.scientific_name, ' ') FROM taxon_synonym s WHERE s.taxon_id = p_taxon_id), '') || ' ' ||
        COALESCE(p_habit, '') || ' ' ||
        COALESCE(p_leaf, '') || ' ' ||
        COALESCE(p_reproduction, '') || ' ' ||
        COALESCE(p_distribution_text, '') || ' ' ||
        COALESCE(p_description, '') || ' ' ||
        COALESCE(p_author, '') || ' ' ||
        COALESCE(p_note, '') || ' ' ||
        COALESCE(p_value, '');

    RETURN 
        -- Weight A: Tên tiếng Việt
        (setweight(to_tsvector('simple', COALESCE(p_vietnamese_name, '')), 'A') || 
         setweight(to_tsvector('simple', unaccent(COALESCE(p_vietnamese_name, ''))), 'A')) ||
        -- Weight B: Tên khoa học
        (setweight(to_tsvector('simple', v_content_b), 'B') || 
         setweight(to_tsvector('simple', unaccent(v_content_b)), 'B')) ||
        -- Weight C: Các thông tin khác
        (setweight(to_tsvector('simple', v_content_c), 'C') || 
         setweight(to_tsvector('simple', unaccent(v_content_c)), 'C'));
END;
$$ LANGUAGE plpgsql;

-- 3. Trigger BEFORE cho bảng Taxon (Tối ưu hiệu năng insert/update)
CREATE OR REPLACE FUNCTION taxon_before_trigger_func() RETURNS trigger AS $$
BEGIN
    NEW.search_vector := calc_taxon_search_vector(
        NEW.id,
        NEW.vietnamese_name,
        NEW.scientific_name,
        NEW.order_in_book,
        NEW.habit,
        NEW.leaf,
        NEW.reproduction,
        NEW.distribution_text,
        NEW.description,
        NEW.author,
        NEW.note,
        NEW.value
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_taxon_search_sync ON taxon;
CREATE TRIGGER trg_taxon_search_sync
BEFORE INSERT OR UPDATE OF scientific_name, vietnamese_name, author,
    description, habit, leaf, reproduction, phenology,
    value, note, distribution_text, order_in_book
ON taxon
FOR EACH ROW EXECUTE FUNCTION taxon_before_trigger_func();

-- 4. Trigger cho các bảng liên quan (CommonName, Synonym)
-- Khi bảng phụ thay đổi, cập nhật lại search_vector của Taxon cha
CREATE OR REPLACE FUNCTION refresh_related_taxon_func() RETURNS trigger AS $$
DECLARE
    v_target_id INT;
BEGIN
    v_target_id := CASE WHEN TG_OP = 'DELETE' THEN OLD.taxon_id ELSE NEW.taxon_id END;
    
    UPDATE taxon t
    SET search_vector = calc_taxon_search_vector(
        t.id, t.vietnamese_name, t.scientific_name, t.order_in_book,
        t.habit, t.leaf, t.reproduction, t.distribution_text,
        t.description, t.author, t.note, t.value
    )
    WHERE t.id = v_target_id;
    
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger cho Common Name
DROP TRIGGER IF EXISTS trg_common_name_search_sync ON taxon_common_name;
CREATE TRIGGER trg_common_name_search_sync
AFTER INSERT OR UPDATE OR DELETE ON taxon_common_name
FOR EACH ROW EXECUTE FUNCTION refresh_related_taxon_func();

-- Trigger cho Synonym
DROP TRIGGER IF EXISTS trg_synonym_search_sync ON taxon_synonym;
CREATE TRIGGER trg_synonym_search_sync
AFTER INSERT OR UPDATE OR DELETE ON taxon_synonym
FOR EACH ROW EXECUTE FUNCTION refresh_related_taxon_func();

-- 5. Index GIN
CREATE INDEX IF NOT EXISTS taxon_search_vector_idx ON taxon USING GIN(search_vector);
