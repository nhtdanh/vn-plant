import { create } from "zustand";
import { api } from "../services/api";
import { type User } from "../types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // Hành động
  login: (user: User, token: string) => void;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true, // Bắt đầu ở trạng thái loading để kiểm tra token hiện có

  login: (user, token) => {
    localStorage.setItem("accessToken", token);
    set({ user, isAuthenticated: true, isLoading: false });
  },

  logout: async () => {
    try {
      // Backend sẽ xóa HttpOnly refreshToken cookie
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("accessToken");
      set({ user: null, isAuthenticated: false, isLoading: false });
      window.location.href = "/login"; // Chuyển hướng sau khi logout
    }
  },

  setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false }),
  
  setLoading: (isLoading) => set({ isLoading }),

  checkAuth: async () => {
    const token = localStorage.getItem("accessToken");
    
    // Nếu không có token, không cần gọi API (giả định session-less)
    if (!token) {
      set({ user: null, isAuthenticated: false, isLoading: false });
      return;
    }

    try {
      // SỬA LỖI: Gọi đúng endpoint /users/me thay vì /auth/me
      const response = await api.get("/users/me");
      const user = response.data.data;
      set({ user, isAuthenticated: true, isLoading: false });
    } catch {
      // Nếu /me thất bại ngay cả sau khi interceptors đã thử refresh
      localStorage.removeItem("accessToken");
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
}));
