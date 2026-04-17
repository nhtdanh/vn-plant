import { prisma } from "../src/config/prisma";
import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import { TaxonomyRank, PublishStatus, ImageStatus } from "../generated/prisma";
import { writeLog, formatCommonName, generateSlug } from "./helpers/seed-helper";

const slugMap = new Map<string, number>();

async function seedPhylum() {
  const filePath = path.join(process.cwd(), "data", "raw", "phylum.jsonl");
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  console.log("Cleaning database...");
  await prisma.taxonSynonym.deleteMany({});
  await prisma.taxonCommonName.deleteMany({});
  await prisma.taxonImage.deleteMany({});
  await prisma.taxonProvince.deleteMany({});
  await prisma.taxon.deleteMany({});

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  console.log("Ingesting Phylum...");

  for await (const line of rl) {
    if (!line.trim()) continue;
    let data: any;
    try {
      data = JSON.parse(line);
      const gbifId = data.externalIds?.gbif;
      if (!gbifId || !data.scientificName) continue;

      const viCandidate = data.common_names?.find((cn: any) => cn.language === "vie" || cn.language === "vi");
      const localName = viCandidate ? formatCommonName(viCandidate.name) : null;
      const uniqueImages = Array.from(new Map(data.images?.map((img: any) => [img.url, img])).values());

      let slug = generateSlug(data.scientificName);
      if (slugMap.has(slug) && slugMap.get(slug) !== gbifId) {
        slug = `${slug}-${gbifId}`;
      }
      slugMap.set(slug, gbifId);

      const primaryImage = uniqueImages.find((img: any) => img.primary === true) || uniqueImages[0];
      const primaryImageUrl = primaryImage ? (primaryImage as any).url : null;

      await prisma.taxon.upsert({
        where: { id: gbifId },
        update: {
          scientificName: data.scientificName,
          canonicalName: data.canonicalName,
          author: data.authorship,
          slug: slug,
          vietnameseName: localName,
          rank: TaxonomyRank.phylum,
          status: PublishStatus.published,
          hasVietnamRecord: data.distribution_vi === "recorded",
          description: data.description ?? null,
          descriptionLang: data.description_lang === "vie" || data.description_lang === "vi" ? "vi" : (data.description_lang ?? null),
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
          rank: TaxonomyRank.phylum,
          status: PublishStatus.published,
          hasVietnamRecord: data.distribution_vi === "recorded",
          vietnameseName: localName,
          description: data.description ?? null,
          descriptionLang: data.description_lang === "vie" || data.description_lang === "vi" ? "vi" : (data.description_lang ?? null),
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
      
      // Update path (ltree) for phylum root
      await prisma.$executeRawUnsafe(
        `UPDATE taxon SET path = $1::ltree WHERE id = $2`,
        gbifId.toString(),
        gbifId
      );

      console.log(`+ ${data.scientificName} (${gbifId})`);
    } catch (err: any) {
      if (err.code === "P2002") {
        writeLog("unique_conflict.jsonl", data || {}, `Unique constraint violation: ${err.meta?.target}`);
      } else {
        console.error(`Error ingesting phylum:`, err);
      }
    }
  }
}

async function main() {
  try {
    await seedPhylum();
    console.log("Done.");
  } finally {
    await prisma.$disconnect();
  }
}
main();
