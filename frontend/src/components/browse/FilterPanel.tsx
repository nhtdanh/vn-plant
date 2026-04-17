import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import type { PlantGroup, TaxonomyRank } from "../../types";
import {
  getGroupDisplayName,
  getRankDisplayName,
} from "../../utils/taxon.utils";

const PLANT_GROUPS: PlantGroup[] = ["fern", "gymnosperm", "angiosperm"];

const TAXONOMY_RANKS: TaxonomyRank[] = [
  "kingdom",
  "phylum",
  "taxonomicClass",
  "order",
  "family",
  "genus",
  "species",
  "subspecies",
  "variety",
  "forma",
];

const PROVINCES = [
  "Hà Nội",
  "Tuyên Quang",
  "Lào Cai",
  "Thái Nguyên",
  "Phú Thọ",
  "Bắc Ninh",
  "Hưng Yên",
  "Hải Phòng",
  "Ninh Bình",
  "Quảng Trị",
  "Huế",
  "Đà Nẵng",
  "Quảng Ngãi",
  "Gia Lai",
  "Khánh Hòa",
  "Lâm Đồng",
  "Đắk Lắk",
  "TP. Hồ Chí Minh",
  "Đồng Nai",
  "Tây Ninh",
  "Cần Thơ",
  "Vĩnh Long",
  "Đồng Tháp",
  "Cà Mau",
  "An Giang",
  "Lai Châu",
  "Điện Biên",
  "Sơn La",
  "Lạng Sơn",
  "Quảng Ninh",
  "Thanh Hóa",
  "Nghệ An",
  "Hà Tĩnh",
  "Cao Bằng",
];

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  activeGroups: PlantGroup[];
  activeRanks: TaxonomyRank[];
  activeProvinces: string[];
  onGroupChange: (group: PlantGroup, isChecked: boolean) => void;
  onRankChange: (rank: TaxonomyRank, isChecked: boolean) => void;
  onProvinceChange: (province: string, isChecked: boolean) => void;
  onClearAll: () => void;
}

interface FilterSectionProps {
  title: string;
  items: { id: string; label: string }[];
  activeItems: string[];
  onChange: (id: string, isChecked: boolean) => void;
  isExpandable?: boolean;
}

function FilterSection({
  title,
  items,
  activeItems,
  onChange,
  isExpandable = false,
}: FilterSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const shouldScroll = items.length > 6;

  return (
    <div className="border-b border-foreground/10 last:border-b-0 py-4 first:pt-0 last:pb-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-sm font-medium mb-3 hover:text-foreground/80 transition-colors"
      >
        <span>{title}</span>
        {isExpandable && (
          <ChevronDown
            size={16}
            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {isExpanded && (
        <div
          className={`space-y-2 ${shouldScroll ? "max-h-48 overflow-y-auto" : ""}`}
        >
          {items.map(({ id, label }) => (
            <label
              key={id}
              className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-foreground/5 cursor-pointer transition-colors text-sm"
            >
              <input
                type="checkbox"
                checked={activeItems.includes(id)}
                onChange={(e) => onChange(id, e.target.checked)}
                className="w-4 h-4 rounded cursor-pointer"
              />
              <span className="text-foreground/80">{label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export function FilterPanel({
  isOpen,
  onClose,
  activeGroups,
  activeRanks,
  activeProvinces,
  onGroupChange,
  onRankChange,
  onProvinceChange,
  onClearAll,
}: FilterPanelProps) {
  const activeFilterCount =
    activeGroups.length + activeRanks.length + activeProvinces.length;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Filter Panel */}
      <div className="fixed md:absolute left-0 right-0 md:left-auto md:right-auto md:top-full md:mt-1 bottom-0 md:bottom-auto bg-background border border-foreground/20 md:rounded shadow-lg z-50 md:z-40 md:min-w-72 max-h-[80vh] md:max-h-96 overflow-y-auto md:overflow-y-auto">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 md:mb-3">
            <h3 className="font-medium text-sm">Bộ lọc</h3>
            <div className="flex items-center gap-2">
              {activeFilterCount > 0 && (
                <button
                  onClick={onClearAll}
                  className="text-xs text-foreground/60 hover:text-foreground/80 transition-colors"
                >
                  Xóa hết
                </button>
              )}
              <button
                onClick={onClose}
                className="md:hidden text-foreground/60 hover:text-foreground"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Filter Sections */}
          <div className="space-y-0">
            {/* Plant Groups */}
            <FilterSection
              title="Nhóm thực vật"
              items={PLANT_GROUPS.map((g) => ({
                id: g,
                label: getGroupDisplayName(g),
              }))}
              activeItems={activeGroups}
              onChange={(id, isChecked) =>
                onGroupChange(id as PlantGroup, isChecked)
              }
            />

            {/* Taxonomy Ranks */}
            <FilterSection
              title="Cấp bậc phân loại"
              items={TAXONOMY_RANKS.map((r) => ({
                id: r,
                label: getRankDisplayName(r),
              }))}
              activeItems={activeRanks}
              onChange={(id, isChecked) =>
                onRankChange(id as TaxonomyRank, isChecked)
              }
              isExpandable
            />

            {/* Provinces */}
            <FilterSection
              title="Tỉnh/Thành phố"
              items={PROVINCES.map((p) => ({
                id: p,
                label: p,
              }))}
              activeItems={activeProvinces}
              onChange={(id, isChecked) => onProvinceChange(id, isChecked)}
              isExpandable
            />
          </div>
        </div>
      </div>
    </>
  );
}
