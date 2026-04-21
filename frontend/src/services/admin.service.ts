import { api } from "./api";
import type { 
  PaginatedResponse, 
  TaxonImage, 
  ImageStatus, 
  ApiResponse, 
  User, 
  CreateUserInput
} from "../types";

// dịch vụ dành riêng cho các tác vụ quản trị (admin)
export const adminService = {
  // lấy số liệu thống kê tổng quan của hệ thống
  getStats: async () => {
    const response = await api.get("/admin/stats");
    return response.data.data;
  },

  // lấy danh sách hình ảnh cần phê duyệt (hỗ trợ lọc theo trạng thái)
  getPendingImages: async (page = 1, limit = 10, status?: ImageStatus) => {
    const response = await api.get<ApiResponse<PaginatedResponse<TaxonImage>>>(
      "/admin/images/pending",
      {
        params: { page, limit, status },
      },
    );
    return response.data.data;
  },

  // phê duyệt hoặc từ chối một hình ảnh
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

  // lấy danh sách người dùng (phân trang)
  getUsers: async (page = 1, limit = 20, q?: string) => {
    const response = await api.get<ApiResponse<PaginatedResponse<User>>>(
      "/admin/users",
      {
        params: { page, limit, q },
      },
    );
    return response.data.data;
  },

  // cập nhật quyền (role) cho người dùng
  updateUserRole: async (userId: string, role: string) => {
    const response = await api.patch(`/admin/users/${userId}/role`, { role });
    return response.data.data;
  },

  // cập nhật trạng thái người dùng (active/inactive)
  updateUserStatus: async (userId: string, status: string) => {
    const response = await api.patch(`/admin/users/${userId}/status`, {
      status,
    });
    return response.data.data;
  },

  // tạo người dùng mới qua quyền admin
  createUser: async (data: CreateUserInput) => {
    const response = await api.post<ApiResponse<User>>("/admin/users", data);
    return response.data.data;
  },
  
  // xóa vĩnh viễn người dùng
  deleteUser: async (userId: string) => {
    const response = await api.delete(`/admin/users/${userId}`);
    return response.data.data;
  },

  // lấy danh sách taxon cùng với các tiêu chí lọc bộ (admin)
  getTaxons: async (params: {
    page?: number;
    limit?: number;
    q?: string;
    rank?: string;
    plantGroup?: string;
    hasImage?: boolean;
    hasDescription?: boolean;
    hasVietnamName?: boolean;
    status?: string;
  }) => {
    const response = await api.get<ApiResponse<PaginatedResponse<any>>>(
      "/admin/taxa",
      { params },
    );
    return response.data.data;
  },


  // lấy chi tiết một taxon (admin - bao gồm tất cả quan hệ)
  getTaxon: async (id: number) => {
    const response = await api.get(`/admin/taxa/${id}`);
    return response.data.data;
  },

  // tạo taxon mới (sử dụng formdata cho upload ảnh)
  createTaxon: async (formData: FormData) => {
    const response = await api.post("/admin/taxa", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.data;
  },

  // cập nhật taxon (sử dụng formdata cho upload ảnh)
  updateTaxon: async (id: number, formData: FormData) => {
    const response = await api.patch(`/admin/taxa/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.data;
  },

  // xóa taxon (xóa cứng)
  deleteTaxon: async (id: number) => {
    const response = await api.delete(`/admin/taxa/${id}`);
    return response.data.data;
  },
};
