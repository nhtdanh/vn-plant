import { prisma } from "../src/config/prisma.js";
import fs from "fs";
import path from "path";

const CHUNK_SIZE = 500;
const OUTPUT_PATH = path.join(process.cwd(), "prisma", "seed_data.sql");

async function exportTableInChunks(tableName: string, model: any, cursorField: string | null = "id") {
  console.log(`⏳ Exporting table: ${tableName}...`);
  
  const totalCount = await model.count();
  fs.appendFileSync(OUTPUT_PATH, `-- Data for ${tableName}\n`);
  
  if (totalCount === 0) {
    fs.appendFileSync(OUTPUT_PATH, `-- No data found.\n\n`);
    return;
  }

  let lastId: any = null;
  let processedCount = 0;

  while (processedCount < totalCount) {
    const data = await model.findMany({
      take: CHUNK_SIZE,
      ...(cursorField && lastId ? {
        skip: 1,
        cursor: { [cursorField]: lastId }
      } : {
        skip: cursorField ? 0 : processedCount
      }),
      orderBy: cursorField ? { [cursorField]: "asc" } : undefined,
    });

    if (data.length === 0) break;

    let chunkSql = "";
    for (const row of data) {
      const columns = Object.keys(row).filter(key => 
        row[key] !== undefined && key !== 'searchVector' && key !== 'path'
      );
      
      const values = columns.map(col => {
        const val = row[col];
        if (val === null) return "NULL";
        if (typeof val === "string") return `'${val.replace(/'/g, "''")}'`;
        if (val instanceof Date) return `'${val.toISOString()}'`;
        if (typeof val === "object") return `'${JSON.stringify(val).replace(/'/g, "''")}'`;
        return val;
      });

      chunkSql += `INSERT INTO "${tableName}" (${columns.map(c => `"${c}"`).join(", ")}) VALUES (${values.join(", ")}) ON CONFLICT DO NOTHING;\n`;
    }
    
    fs.appendFileSync(OUTPUT_PATH, chunkSql);
    processedCount += data.length;
    
    if (cursorField) {
      lastId = data[data.length - 1][cursorField];
    }
    
    console.log(`   ... Progress: ${processedCount}/${totalCount}`);
  }
  fs.appendFileSync(OUTPUT_PATH, "\n");
  console.log(`✅ Finished ${tableName}.`);
}

async function main() {
  console.log("🚀 Starting memory-efficient data export...");
  
  try {
    // Khởi tạo file mới (xóa file cũ nếu có)
    fs.writeFileSync(OUTPUT_PATH, `-- Generated Seed Data (Streamed)\n\n`);
    fs.appendFileSync(OUTPUT_PATH, `SET session_replication_role = 'replica';\n\n`);
    
    await exportTableInChunks("province", prisma.province);
    await exportTableInChunks("taxon", prisma.taxon);
    await exportTableInChunks("taxon_synonym", prisma.taxonSynonym);
    await exportTableInChunks("taxon_common_name", prisma.taxonCommonName);
    await exportTableInChunks("taxon_image", prisma.taxonImage);
    await exportTableInChunks("taxon_province", prisma.taxonProvince, null);

    fs.appendFileSync(OUTPUT_PATH, `SET session_replication_role = 'origin';\n`);

    console.log(`\n🎉 ALL DONE! File saved at: ${OUTPUT_PATH}`);
  } catch (error) {
    console.error("\n❌ Export failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
