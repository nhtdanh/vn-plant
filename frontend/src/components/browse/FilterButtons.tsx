import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import type { PlantGroup, TaxonomyRank, Province } from "@/types";
import {
  getGroupDisplayName,
  getRankDisplayName,
} from "@/utils/taxon.utils";
import { fetchProvinces } from "@/services/taxon.service";
import { useClickOutside } from "@/hooks/useClickOutside";

const PLANT_GROUPS: PlantGroup[] = ["fern", "gymnosperm", "angiosperm"];

const TAXONOMY_RANKS: TaxonomyRank[] = [
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

interface FilterButtonsProps {
  activeGroups: PlantGroup[];
  activeRanks: TaxonomyRank[];
  activeProvinces: string[];
  onGroupChange: (group: PlantGroup, isChecked: boolean) => void;
  onRankChange: (rank: TaxonomyRank, isChecked: boolean) => void;
  onProvinceChange: (province: string, isChecked: boolean) => void;
  onClearAll: () => void;
}

interface DropdownProps {
  isOpen: boolean;
  items: { id: string; label: string }[];
  activeItems: string[];
  onChange: (id: string, isChecked: boolean) => void;
  onClose: () => void;
}

function Dropdown({
  isOpen,
  items,
  activeItems,
  onChange,
  onClose,
}: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Use custom hook for cleaner logic
  useClickOutside(dropdownRef, onClose);

  if (!isOpen) return null;

  const shouldScroll = items.length > 6;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 mt-1 bg-background border border-foreground/20 rounded shadow-lg z-50 min-w-56"
    >
      <div className="p-3 space-y-2">
        <div
          className={`space-y-1 ${
            shouldScroll ? "max-h-48 overflow-y-auto" : ""
          }`}
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
      </div>
    </div>
  );
}

export function FilterButtons({
  activeGroups,
  activeRanks,
  activeProvinces,
  onGroupChange,
  onRankChange,
  onProvinceChange,
  onClearAll,
}: FilterButtonsProps) {
  const [openCategory, setOpenCategory] = useState<
    "groups" | "ranks" | "provinces" | null
  >(null);
  
  const [provinces, setProvinces] = useState<Province[]>([]);

  // 1. Fetch provinces from API
  useEffect(() => {
    async function loadProvinces() {
      try {
        const response = await fetchProvinces();
        if (response.success) {
          setProvinces(response.data);
        }
      } catch (error) {
        console.error("Failed to load provinces:", error);
      }
    }
    loadProvinces();
  }, []);

  const toggleCategory = (category: "groups" | "ranks" | "provinces") => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const closeAll = () => setOpenCategory(null);

  const activeFilterCount =
    activeGroups.length + activeRanks.length + activeProvinces.length;

  // 2. Button configuration for DRY rendering
  const categories = [
    {
      id: "groups" as const,
      label: "NHÓM",
      count: activeGroups.length,
      items: PLANT_GROUPS.map((g) => ({ id: g, label: getGroupDisplayName(g) })),
      activeItems: activeGroups,
      onChange: (id: string, isChecked: boolean) => onGroupChange(id as PlantGroup, isChecked),
      counterColor: "bg-emerald-300/30",
    },
    {
      id: "ranks" as const,
      label: "BẬC",
      count: activeRanks.length,
      items: TAXONOMY_RANKS.map((r) => ({ id: r, label: getRankDisplayName(r) })),
      activeItems: activeRanks,
      onChange: (id: string, isChecked: boolean) => onRankChange(id as TaxonomyRank, isChecked),
      counterColor: "bg-blue-300/30",
    },
    {
      id: "provinces" as const,
      label: "PHÂN BỐ",
      count: activeProvinces.length,
      items: provinces.map((p) => ({ id: p.name, label: p.name })),
      activeItems: activeProvinces,
      onChange: (id: string, isChecked: boolean) => onProvinceChange(id, isChecked),
      counterColor: "bg-green-300/30",
    },
  ];

  // 3. Active Chips configuration
  const activeChips = [
    ...activeGroups.map(g => ({ key: `g-${g}`, label: getGroupDisplayName(g), color: "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100", onRemove: () => onGroupChange(g, false) })),
    ...activeRanks.map(r => ({ key: `r-${r}`, label: getRankDisplayName(r), color: "bg-blue-300/20 border-blue-300/50 hover:bg-blue-300/30", onRemove: () => onRankChange(r, false) })),
    ...activeProvinces.map(p => ({ key: `p-${p}`, label: p, color: "bg-green-300/20 border-green-300/50 hover:bg-green-300/30", onRemove: () => onProvinceChange(p, false) })),
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Category Dropdowns */}
      {categories.map((cat) => (
        <div key={cat.id} className="relative">
          <button
            onClick={() => toggleCategory(cat.id)}
            className={`flex items-center gap-2 px-3 py-2 border rounded text-sm transition-colors ${
              openCategory === cat.id
                ? "border-foreground/60 bg-foreground/5"
                : "border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5"
            }`}
          >
            <span className="font-normal">{cat.label}</span>
            {cat.count > 0 && (
              <span className={`px-2 py-0.5 rounded-sm text-xs font-normal ${cat.counterColor}`}>
                {cat.count}
              </span>
            )}
            <ChevronDown
              size={16}
              className={`transition-transform ${
                openCategory === cat.id ? "rotate-180" : ""
              }`}
            />
          </button>

          <Dropdown
            isOpen={openCategory === cat.id}
            items={cat.items}
            activeItems={cat.activeItems}
            onChange={cat.onChange}
            onClose={closeAll}
          />
        </div>
      ))}

      {/* Active Filter Chips */}
      {activeChips.map((chip) => (
        <button
          key={chip.key}
          onClick={chip.onRemove}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 border rounded-full text-xs text-foreground transition-colors h-fit ${chip.color}`}
        >
          <span>{chip.label}</span>
          <X size={14} className="shrink-0" />
        </button>
      ))}

      {/* Clear All Button */}
      {activeFilterCount > 0 && (
        <button
          onClick={onClearAll}
          className="flex items-center gap-1 px-3 py-2 text-xs text-foreground/60 hover:text-foreground/80 hover:bg-foreground/5 rounded-full border border-foreground/10 transition-colors"
        >
          <X size={14} />
          Xóa hết
        </button>
      )}
    </div>
  );
}
