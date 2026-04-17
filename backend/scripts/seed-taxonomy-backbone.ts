import { prisma } from "../src/config/prisma";
import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import { TaxonomyRank, PublishStatus, ImageStatus, PlantGroup } from "../generated/prisma";
import { writeLog, normalizeRank, formatCommonName, generateSlug } from "./helpers/seed-helper";

const pathMap = new Map<number, string>();
const plantGroupMap = new Map<number, PlantGroup>();
const slugMap = new Map<string, number>();

function getPlantGroupFromClass(scientificName: string): PlantGroup | null {
  const name = scientificName.toLowerCase();
  if (name === "magnoliopsida" || name === "liliopsida") return PlantGroup.angiosperm;
  if (name === "pinopsida" || name === "cycadopsida" || name === "gnetopsida" || name === "ginkgoopsida") return PlantGroup.gymnosperm;
  if (name === "polypodiopsida" || name === "lycopodiopsida" || name === "psilotopsida" || name === "equisetopsida" || name === "marattiopsida") return PlantGroup.fern;
  return null;
}

async function warmUpCache() {
  console.log("Warming up hierarchy cache...");
  const existing: any[] = await prisma.$queryRaw`
    SELECT id, path::text, plant_group as "plantGroup", scientific_name as "scientificName" FROM taxon
  `;
  for (const t of existing) {
    if (t.path) pathMap.set(t.id, t.path);
    if (t.plantGroup) plantGroupMap.set(t.id, t.plantGroup);
    
    // Warm up existing slugs to avoid collisions with backbone records
    const s = generateSlug(t.scientificName || "");
    if (s) slugMap.set(s, t.id);
  }
}

