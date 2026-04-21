import { create } from "zustand";
import { api } from "../services/api";
import { type User } from "../types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // hành động
  login: (user: User, token: string) => void;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true, // bắt đầu ở trạng thái tải (loading) để kiểm tra mã truy cập hiện có

  login: (user, token) => {
    localStorage.setItem("accessToken", token);
    set({ user, isAuthenticated: true, isLoading: false });
  },

  logout: async () => {
    try {
      // máy chủ sẽ xóa cookie làm mới (httponly refreshtoken)
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("accessToken");
      set({ user: null, isAuthenticated: false, isLoading: false });
      window.location.href = "/login"; // chuyển hướng sau khi đăng xuất
    }
  },

  setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false }),
  
  setLoading: (isLoading) => set({ isLoading }),

  checkAuth: async () => {
    const token = localStorage.getItem("accessToken");
    
    // nếu không có mã truy cập, không cần gọi api
    if (!token) {
      set({ user: null, isAuthenticated: false, isLoading: false });
      return;
    }

    try {
      // gọi đúng điểm cuối /users/me thay vì /auth/me
      const response = await api.get("/users/me");
      const user = response.data.data;
      set({ user, isAuthenticated: true, isLoading: false });
    } catch {
      // nếu yêu cầu lấy thông tin người dùng thất bại ngay cả sau khi đã thử làm mới mã truy cập
      localStorage.removeItem("accessToken");
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
}));
