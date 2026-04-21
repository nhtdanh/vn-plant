import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";

// giao diện khung (layouts)
import { AppLayout } from "@/components/layout/AppLayout";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { AdminLayout } from "@/components/layout/AdminLayout";

// bảo vệ tuyến đường (guards)
import { AdminGuard } from "@/components/auth/AdminGuard";

// thành phần giao diện (ui)
import { Toaster } from "@/components/ui/Toaster";

// trang (pages)
import { Home } from "@/pages/Home";
import { Browse } from "@/pages/Browse";
import { PlantDetail } from "@/pages/PlantDetail";
import { Login } from "@/pages/auth/Login";
import { Register } from "@/pages/auth/Register";
import { AdminDashboard } from "@/pages/admin/Dashboard";
import { AdminImageReview } from "@/pages/admin/ImageReview";
import { TaxonManagement } from "@/pages/admin/TaxonManagement";
import { TaxonFormPage } from "@/pages/admin/TaxonFormPage";
import { AdminUserManagement } from "@/pages/admin/UserManagement";

import { Profile } from "@/pages/user/Profile";

// thành phần chung (common)
import { ScrollToTop } from "@/components/shared/ScrollToTop";

function App() {
  const { checkAuth, isAuthenticated, user, isLoading } = useAuthStore();

  useEffect(() => {
    // khởi tạo trạng thái xác thực
    checkAuth();
  }, [checkAuth]);

  // ngăn chặn việc hiển thị tuyến đường khi đang kiểm tra mã truy cập để tránh gây giật giao diện (flickering)
  if (isLoading) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster />
      <Routes>
        {/* tuyến đường xác thực (chỉ cho người chưa đăng nhập) */}
        <Route
          element={
            !isAuthenticated ? (
              <AuthLayout />
            ) : (
              <Navigate to={user?.role === "admin" ? "/admin" : "/"} replace />
            )
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* tuyến đường ứng dụng (truy cập công khai) */}
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/plant/:slug" element={<PlantDetail />} />
          <Route
            path="/profile"
            element={
              isAuthenticated ? <Profile /> : <Navigate to="/login" replace />
            }
          />
        </Route>

        {/* tuyến đường admin (bảo vệ bằng adminguard) */}
        <Route
          path="/admin"
          element={
            <AdminGuard>
              <AdminLayout />
            </AdminGuard>
          }
        >
          <Route index element={<AdminDashboard />} />
          {/* các trang admin khác sẽ thêm vào đây */}
          <Route path="images" element={<AdminImageReview />} />
          <Route path="taxons" element={<TaxonManagement />} />
          <Route path="taxons/new" element={<TaxonFormPage />} />
          <Route path="taxons/edit/:id" element={<TaxonFormPage />} />
          <Route path="users" element={<AdminUserManagement />} />

        </Route>

        {/* chuyển hướng mặc định */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
