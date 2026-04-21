import { api } from "./api";
import type { 
  ApiResponse, 
  PaginatedResponse, 
  Taxon, 
  TaxonAncestor, 
  TaxonDetail,
  TaxonSuggestion,
  TaxonImage
} from "../types";
import type { BrowseQuery } from "../types/browse";

// lấy danh sách thực vật (lọc, tìm kiếm, phân trang)
export async function fetchTaxa(
  query: BrowseQuery,
): Promise<ApiResponse<PaginatedResponse<Taxon>>> {
  const response = await api.get<ApiResponse<PaginatedResponse<Taxon>>>("/taxa", { 
    params: query 
  });
  return response.data;
}

// lấy chi tiết thực vật theo slug
export async function fetchTaxonDetail(
  slug: string,
): Promise<ApiResponse<TaxonDetail>> {
  const response = await api.get<ApiResponse<TaxonDetail>>(`/taxa/${slug}`);
  return response.data;
}

// lấy gợi ý tìm kiếm (autocomplete)
export async function fetchTaxonSuggestions(
  q: string,
  limit = 5,
): Promise<ApiResponse<TaxonSuggestion[]>> {
  const response = await api.get<ApiResponse<TaxonSuggestion[]>>("/taxa/autocomplete", {
    params: { q, limit }
  });
  return response.data;
}

// lấy danh sách loài liên quan
export async function fetchRelatedTaxa(
  id: number,
): Promise<ApiResponse<Taxon[]>> {
  const response = await api.get<ApiResponse<Taxon[]>>(`/taxa/${id}/related`);
  return response.data;
}

// lấy chuỗi phân loại (ancestors) cho breadcrumb
export async function fetchAncestors(
  id: number,
): Promise<ApiResponse<TaxonAncestor[]>> {
  const response = await api.get<ApiResponse<TaxonAncestor[]>>(`/taxa/${id}/ancestors`);
  return response.data;
}

// lấy metadata phân loại (rank, group...)
export async function fetchTaxonMetadata(): Promise<ApiResponse<any>> {
  const response = await api.get<ApiResponse<any>>("/taxa/metadata");
  return response.data;
}

// lấy danh sách con phục vụ sơ đồ cây
export async function fetchTaxonTreeNodes(
  parentId: number
): Promise<ApiResponse<PaginatedResponse<Taxon>>> {
  const response = await api.get<ApiResponse<PaginatedResponse<Taxon>>>("/taxa", {
    params: { parentId, limit: 100 }
  });
  return response.data;
}

// lấy danh sách tỉnh thành
export async function fetchProvinces(): Promise<ApiResponse<any[]>> {
  const response = await api.get<ApiResponse<any[]>>("/taxa/provinces");
  return response.data;
}

// giữ lại tên hàm cũ để tương thích ngược
export const fetchPlantDetail = fetchTaxonDetail;
export const fetchSuggestions = fetchTaxonSuggestions;
export const fetchMetadata = fetchTaxonMetadata;

// đóng góp hình ảnh cho một loài thực vật
export async function contributeImage(
  formData: FormData
): Promise<ApiResponse<TaxonImage>> {
  const response = await api.post<ApiResponse<TaxonImage>>("/taxa/images/contribute", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}