async function ingestFile(rank: TaxonomyRank, fileName: string) {
  const filePath = path.join(process.cwd(), "data", "raw", fileName);
  if (!fs.existsSync(filePath)) return;

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  console.log(`Ingesting ${rank}: processing file...`);
  let count = 0;

  for await (const line of rl) {
    if (!line.trim()) continue;
    let data: any;
    try {
      data = JSON.parse(line);
      const gbifId = data.externalIds?.gbif;
      if (!gbifId || !data.scientificName) continue;

      // Skip if already exists
      if (pathMap.has(gbifId)) {
        count++;
        continue;
      }

      const parentGbifId = data.parent?.externalIds?.gbif;
      
      let group = getPlantGroupFromClass(data.scientificName);
      if (!group && parentGbifId) {
        group = plantGroupMap.get(parentGbifId) || null;
      }

      // 1. Màng lọc thực vật: Bậc dưới Phylum mà không có PlantGroup -> LOẠI
      if (!group) {
        writeLog("invalid_group.jsonl", data, "Not a botanical taxon (missing PlantGroup)");
        continue;
      }

      if (group) plantGroupMap.set(gbifId, group);

      const normalizedRank = normalizeRank(data.rank || rank);

      const viCandidate = data.common_names?.find((cn: any) => cn.language === "vie" || cn.language === "vi");
      const localName = viCandidate ? formatCommonName(viCandidate.name) : null;
      const uniqueImages = Array.from(new Map(data.images?.map((img: any) => [img.url, img])).values());

      const primaryImage = uniqueImages.find((img: any) => img.primary === true) || uniqueImages[0];
      const primaryImageUrl = primaryImage ? (primaryImage as any).url : null;

      const descriptionLang = data.description_lang === "vie" || data.description_lang === "vi" ? "vi" : (data.description_lang ?? null);

      let slug = generateSlug(data.scientificName);
      if (slugMap.has(slug) && slugMap.get(slug) !== gbifId) {
        slug = `${slug}-${gbifId}`;
      }
      slugMap.set(slug, gbifId);

      await prisma.taxon.upsert({
        where: { id: gbifId },
        update: {
          scientificName: data.scientificName,
          canonicalName: data.canonicalName,
          author: data.authorship,
          slug: slug,
          rank: normalizedRank,
          vietnameseName: localName,
          plantGroup: group,
          status: PublishStatus.published,
          hasVietnamRecord: data.distribution_vi === "recorded",
          description: data.description ?? null,
          descriptionLang: descriptionLang,
          sourceName: "GBIF",
          externalId: gbifId.toString(),
          primaryImageUrl: primaryImageUrl,
          images: {
            deleteMany: {},
            create: uniqueImages.map((img: any, idx: number) => ({
              url: img.url,
              externalSource: img.source,
              externalId: img.url,
              author: img.author,
              license: img.license,
              isPrimary: img.primary === true,
              sortOrder: idx,
              status: ImageStatus.approved
            }))
          },
          synonyms: {
            deleteMany: {},
            create: (data.names ?? []).map((s: any) => ({
              scientificName: s.scientificName,
              sourceName: s.source || "GBIF",
              externalId: s.externalIds?.gbif?.toString() || null
            }))
          },
          commonNames: {
            deleteMany: {},
            create: (data.common_names || []).map((cn: any) => ({
              name: formatCommonName(cn.name),
              language: cn.language === "vie" || cn.language === "vi" ? "vi" : (cn.language === "eng" ? "en" : cn.language),
              source: cn.source,
              isPrimary: cn === viCandidate
            }))
          }
        },
        create: {
          id: gbifId,
          scientificName: data.scientificName,
          canonicalName: data.canonicalName,
          author: data.authorship,
          slug: slug,
          rank: normalizedRank,
          status: PublishStatus.published,
          hasVietnamRecord: data.distribution_vi === "recorded",
          vietnameseName: localName,
          parentId: parentGbifId,
          plantGroup: group,
          description: data.description ?? null,
          descriptionLang: descriptionLang,
          sourceName: "GBIF",
          externalId: gbifId.toString(),
          primaryImageUrl: primaryImageUrl,
          images: {
            create: uniqueImages.map((img: any, idx: number) => ({
              url: img.url,
              externalSource: img.source,
              externalId: img.url,
              author: img.author,
              license: img.license,
              isPrimary: img.primary === true,
              sortOrder: idx,
              status: ImageStatus.approved
            }))
          },
          synonyms: {
            create: (data.names ?? []).map((s: any) => ({
              scientificName: s.scientificName,
              sourceName: s.source || "GBIF",
              externalId: s.externalIds?.gbif?.toString() || null
            }))
          },
          commonNames: {
            create: (data.common_names || []).map((cn: any) => ({
              name: formatCommonName(cn.name),
              language: cn.language === "vie" || cn.language === "vi" ? "vi" : (cn.language === "eng" ? "en" : cn.language),
              source: cn.source,
              isPrimary: cn === viCandidate
            }))
          }
        }
      });

      // Update path (ltree)
      let currentPath = gbifId.toString();
      if (parentGbifId && pathMap.has(parentGbifId)) {
        currentPath = `${pathMap.get(parentGbifId)}.${gbifId}`;
      }
      pathMap.set(gbifId, currentPath);

      await prisma.$executeRawUnsafe(
        `UPDATE taxon SET path = $1::ltree WHERE id = $2`,
        currentPath,
        gbifId
      );

      count++;
    } catch (err: any) {
      if (err.code === "P2003") {
        writeLog("fk_failed.jsonl", data || {}, `Foreign key violation (Missing parent)`);
      } else if (err.code === "P2002") {
        writeLog("unique_conflict.jsonl", data || {}, `Unique constraint violation: ${err.meta?.target}`);
      } else {
        console.error(`Error ingesting backbone data:`, err);
      }
    }
  }
  console.log(`Ingested ${rank}: ${count} records.`);
}

async function main() {
  try {
    await warmUpCache();
    await ingestFile(TaxonomyRank.taxonomicClass, "class.jsonl");
    await ingestFile(TaxonomyRank.order, "order.jsonl");
    await ingestFile(TaxonomyRank.family, "family.jsonl");
    await ingestFile(TaxonomyRank.genus, "genus.jsonl");
  } finally {
    await prisma.$disconnect();
  }
}

main();
