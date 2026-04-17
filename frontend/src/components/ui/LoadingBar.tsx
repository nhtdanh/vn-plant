import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingBarProps {
  className?: string;
}

export function LoadingBar({ className }: LoadingBarProps) {
  return (
    <div className={cn("fixed top-0 left-0 right-0 z-[100] h-[3px] bg-primary/10 overflow-hidden", className)}>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut" as const,
        }}
        className="w-full h-full bg-primary"
      />
    </div>
  );
}
