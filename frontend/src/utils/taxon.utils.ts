// Utility functions và constants cho Browse/Search page

import type { PlantGroup, TaxonomyRank } from "../types";

// Map từ category name sang plant group (DiscoveryGrid)
export const CATEGORY_TO_GROUP: Record<string, PlantGroup> = {
  "Dương xỉ": "fern",
  "Hạt trần": "gymnosperm",
  "Hạt kín": "angiosperm",
};

// Tên hiển thị của các nhóm thực vật
export const GROUP_DISPLAY_NAMES: Record<PlantGroup, string> = {
  fern: "Dương xỉ",
  gymnosperm: "Hạt trần",
  angiosperm: "Hạt kín",
};

// Tên hiển thị của các cấp phân loại
export const RANK_DISPLAY_NAMES: Record<TaxonomyRank, string> = {
  kingdom: "Giới",
  phylum: "Ngành",
  taxonomicClass: "Lớp",
  order: "Bộ",
  family: "Họ",
  genus: "Chi",
  species: "Loài",
  subspecies: "Phân loài",
  variety: "Thứ",
  forma: "Dạng",
};

// Map từ category name sang plant group
export function getCategoryGroup(categoryName: string): PlantGroup | null {
  return CATEGORY_TO_GROUP[categoryName] || null;
}

// Lấy tên hiển thị cho nhóm thực vật
export function getGroupDisplayName(group: PlantGroup): string {
  return GROUP_DISPLAY_NAMES[group] || group;
}

// Lấy tên hiển thị cho cấp phân loại
export function getRankDisplayName(rank: TaxonomyRank): string {
  return RANK_DISPLAY_NAMES[rank] || rank;
}

// Viết hoa chữ cái đầu mỗi từ
export function capitalize(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Lất màu badge dựa trên cấp phân loại (màu nhạt)
export function getRankBadgeColor(rank: TaxonomyRank): {
  bg: string;
  text: string;
} {
  const colors: Record<TaxonomyRank, { bg: string; text: string }> = {
    kingdom: { bg: "bg-indigo-200", text: "text-black" },
    phylum: { bg: "bg-cyan-200", text: "text-black" },
    taxonomicClass: { bg: "bg-blue-200", text: "text-black" },
    order: { bg: "bg-emerald-200", text: "text-black" },
    family: { bg: "bg-orange-200", text: "text-black" },
    genus: { bg: "bg-teal-200", text: "text-black" },
    species: { bg: "bg-amber-200", text: "text-black" },
    subspecies: { bg: "bg-rose-200", text: "text-black" },
    variety: { bg: "bg-pink-200", text: "text-black" },
    forma: { bg: "bg-violet-200", text: "text-black" },
  };

  return colors[rank] || { bg: "bg-gray-200", text: "text-black" };
}
