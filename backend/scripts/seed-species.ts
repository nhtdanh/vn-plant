import { prisma } from "../src/config/prisma";
import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import { PublishStatus, ImageStatus, PlantGroup } from "../generated/prisma";
import { writeLog, normalizeRank, formatCommonName, generateSlug } from "./helpers/seed-helper";

const plantGroupMap = new Map<number, PlantGroup>();
const pathMap = new Map<number, string>();
const provinceMap = new Map<string, number>();
const slugMap = new Map<string, number>();

async function warmUpCaches() {
  console.log("Warming up caches (Hierarchy, Provinces & Slugs)...");
  
  const existingTaxa: any[] = await prisma.$queryRaw`
    SELECT id, path::text, plant_group as "plantGroup", scientific_name as "scientificName" FROM taxon
  `;
  for (const t of existingTaxa) {
    if (t.path) pathMap.set(t.id, t.path);
    if (t.plantGroup) plantGroupMap.set(t.id, t.plantGroup as PlantGroup);
    
    const s = generateSlug(t.scientificName || "");
    if (s) slugMap.set(s, t.id);
  }

  const provinces = await prisma.province.findMany();
  for (const p of provinces) {
    provinceMap.set(p.name, p.id);
  }
}

async function ingestFile(fileName: string) {
  const filePath = path.join(process.cwd(), "data", "raw", fileName);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found, skipping: ${fileName}`);
    return;
  }

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let count = 0;
  console.log(`Ingesting data from ${fileName}...`);

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
      const group = parentGbifId ? (plantGroupMap.get(parentGbifId) || null) : null;
      
      // 1. Màng lọc thực vật: Nếu không thuộc nhóm thực vật (kế thừa từ cha) -> LOẠI
      if (!group) {
        writeLog("invalid_group.jsonl", data, "Not a botanical taxon (missing/null parent group)");
        continue;
      }

      if (group) plantGroupMap.set(gbifId, group);

      const normalizedRank = normalizeRank(data.rank);

      const viCandidate = data.common_names?.find((cn: any) => cn.language === "vie" || cn.language === "vi");
      const localName = viCandidate ? formatCommonName(viCandidate.name) : null;
      
      // Deduplicate Images
      const uniqueImages: any[] = Array.from(new Map(data.images?.map((img: any) => [img.url, img])).values());

      // Deduplicate Synonyms by scientificName
      const uniqueSynonyms = Array.from(new Map((data.names ?? []).map((s: any) => [s.scientificName, s])).values());

      // Deduplicate Common Names by (name + language)
      const uniqueCommonNames = Array.from(new Map((data.common_names ?? []).map((cn: any) => [`${cn.name}-${cn.language}`, cn])).values());

      let slug = generateSlug(data.scientificName);
      if (slugMap.has(slug) && slugMap.get(slug) !== gbifId) {
        slug = `${slug}-${gbifId}`;
      }
      slugMap.set(slug, gbifId);

      const parsed = data.parsed || {};
      const primaryImage = uniqueImages.find((img: any) => img.primary === true) || uniqueImages[0];
      const primaryImageUrl = primaryImage ? primaryImage.url : null;

      await prisma.taxon.upsert({
        where: { id: gbifId },
        update: {
          scientificName: data.scientificName,
          canonicalName: data.canonicalName,
          author: data.authorship,
          slug: slug,
          rank: normalizedRank,
          status: PublishStatus.published,
          description: data.description,
          descriptionLang: data.description_lang === "vie" || data.description_lang === "vi" ? "vi" : data.description_lang,
          hasVietnamRecord: data.distribution_vi === "recorded",
          vietnameseName: localName,
          parentId: parentGbifId,
          plantGroup: group,
          habit: parsed.habit_stem_root || null,
          leaf: parsed.leaves || null,
          reproduction: parsed.reproduction || null,
          phenology: parsed.phenology || null,
          value: parsed.value || null,
          distributionText: parsed.distribution || null,
          note: parsed.notes || null,
          primaryImageUrl: primaryImageUrl,
          orderInBook: data.orderInBook?.toString() || data.index?.toString() || null,
          rawDescriptionInBook: data.rawText || null,
          images: {
            deleteMany: {},
            create: uniqueImages.map((img: any, idx: number) => ({
              url: img.url,
              externalSource: img.source,
              externalId: img.url,
              author: img.author,
              license: img.license,
              isPrimary: img === primaryImage,
              sortOrder: idx,
              status: ImageStatus.approved
            }))
          },
          synonyms: {
            deleteMany: {},
            create: uniqueSynonyms.map((s: any) => ({
              scientificName: s.scientificName,
              sourceName: s.source || "GBIF",
              externalId: s.externalIds?.gbif?.toString() || null
            }))
          },
          commonNames: {
            deleteMany: {},
            create: uniqueCommonNames.map((cn: any) => ({
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
          description: data.description,
          descriptionLang: data.description_lang === "vie" || data.description_lang === "vi" ? "vi" : data.description_lang,
          hasVietnamRecord: data.distribution_vi === "recorded",
          vietnameseName: localName,
          parentId: parentGbifId,
          plantGroup: group,
          habit: parsed.habit_stem_root || null,
          leaf: parsed.leaves || null,
          reproduction: parsed.reproduction || null,
          phenology: parsed.phenology || null,
          value: parsed.value || null,
          distributionText: parsed.distribution || null,
          note: parsed.notes || null,
          primaryImageUrl: primaryImageUrl,
          orderInBook: data.orderInBook?.toString() || data.index?.toString() || null,
          rawDescriptionInBook: data.rawText || null,
          images: {
            create: uniqueImages.map((img: any, idx: number) => ({
              url: img.url,
              externalSource: img.source,
              externalId: img.url,
              author: img.author,
              license: img.license,
              isPrimary: img === primaryImage,
              sortOrder: idx,
              status: ImageStatus.approved
            }))
          },
          synonyms: {
            create: uniqueSynonyms.map((s: any) => ({
              scientificName: s.scientificName,
              sourceName: s.source || "GBIF",
              externalId: s.externalIds?.gbif?.toString() || null
            }))
          },
          commonNames: {
            create: uniqueCommonNames.map((cn: any) => ({
              name: formatCommonName(cn.name),
              language: cn.language === "vie" || cn.language === "vi" ? "vi" : (cn.language === "eng" ? "en" : cn.language),
              source: cn.source,
              isPrimary: cn === viCandidate
            }))
          }
        }
      });

      // Handle Provinces (dùng createMany để tránh N+1)
      const distCities = parsed.distribution_city || [];
      if (distCities.length > 0) {
        await prisma.taxonProvince.deleteMany({ where: { taxonId: gbifId } });
        const provinceData = distCities
          .map((cityName: string) => {
            const provinceId = provinceMap.get(cityName);
            return provinceId ? { taxonId: gbifId, provinceId } : null;
          })
          .filter((d: any): d is { taxonId: number; provinceId: number } => d !== null);

        if (provinceData.length > 0) {
          await prisma.taxonProvince.createMany({ data: provinceData, skipDuplicates: true });
        }
      }

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
      if (count % 100 === 0) console.log(`- Ingested ${count} records...`);
    } catch (err: any) {
      if (err.code === "P2003") {
        writeLog("fk_failed.jsonl", data || {}, `Foreign key violation (Missing parent)`);
      } else if (err.code === "P2002") {
        writeLog("unique_conflict.jsonl", data || {}, `Unique constraint violation: ${err.meta?.target}`);
      } else {
        console.error(`Error ingesting data:`, err);
      }
    }
  }
  console.log(`Ingested ${count} records from ${fileName}.`);
}


async function main() {
  try {
    await warmUpCaches();
    // Pass 1: Species ONLY (Parent Genus already exists)
    await ingestFile("species_only.jsonl");
    
    // Pass 2: Infraspecies (Parent Species now exists)
    await ingestFile("infraspecies_only.jsonl");
    
    console.log("All species and infraspecies ingested successfully.");
  } finally {
    await prisma.$disconnect();
  }
}
main();
