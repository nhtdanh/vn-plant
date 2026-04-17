import { prisma } from "../src/config/prisma";
import axios from "axios";
import sharp from "sharp";
import { encode } from "blurhash";
import pLimit from "p-limit";
import { processImage, uploadToR2 } from "../src/modules/upload/upload.service";
import { R2_PUBLIC_DOMAIN } from "../src/config/s3.config";
import { normalizeUrl } from "../src/utils/url";

// Cấu hình giới hạn
const CONCURRENCY_LIMIT = 5; 
const MAX_CONSECUTIVE_ERRORS = 10000;
const MAX_TOTAL_ERRORS = 10000;
const BATCH_SIZE = 10;

async function generateBlurHash(buffer: Buffer): Promise<string | null> {
  try {
    const { data, info } = await sharp(buffer)
      .raw()
      .ensureAlpha()
      .resize(32, 32, { fit: "inside" })
      .toBuffer({ resolveWithObject: true });

    return encode(new Uint8ClampedArray(data), info.width, info.height, 4, 4);
  } catch (err) {
    console.error(`[BlurHash Error] Failed to generate: ${err}`);
    return null;
  }
}

let consecutiveErrors = 0;
let totalErrors = 0;
let totalProcessed = 0;
let totalSuccess = 0;
let totalDeleted = 0;

async function downloadImage(url: string): Promise<Buffer | null> {
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      timeout: 20000, // Tăng timeout cho các ảnh nặng
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
      }
    });

    const contentType = response.headers["content-type"];
    if (contentType && contentType.includes("application/json")) {
      return null;
    }

    return Buffer.from(response.data);
  } catch (error: any) {
    if (error.response?.status === 429) {
      console.error(`[Rate Limit] 429 received. Stopping script.`);
      process.exit(1);
    }
    return null;
  }
}

async function handleInvalidImage(imageId: number, taxonId: number, isPrimary: boolean) {
  console.log(`[Clean] Deleting invalid image ID: ${imageId} for Taxon: ${taxonId}`);
  await prisma.$transaction(async (tx) => {
    await tx.taxonImage.delete({ where: { id: imageId } });
    if (isPrimary) {
      const fallbackImage = await tx.taxonImage.findFirst({
        where: { taxonId, status: "approved" },
        orderBy: { sortOrder: "asc" }
      });
      if (fallbackImage) {
        await tx.taxonImage.update({
          where: { id: fallbackImage.id },
          data: { isPrimary: true }
        });
        await tx.taxon.update({
          where: { id: taxonId },
          data: { primaryImageUrl: fallbackImage.url }
        });
      } else {
        await tx.taxon.update({
          where: { id: taxonId },
          data: { primaryImageUrl: null }
        });
      }
    }
  });
  totalDeleted++;
}

async function migrateSingleImage(img: any) {
  if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS || totalErrors >= MAX_TOTAL_ERRORS) return;

  try {
    const buffer = await downloadImage(img.url);
    if (!buffer) {
      await handleInvalidImage(img.id, img.taxonId, img.isPrimary);
      consecutiveErrors++; totalErrors++; return;
    }

    try {
      const [processed, blurHash] = await Promise.all([
        processImage(buffer),
        generateBlurHash(buffer)
      ]);
      
      const fileName = `taxon_${img.taxonId}_${img.id}.webp`;
      const uploadResult = await uploadToR2(processed.buffer, fileName, "taxa", "image/webp");
      const r2Url = normalizeUrl(`${R2_PUBLIC_DOMAIN}/${uploadResult.key}`) as string;

      await prisma.$transaction(async (tx) => {
        await tx.taxonImage.update({
          where: { id: img.id },
          data: {
            url: r2Url,
            storageKey: uploadResult.key,
            width: processed.width,
            height: processed.height,
            blurHash: blurHash
          }
        });
        if (img.isPrimary) {
          await tx.taxon.update({
            where: { id: img.taxonId },
            data: { primaryImageUrl: r2Url }
          });
        }
      });

      totalSuccess++; consecutiveErrors = 0;
    } catch (sharpError: any) {
      await handleInvalidImage(img.id, img.taxonId, img.isPrimary);
      consecutiveErrors++; totalErrors++;
    }
  } catch (err: any) {
    consecutiveErrors++; totalErrors++;
  } finally {
    totalProcessed++;
  }
}

async function main() {
  console.log("--- Starting Continuous Migration to R2 ---");
  const limit = pLimit(CONCURRENCY_LIMIT);

  while (true) {
    if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS || totalErrors >= MAX_TOTAL_ERRORS) {
      console.error("[STOPPED] Circuit breaker tripped.");
      break;
    }

    const images = await prisma.taxonImage.findMany({
      where: {
        isPrimary: true,
        storageKey: null,
        NOT: { url: { contains: R2_PUBLIC_DOMAIN } }
      },
      orderBy: [{ isPrimary: "desc" }, { taxonId: "asc" }],
      take: BATCH_SIZE
    });

    if (images.length === 0) {
      console.log("[FINISHED] All images migrated successfully!");
      break;
    }

    console.log(`[Batch] Migrating next ${images.length} images with staggered starts...`);
    await Promise.all(images.map((img, index) => limit(async () => {
      // Tạo độ trễ lệch pha (staggering) + ngẫu nhiên (jitter)
      const staggerDelay = index * 300;
      const jitter = Math.random() * 200;
      await new Promise(resolve => setTimeout(resolve, staggerDelay + jitter));
      
      return migrateSingleImage(img);
    })));
    
    console.log(`[Status] Processed: ${totalProcessed} | Success: ${totalSuccess} | Deleted: ${totalDeleted} | Errors: ${totalErrors}`);
    
    // Nghỉ 1s giữa các batch để tránh bị rate limit
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log("\n--- Final Migration Summary ---");
  console.log(`Total Processed: ${totalProcessed}`);
  console.log(`Success: ${totalSuccess} | Deleted: ${totalDeleted} | Total Errors: ${totalErrors}`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
