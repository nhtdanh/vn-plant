import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChartData {
  name: string;
  value: number;
}

interface DashboardChartsProps {
  distribution: {
    ranks: ChartData[];
    groups: ChartData[];
  };
  audit: {
    noImages: number;
    noVietName: number;
    noDescription: number;
    totalTaxa: number;
  };
}

const RANK_LABELS: Record<string, string> = {
  phylum: "Ngành",
  taxonomicClass: "Lớp",
  order: "Bộ",
  family: "Họ",
  genus: "Chi",
  species: "Loài",
  infraspecific: "Dưới loài",
};

const GROUP_LABELS: Record<string, string> = {
  angiosperm: "Hạt kín",
  gymnosperm: "Hạt trần",
  fern: "Dương xỉ",
  "Chưa phân loại": "Khác",
};

// Tăng nhẹ sắc độ bằng cách mix màu nhạt với màu đậm (25%)
const CHART_COLORS = [
  "color-mix(in srgb, var(--chart-1), var(--chart-1-fg) 25%)",
  "color-mix(in srgb, var(--chart-2), var(--chart-2-fg) 25%)",
  "color-mix(in srgb, var(--chart-3), var(--chart-3-fg) 25%)",
  "color-mix(in srgb, var(--chart-5), var(--chart-5-fg) 25%)",
  "color-mix(in srgb, var(--chart-4), var(--chart-4-fg) 25%)",
];

export function DashboardCharts({ distribution, audit }: DashboardChartsProps) {
  // Logic gộp nhóm bậc phân loại infraspecific
  const rankData = (() => {
    const rawRanks = distribution?.ranks || [];
    const aggregated: Record<string, number> = {};

    rawRanks.forEach(r => {
      let key = r.name;
      if (["subspecies", "variety", "forma"].includes(key)) {
        key = "infraspecific";
      }
      aggregated[key] = (aggregated[key] || 0) + r.value;
    });

    return Object.entries(aggregated)
      .map(([name, value]) => ({
        name: RANK_LABELS[name] || name,
        value,
        key: name
      }))
      .sort((a, b) => b.value - a.value);
  })();

  const groupData = distribution?.groups
    ?.filter(g => g.name !== "Chưa phân loại") // Loại bỏ nhóm "Khác"
    ?.map(g => ({
      ...g,
      displayName: GROUP_LABELS[g.name] || g.name
    }))
    .sort((a, b) => b.value - a.value) || [];

  const maxRankValue = Math.max(...rankData.map(r => r.value), 1);
  const totalGroupValue = groupData.reduce((acc, curr) => acc + curr.value, 0);

  const totalTaxa = audit.totalTaxa || 1;

  return (
    <div className="flex flex-col gap-10 mt-4 max-w-5xl">
      {/* Khối 1: Thống kê Bậc (Progress List) */}
      <div className="flex flex-col gap-4">
        <div className="pt-2">
          <h3 className="section-label">Phân bổ theo Bậc phân loại</h3>
        </div>
        
        <div className="flex flex-col gap-3.5 pl-2">
          {rankData.map((rank, idx) => {
            const percentage = (rank.value / maxRankValue) * 100;
            return (
              <motion.div 
                key={rank.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col gap-1 group"
              >
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    {rank.name}
                  </span>
                  <span className="text-sm font-mono font-medium text-zinc-500">
                    {rank.value.toLocaleString()}
                  </span>
                </div>
                {/* Thanh tiến độ Sleek - Tăng độ dày đồng bộ */}
                <div className="h-2.5 w-full bg-zinc-50 rounded-full overflow-hidden border border-zinc-100/50">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: "color-mix(in srgb, var(--chart-5), var(--chart-5-fg) 25%)" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Khối 2: Tỉ lệ Nhóm (Segmented Bar) */}
      <div className="flex flex-col gap-4">
        <div className="pt-2">
          <h3 className="section-label">Cơ cấu Nhóm thực vật</h3>
        </div>
        
        <div className="flex flex-col gap-6 pl-2">
          {/* Một thanh duy nhất chia đoạn */}
          <div className="h-2.5 w-full flex rounded-full overflow-hidden shadow-inner bg-zinc-50 border border-zinc-100">
            {groupData.map((group, idx) => {
              const percentage = (group.value / totalGroupValue) * 100;
              if (percentage === 0) return null;
              return (
                <motion.div 
                  key={group.name}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full"
                  style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-3 w-full gap-4">
            {groupData.slice(0, 3).map((group, idx) => {
              const alignmentClass = idx === 0 ? "text-left items-start" : idx === 1 ? "text-center items-center" : "text-right items-end";
              const justifyClass = idx === 0 ? "justify-start" : idx === 1 ? "justify-center" : "justify-end";
              
              return (
                <div key={group.name} className={cn("flex flex-col gap-1.5", alignmentClass)}>
                  <div className={cn("flex items-center gap-2", justifyClass)}>
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                      {group.displayName}
                    </span>
                  </div>
                  <div className={cn("flex items-baseline gap-1", justifyClass)}>
                    <span className="text-lg font-sans font-normal text-zinc-800">
                      {group.value}
                    </span>
                    <span className="text-[10px] text-zinc-400">
                      ({((group.value / totalGroupValue) * 100).toFixed(1)}%)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Khối 3: Kiểm định chất lượng (Data Quality Audit) */}
      <div className="flex flex-col gap-4">
        <div className="pt-2">
          <h3 className="section-label">Dữ liệu cần bổ sung</h3>
        </div>
        
        <div className="flex flex-col gap-3.5 pl-2">
          {[
            { 
              name: "THIẾU TÊN TIẾNG VIỆT", 
              value: audit.noVietName, 
              color: "color-mix(in srgb, var(--chart-2), var(--chart-2-fg) 25%)",
              percentage: (audit.noVietName / totalTaxa) * 100 
            },
            { 
              name: "THIẾU MÔ TẢ", 
              value: audit.noDescription, 
              color: "color-mix(in srgb, var(--chart-4), var(--chart-4-fg) 40%)",
              percentage: (audit.noDescription / totalTaxa) * 100 
            },
            { 
              name: "THIẾU HÌNH ẢNH", 
              value: audit.noImages, 
              color: "color-mix(in srgb, var(--chart-3), white 20%)",
              percentage: (audit.noImages / totalTaxa) * 100 
            },
          ].map((item, idx) => {
            return (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (idx * 0.05) }}
                className="flex flex-col gap-1 group"
              >
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-medium text-zinc-500">
                    {item.value.toLocaleString()} 
                  </span>
                </div>
                <div className="h-2.5 w-full bg-zinc-50 rounded-full overflow-hidden border border-zinc-100/50">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
