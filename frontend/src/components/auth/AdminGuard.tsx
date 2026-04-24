import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { LoadingBar } from "@/components/ui/LoadingBar";

interface AdminGuardProps {
  children: ReactNode;
}

// adminguard - bảo vệ các route chỉ dành cho admin
// kiểm tra xem người dùng đã đăng nhập chưa và có role là 'admin' không
export function AdminGuard({ children }: AdminGuardProps) {
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const location = useLocation();

  // hiển thị loading trong khi kiểm tra auth
  if (isLoading) {
    return <LoadingBar />;
  }

  // nếu chưa đăng nhập, chuyển hướng đến trang login và lưu lại vị trí hiện tại
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // nếu không phải admin, chuyển hướng về trang chủ
  if (user?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
