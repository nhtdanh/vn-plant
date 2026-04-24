import type { TaxonomyRank, PlantGroup } from "./index";

// tham số truy vấn cho tìm kiếm và phân loại
export interface BrowseQuery {
  q?: string; // query tìm kiếm
  group?: PlantGroup[]; // lọc theo nhóm thực vật
  rank?: TaxonomyRank[]; // lọc theo cấp phân loại
  province?: string[]; // lọc theo tỉnh thành
  parentId?: number; // lọc theo taxon cha
  page?: number;
  limit?: number;
  // sort không cần thiết: backend tự chọn (có q → by score, không có q → by name)
}
