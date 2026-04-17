-- 1. Đảm bảo các extension cần thiết đã được bật
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS ltree;
CREATE EXTENSION IF NOT EXISTS unaccent;

-- 2. Hàm trung tâm để cập nhật Search Vector cho một Taxon
-- Weight A: Tên định danh (quan trọng nhất)
-- Weight B: Tên gọi khác (Common/Synonym) + Đặc điểm hình thái quan trọng + Phân bố
-- Weight C: Mô tả chi tiết + Thông tin khác
CREATE OR REPLACE FUNCTION refresh_taxon_search_vector(p_taxon_id INT)
RETURNS void AS $$
DECLARE
    v_content_a TEXT;
    v_content_b TEXT;
    v_content_c TEXT;
BEGIN
    -- 1. Content A: Tên tiếng Việt (QUAN TRỌNG NHẤT)
    SELECT
        COALESCE(t.vietnamese_name, '')
    INTO v_content_a
    FROM taxon t WHERE t.id = p_taxon_id;

    -- 2. Content B: Tên khoa học & Số thứ tự sách (QUAN TRỌNG NHÌ)
    SELECT
        COALESCE(t.scientific_name, '') || ' ' ||
        COALESCE(t.order_in_book, '')
    INTO v_content_b
    FROM taxon t WHERE t.id = p_taxon_id;

    -- 3. Content C: Tên gọi khác, Hình thái, Phân bố, Mô tả, v.v.
    SELECT
        -- Tên thường gọi & Đồng nghĩa
        COALESCE((SELECT string_agg(cn.name, ' ') FROM taxon_common_name cn WHERE cn.taxon_id = p_taxon_id AND (cn.language = 'vi' OR cn.language IS NULL)), '') || ' ' ||
        COALESCE((SELECT string_agg(s.scientific_name, ' ') FROM taxon_synonym s WHERE s.taxon_id = p_taxon_id), '') || ' ' ||
        -- Đặc điểm
        COALESCE(t.habit, '') || ' ' ||
        COALESCE(t.leaf, '') || ' ' ||
        COALESCE(t.reproduction, '') || ' ' ||
        COALESCE(t.distribution_text, '') || ' ' ||
        COALESCE(t.description, '') || ' ' ||
        COALESCE(t.author, '') || ' ' ||
        COALESCE(t.note, '') || ' ' ||
        COALESCE(t.value, '')
    INTO v_content_c
    FROM taxon t WHERE t.id = p_taxon_id;

    -- Ghi vào search_vector
    UPDATE taxon
    SET search_vector =
        -- Weight A: Tên chính tiếng Việt (X2 ưu tiên)
        (setweight(to_tsvector('simple', COALESCE(v_content_a, '')), 'A') || 
         setweight(to_tsvector('simple', unaccent(COALESCE(v_content_a, ''))), 'A')) ||
        -- Weight B: Tên khoa học
        (setweight(to_tsvector('simple', COALESCE(v_content_b, '')), 'B') || 
         setweight(to_tsvector('simple', unaccent(COALESCE(v_content_b, ''))), 'B')) ||
        -- Weight C: Các thông tin bổ trợ khác
        (setweight(to_tsvector('simple', COALESCE(v_content_c, '')), 'C') || 
         setweight(to_tsvector('simple', unaccent(COALESCE(v_content_c, ''))), 'C'))
    WHERE id = p_taxon_id;
END;
$$ LANGUAGE plpgsql;

-- Chạy cập nhật lại toàn bộ dữ liệu hiện có để áp dụng logic vector mới
-- LƯU Ý: Bước này sẽ được gọi ở cuối script setup-search.ts để đảm bảo an toàn

-- 3. Hàm trigger cho bảng Taxon (AFTER INSERT OR UPDATE)
CREATE OR REPLACE FUNCTION taxon_after_trigger_func() RETURNS trigger AS $$
BEGIN
    PERFORM refresh_taxon_search_vector(NEW.id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger AFTER INSERT OR UPDATE trên bảng Taxon
DROP TRIGGER IF EXISTS trg_taxon_search_sync ON taxon;
CREATE TRIGGER trg_taxon_search_sync
AFTER INSERT OR UPDATE OF scientific_name, vietnamese_name, author,
    description, habit, leaf, reproduction, phenology,
    value, note, distribution_text, order_in_book
ON taxon
FOR EACH ROW EXECUTE FUNCTION taxon_after_trigger_func();

-- 4. Trigger cho bảng TaxonCommonName (Tên thường gọi)
CREATE OR REPLACE FUNCTION common_name_after_trigger_func() RETURNS trigger AS $$
BEGIN
    IF (TG_OP = 'DELETE') THEN
        PERFORM refresh_taxon_search_vector(OLD.taxon_id);
        RETURN OLD;
    ELSE
        PERFORM refresh_taxon_search_vector(NEW.taxon_id);
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_common_name_search_sync ON taxon_common_name;
CREATE TRIGGER trg_common_name_search_sync
AFTER INSERT OR UPDATE OR DELETE ON taxon_common_name
FOR EACH ROW EXECUTE FUNCTION common_name_after_trigger_func();

-- 5. Trigger cho bảng TaxonSynonym (Tên đồng nghĩa - MỚI)
CREATE OR REPLACE FUNCTION synonym_after_trigger_func() RETURNS trigger AS $$
BEGIN
    IF (TG_OP = 'DELETE') THEN
        PERFORM refresh_taxon_search_vector(OLD.taxon_id);
        RETURN OLD;
    ELSE
        PERFORM refresh_taxon_search_vector(NEW.taxon_id);
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_synonym_search_sync ON taxon_synonym;
CREATE TRIGGER trg_synonym_search_sync
AFTER INSERT OR UPDATE OR DELETE ON taxon_synonym
FOR EACH ROW EXECUTE FUNCTION synonym_after_trigger_func();

-- 6. Trigger cho bảng TaxonProvince (vùng phân bố)
CREATE OR REPLACE FUNCTION taxon_province_after_trigger_func() RETURNS trigger AS $$
BEGIN
    IF (TG_OP = 'DELETE') THEN
        PERFORM refresh_taxon_search_vector(OLD.taxon_id);
        RETURN OLD;
    ELSE
        PERFORM refresh_taxon_search_vector(NEW.taxon_id);
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_taxon_province_search_sync ON taxon_province;
CREATE TRIGGER trg_taxon_province_search_sync
AFTER INSERT OR UPDATE OR DELETE ON taxon_province
FOR EACH ROW EXECUTE FUNCTION taxon_province_after_trigger_func();

-- 7. Index GIN cho Full-Text Search (tsvector)
CREATE INDEX IF NOT EXISTS taxon_search_vector_idx ON taxon USING GIN(search_vector);

-- 7. Index GIN cho Full-Text Search (tsvector)
CREATE INDEX IF NOT EXISTS taxon_search_vector_idx ON taxon USING GIN(search_vector);

-- 8. Chạy cập nhật lần đầu cho toàn bộ dữ liệu hiện có (Backfill full-text)
-- DO $$
-- BEGIN
--    UPDATE taxon SET scientific_name = scientific_name; -- kick-off FTS trigger
-- END $$;
