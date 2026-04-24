import * as fs from "fs";
import * as path from "path";
import { TaxonomyRank } from "../../generated/prisma";

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

// rank -> enum
export function normalizeRank(rank: string | undefined | null): TaxonomyRank {
  if (!rank) return "species" as TaxonomyRank; // Fallback mặc định

  const map: Record<string, string> = {
    "form": "forma",
    "class": "taxonomicClass",
  };

  const normalized = map[rank.toLowerCase()] || rank.toLowerCase();
  return normalized as TaxonomyRank;
}

// capitalize
export function formatCommonName(name: string): string {
  if (!name) return "";
  return name.trim().split(/\s+/).map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");
}

//tạo slug
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
