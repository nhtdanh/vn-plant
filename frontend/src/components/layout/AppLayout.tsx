import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area - Added flex-1 to push footer down */}
      <main className="relative bg-background flex-1">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
