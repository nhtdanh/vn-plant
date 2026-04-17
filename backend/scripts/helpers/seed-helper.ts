import * as fs from "fs";
import * as path from "path";
import { TaxonomyRank } from "../../generated/prisma";

/**
 * Ghi log dữ liệu lỗi hoặc bị loại bỏ vào file jsonl
 */
export function writeLog(fileName: string, data: any, reason: string) {
  const logDir = path.join(process.cwd(), "data", "logs");
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  const logPath = path.join(logDir, fileName);
  const logEntry = {
    timestamp: new Date().toISOString(),
    scientificName: data.scientificName,
    gbifId: data.externalIds?.gbif,
    parentId: data.parent?.externalIds?.gbif,
    reason,
    rawData: data, // Lưu lại nguyên văn data để có thể re-run
  };

  fs.appendFileSync(logPath, JSON.stringify(logEntry) + "\n");
}

/**
 * Chuẩn hóa Rank từ JSONL sang Prisma Enum
 */
export function normalizeRank(rank: string | undefined | null): TaxonomyRank {
  if (!rank) return "species" as TaxonomyRank; // Fallback mặc định

  const map: Record<string, string> = {
    "form": "forma",
    "class": "taxonomicClass",
  };

  const normalized = map[rank.toLowerCase()] || rank.toLowerCase();
  return normalized as TaxonomyRank;
}

/**
 * Chuẩn hóa tên thông thường: capitalize từng từ
 * VD: "thông đất" → "Thông Đất"
 */
export function formatCommonName(name: string): string {
  if (!name) return "";
  return name.trim().split(/\s+/).map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");
}

/**
 * Tạo slug từ tên khoa học (Latin), xử lý dấu tiếng Việt và ký tự đặc biệt
 * VD: "Psilotum complanatum Sw." → "psilotum-complanatum-sw"
 */
export function generateSlug(name: string): string {
  if (!name) return "";
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
