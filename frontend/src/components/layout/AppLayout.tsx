import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      {/* thanh điều hướng phía trên */}
      <Navbar />

      {/* khu vực nội dung chính - thêm flex-1 để đẩy chân trang xuống */}
      <main className="relative bg-background flex-1">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <Outlet />
        </div>
      </main>

      {/* chân trang */}
      <Footer />
    </div>
  );
}
