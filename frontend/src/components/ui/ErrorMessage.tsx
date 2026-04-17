import { AlertCircle, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorMessage({ message = "Đã có lỗi xảy ra", onRetry, className = "" }: ErrorMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex flex-col items-center justify-center py-12 px-4 text-center", className)}
    >
      <div className="w-12 h-12 bg-destructive/5 rounded-full flex items-center justify-center mb-4">
        <AlertCircle className="w-6 h-6 text-destructive/40" />
      </div>
      <h3 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-foreground/80 mb-2">
        Thông báo hệ thống
      </h3>
      <p className="text-sm font-sans italic text-muted-foreground max-w-xs mb-6">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-widest text-primary hover:text-primary/70 transition-colors group cursor-pointer"
        >
          <RefreshCcw size={12} className="group-hover:rotate-180 transition-transform duration-500" />
          Thử lại
        </button>
      )}
    </motion.div>
  );
}
