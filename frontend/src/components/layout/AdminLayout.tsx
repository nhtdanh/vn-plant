import { useState, useEffect } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Image as ImageIcon,
  Database,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { cn } from "@/lib/utils";
import { adminService } from "@/services/admin.service";

// adminlayout - giao diện khung dành cho khu vực quản trị
// bao gồm sidebar cố định và khu vực nội dung chính
export function AdminLayout() {
  const { logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pendingCount, setPendingCount] = useState<number>(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const stats = await adminService.getStats();
        if (stats?.contributions?.pending !== undefined) {
          setPendingCount(stats.contributions.pending);
        }
      } catch (error) {
        console.error("Failed to fetch admin stats:", error);
      }
    };
    fetchStats();
  }, [location.pathname]); // lấy lại dữ liệu khi điều hướng để cập nhật số liệu

  const navItems = [
    { name: "DASHBOARD", icon: LayoutDashboard, path: "/admin" },
    { name: "PHÊ DUYỆT ẢNH", icon: ImageIcon, path: "/admin/images", badge: pendingCount > 0 ? pendingCount : undefined },
    { name: "QUẢN LÝ THỰC VẬT", icon: Database, path: "/admin/taxons" },
    { name: "QUẢN LÝ THÀNH VIÊN", icon: Users, path: "/admin/users" },
  ];

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-zinc-50/50">
      {/* 1. tiêu đề cho di động */}
      <div className="md:hidden fixed top-0 w-full h-16 bg-white border-b border-zinc-200 z-50 flex items-center justify-between px-6">
        <Link to="/admin" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 text-zinc-500 hover:text-emerald-700"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* 2. thanh bên cho máy tính */}
      <motion.aside
        initial={false}
        animate={{ width: 220 }}
        className="hidden md:flex flex-col fixed inset-y-0 left-0 bg-[#3a6851] border-r border-white/10 z-40 transition-all text-white/80"
      >
        {/* tiêu đề thanh bên: logo */}
        <div className="h-14 flex items-center mt-2 mb-2 justify-center">
            <Link to="/" className="flex items-center gap-3">
               <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>
        </div>

        {/* điều hướng thanh bên */}
        <nav className="flex-1 px-0 space-y-0.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative flex items-center justify-between px-6 py-2.5 transition-all group",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white",
                )}
              >
                {/* thanh chỉ báo mục đang hoạt động */}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#dcfce7] shadow-[0_0_8px_rgba(220,252,231,0.5)]" 
                  />
                )}
                
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] truncate">
                  {item.name}
                </span>
                {item.badge && (
                  <span className="ml-auto text-[10px] text-white/50 font-mono font-medium">
                    ({item.badge})
                  </span>
                )}           
              </Link>
            );
          })}
        </nav>

        {/* chân trang thanh bên: đăng xuất */}
        <div className="py-2 border-t border-white/10 px-4">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-3 py-2 px-2 rounded-sm hover:bg-white/10 transition-all w-full text-white/60 hover:text-white"
            title="Đăng xuất"
          >
            <LogOut size={16} />
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-normal">
              Đăng xuất
            </span>
          </button>
        </div>
      </motion.aside>

      {/* 3. trình đơn phủ cho di động */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[220px] bg-[#3a6851] text-white/80 z-[70] md:hidden flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="h-8 w-auto"
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-white/60 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 space-y-2">
                {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-sm text-sm font-normal uppercase tracking-widest transition-all",
                        location.pathname === item.path
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:bg-white/5 active:bg-white/10",
                      )}
                    >
                      <item.icon size={20} />
                      {item.name}
                    </Link>
                ))}
              </nav>

              <div className="mt-auto border-t border-white/10 pt-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-4 py-3 px-2 rounded-sm text-xs font-normal uppercase tracking-widest text-white/60 hover:text-white transition-all w-full hover:bg-white/5"
                >
                  <LogOut size={18} />
                  Đăng xuất
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 4. khu vực nội dung chính */}
      <main
        className={cn(
          "flex-1 flex flex-col transition-all duration-300 min-h-screen",
          "md:ml-[220px]",
          "pt-16 md:pt-0", // phần đệm cho tiêu đề di động
        )}
      >
        <div className="px-6 py-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
