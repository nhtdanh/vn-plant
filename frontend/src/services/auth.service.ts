import { api } from "./api";
import { 
  type User, 
  type AuthResponse, 
  type ApiResponse,
  type LoginInput,
  type RegisterInput
} from "../types";

class AuthService {
  async login(data: LoginInput): Promise<AuthResponse> {
    const response = await api.post<ApiResponse<AuthResponse>>("/auth/login", data);
    return response.data.data;
  }

  async register(data: RegisterInput): Promise<AuthResponse> {
    const response = await api.post<ApiResponse<AuthResponse>>("/auth/register", data);
    return response.data.data;
  }

  async logout(): Promise<void> {
    await api.post("/auth/logout");
  }

  async getMe(): Promise<User> {
    const response = await api.get<ApiResponse<User>>("/users/me");
    return response.data.data;
  }
}

export const authService = new AuthService();
