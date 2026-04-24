import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";
import pg from "pg";

const connectionString = `${process.env["DATABASE_URL"]}`;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function cleanupUrls() {
  console.log("🚀 Bắt đầu đợt dọn dẹp URL bị lỗi double https://...");

  try {
    // 1. Dọn dẹp bảng Taxon (trường primaryImageUrl)
    console.log("\n--- Kiểm tra bảng Taxon ---");
    const taxaWithIssue = await prisma.taxon.findMany({
      where: {
        primaryImageUrl: {
          startsWith: "https://https://",
        },
      },
      select: { id: true, primaryImageUrl: true, scientificName: true },
    });

    console.log(`Tìm thấy ${taxaWithIssue.length} thực vật bị lỗi URL.`);

    for (const taxon of taxaWithIssue) {
      const fixedUrl = taxon.primaryImageUrl!.replace(/^https:\/\/https:\/\//i, "https://");
      await prisma.taxon.update({
        where: { id: taxon.id },
        data: { primaryImageUrl: fixedUrl },
      });
      console.log(`✅ Đã sửa: ${taxon.scientificName}`);
    }

    // 2. Dọn dẹp bảng TaxonImage (trường url)
    console.log("\n--- Kiểm tra bảng TaxonImage ---");
    const imagesWithIssue = await prisma.taxonImage.findMany({
      where: {
        url: {
          startsWith: "https://https://",
        },
      },
      select: { id: true, url: true, taxonId: true },
    });

    console.log(`Tìm thấy ${imagesWithIssue.length} ảnh bị lỗi URL.`);

    for (const image of imagesWithIssue) {
      const fixedUrl = image.url.replace(/^https:\/\/https:\/\//i, "https://");
      await prisma.taxonImage.update({
        where: { id: image.id },
        data: { url: fixedUrl },
      });
      console.log(`✅ Đã sửa ảnh ID: ${image.id} (Taxon ID: ${image.taxonId})`);
    }

    console.log("\n✨ Hoàn tất dọn dẹp dữ liệu!");
  } catch (error) {
    console.error("❌ Lỗi trong quá trình dọn dẹp:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

cleanupUrls();
