import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { LoadingBar } from "../ui/LoadingBar";

interface ProtectedRouteProps {
  redirectPath?: string;
}

export function ProtectedRoute({
  redirectPath = "/login",
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuthStore();
  const location = useLocation();

  if (isLoading) {
    return <LoadingBar />;
  }

  if (!isAuthenticated) {
    // chuyển hướng đến trang đăng nhập và lưu lại vị trí hiện tại
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <Outlet />;
}
