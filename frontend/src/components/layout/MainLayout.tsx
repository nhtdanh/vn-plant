import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 pt-4 pb-0">
        <Outlet />
      </main>
      <footer className="border-t py-4 px-4 text-center text-xs text-muted-foreground bg-white">
        Footer
      </footer>
    </div>
  );
}
