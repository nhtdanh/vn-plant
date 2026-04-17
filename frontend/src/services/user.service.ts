import { api } from "./api";
import type { ApiResponse, PaginatedResponse, TaxonImage } from "../types";

/**
 * Dịch vụ dành cho các tác vụ liên quan đến người dùng hiện tại
 */
export const userService = {
  /**
   * Lấy danh sách ảnh do chính người dùng hiện tại đóng góp
   */
  getMyContributions: async (page = 1, limit = 10): Promise<ApiResponse<PaginatedResponse<TaxonImage>>> => {
    const response = await api.get<ApiResponse<PaginatedResponse<TaxonImage>>>("/taxa/images/me", {
      params: { page, limit }
    });
    return response.data;
  },

  /**
   * Lấy thống kê đóng góp cá nhân (số lượng pending, approved, rejected)
   */
  getMyStats: async (): Promise<ApiResponse<any>> => {
    const response = await api.get<ApiResponse<any>>("/taxa/images/me/stats");
    return response.data;
  },

  /**
   * Thả tim/Bỏ tim cho một tấm ảnh
   */
  toggleLike: async (imageId: number): Promise<ApiResponse<{ liked: boolean; likesCount: number }>> => {
    const response = await api.post<ApiResponse<{ liked: boolean; likesCount: number }>>(`/taxon-images/${imageId}/like`);
    return response.data;
  },

  /**
   * Cập nhật thông tin cá nhân (displayName)
   */
  updateMe: async (data: { displayName: string }): Promise<ApiResponse<any>> => {
    const response = await api.patch<ApiResponse<any>>("/users/me", data);
    return response.data;
  },

  /**
   * Tải ảnh đại diện lên
   */
  uploadAvatar: async (formData: FormData): Promise<ApiResponse<{ avatarUrl: string }>> => {
    const response = await api.post<ApiResponse<{ avatarUrl: string }>>("/users/me/avatar", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
};
