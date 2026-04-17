import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function AuthLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    const from = location.state?.from?.pathname;
    if (from) {
      navigate(from);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 overflow-hidden bg-zinc-950">
      {/* 0. BACK NAVIGATION BUTTON */}
      <button
        onClick={handleBack}
        className="absolute top-6 left-6 z-20 p-2 text-white/50 hover:text-white transition-all hover:scale-110 active:scale-95 cursor-pointer"
        title="Quay lại"
      >
        <ArrowLeft size={24} strokeWidth={2.5} />
      </button>

      {/* 1. FULL-SCREEN BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] scale-105 hover:scale-100"
        style={{
          backgroundImage: "url('/images/auth-hero.png')",
          filter: "brightness(0.6) contrast(1.1)",
        }}
      />

      {/* Subtle Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-black/40" />

      {/* 2. FLOATING CONTENT CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[420px]"
      >
        {/* The Card - Compact Version */}
        <div className="bg-white/95 backdrop-blur-md shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/20 rounded-lg overflow-hidden p-8 md:p-10 pb-6 md:pb-8">
          <Outlet />
        </div>
      </motion.div>
    </div>
  );
}
