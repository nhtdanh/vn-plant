import { motion } from "framer-motion";
import {
  Database,
  Image as ImageIcon,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { adminService } from "@/services/admin.service";
import { DashboardCharts } from "@/components/admin/DashboardCharts";

/**
 * AdminDashboard - Trang tổng quan dành cho quản trị viên
 */
export function AdminDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stats = await adminService.getStats();
        setData(stats);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };
    fetchData();
  }, []);

  const stats = [
    {
      icon: <Database size={20} />,
      label: "TỔNG TAXON",
      value: data?.taxa?.total || 0,
      bg: "bg-[var(--chart-1)]",
      fg: "text-[var(--chart-1-fg)]"
    },
    {
      icon: <ImageIcon size={20} />,
      label: "TỔNG SỐ ẢNH",
      value: data?.contributions?.total || 0,
      bg: "bg-[var(--chart-2)]",
      fg: "text-[var(--chart-2-fg)]"
    },
    {
      icon: <Users size={20} />,
      label: "TỔNG THÀNH VIÊN",
      value: data?.users?.total || 0,
      bg: "bg-[var(--chart-3)]",
      fg: "text-[var(--chart-3-fg)]"
    },
    {
      icon: <ImageIcon size={20} />,
      label: "ẢNH ĐÓNG GÓP",
      value: data?.contributions?.contributed || 0,
      bg: "bg-[var(--chart-4)]",
      fg: "text-[var(--chart-4-fg)]"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-2 pb-10 mt-1">
      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={cn(
              "p-5 rounded-sm shadow-sm flex flex-col gap-3 transition-all",
              stat.bg,
              stat.fg
            )}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-80">{stat.label}</span>
              <div className="opacity-70">
                {stat.icon}
              </div>
            </div>
            <p className="text-3xl font-sans font-normal tracking-tight">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Distribution & Audit Charts */}
      {data?.distribution && data?.audit && (
        <DashboardCharts 
          distribution={data.distribution} 
          audit={{
            ...data.audit,
            totalTaxa: data.taxa?.total || 0
          }}
        />
      )}
    </div>
  );
}
