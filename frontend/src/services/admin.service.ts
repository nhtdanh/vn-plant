import { api } from "./api";
import type { 
  PaginatedResponse, 
  TaxonImage, 
  ImageStatus, 
  ApiResponse, 
  User, 
  CreateUserInput
} from "../types";

/**
 * Dịch vụ dành riêng cho các tác vụ Quản trị (Admin)
 */
export const adminService = {
  /**
   * Lấy số liệu thống kê tổng quan của hệ thống
   */
  getStats: async () => {
    const response = await api.get("/admin/stats");
    return response.data.data;
  },

  /**
   * Lấy danh sách hình ảnh cần phê duyệt (hỗ trợ lọc theo trạng thái)
   */
  getPendingImages: async (page = 1, limit = 10, status?: ImageStatus) => {
    const response = await api.get<ApiResponse<PaginatedResponse<TaxonImage>>>(
      "/admin/images/pending",
      {
        params: { page, limit, status },
      },
    );
    return response.data.data;
  },

  /**
   * Phê duyệt hoặc Từ chối một hình ảnh
   */
  reviewImage: async (
    id: number,
    status: ImageStatus,
    recordNote?: string,
  ) => {
    const response = await api.patch(`/admin/images/${id}/review`, {
      status,
      recordNote,
    });
    return response.data.data;
  },

  /**
   * Lấy danh sách người dùng (Phân trang)
   */
  getUsers: async (page = 1, limit = 20, q?: string) => {
    const response = await api.get<ApiResponse<PaginatedResponse<User>>>(
      "/admin/users",
      {
        params: { page, limit, q },
      },
    );
    return response.data.data;
  },

  /**
   * Cập nhật quyền (role) cho người dùng
   */
  updateUserRole: async (userId: string, role: string) => {
    const response = await api.patch(`/admin/users/${userId}/role`, { role });
    return response.data.data;
  },

  /**
   * Cập nhật trạng thái người dùng (active/inactive)
   */
  updateUserStatus: async (userId: string, status: string) => {
    const response = await api.patch(`/admin/users/${userId}/status`, {
      status,
    });
    return response.data.data;
  },

  /**
   * Tạo người dùng mới qua quyền Admin
   */
  createUser: async (data: CreateUserInput) => {
    const response = await api.post<ApiResponse<User>>("/admin/users", data);
    return response.data.data;
  },

  /**
   * Lấy danh sách Taxon cùng với các tiêu chí lọc bộ (Admin)
   */
  getTaxons: async (params: {
    page?: number;
    limit?: number;
    q?: string;
    rank?: string;
    plantGroup?: string;
    hasImage?: boolean;
    hasDescription?: boolean;
    status?: string;
  }) => {
    const response = await api.get<ApiResponse<PaginatedResponse<any>>>(
      "/admin/taxa",
      { params },
    );
    return response.data.data;
  },


  /**
   * Lấy chi tiết một Taxon (Admin - bao gồm tất cả quan hệ)
   */
  getTaxon: async (id: number) => {
    const response = await api.get(`/admin/taxa/${id}`);
    return response.data.data;
  },

  /**
   * Tạo Taxon mới (Sử dụng FormData cho upload ảnh)
   */
  createTaxon: async (formData: FormData) => {
    const response = await api.post("/admin/taxa", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.data;
  },

  /**
   * Cập nhật Taxon (Sử dụng FormData cho upload ảnh)
   */
  updateTaxon: async (id: number, formData: FormData) => {
    const response = await api.patch(`/admin/taxa/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.data;
  },

  /**
   * Xóa Taxon (Xóa cứng)
   */
  deleteTaxon: async (id: number) => {
    const response = await api.delete(`/admin/taxa/${id}`);
    return response.data.data;
  },
};
