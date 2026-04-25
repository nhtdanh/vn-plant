import { prisma } from "../src/config/prisma.js";
import fs from "fs";
import path from "path";

const CHUNK_SIZE = 500;
const OUTPUT_PATH = path.join(process.cwd(), "prisma", "seed_data.sql");

async function exportTableInChunks(tableName: string, model: any, cursorField: string | null = "id") {
  console.log(`Exporting: ${tableName}`);
  
  const totalCount = await model.count();
  fs.appendFileSync(OUTPUT_PATH, `-- Data for ${tableName}\n`);
  
  if (totalCount === 0) {
    fs.appendFileSync(OUTPUT_PATH, `-- No data\n\n`);
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

      const dbColumns = columns.map(c => c.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`));
      chunkSql += `INSERT INTO "${tableName}" (${dbColumns.map(c => `"${c}"`).join(", ")}) VALUES (${values.join(", ")}) ON CONFLICT DO NOTHING;\n`;
    }
    
    fs.appendFileSync(OUTPUT_PATH, chunkSql);
    processedCount += data.length;
    
    if (cursorField) lastId = data[data.length - 1][cursorField];
    console.log(`   Progress: ${processedCount}/${totalCount}`);
  }
  fs.appendFileSync(OUTPUT_PATH, "\n");
}

async function main() {
  try {
    fs.writeFileSync(OUTPUT_PATH, "SET session_replication_role = 'replica';\n\n");
    
    await exportTableInChunks("province", prisma.province);
    await exportTableInChunks("taxon", prisma.taxon);
    await exportTableInChunks("taxon_synonym", prisma.taxonSynonym);
    await exportTableInChunks("taxon_common_name", prisma.taxonCommonName);
    await exportTableInChunks("taxon_image", prisma.taxonImage);
    await exportTableInChunks("taxon_province", prisma.taxonProvince, null);

    fs.appendFileSync(OUTPUT_PATH, `SET session_replication_role = 'origin';\n`);
    console.log(`Export complete: ${OUTPUT_PATH}`);
  } catch (error) {
    console.error("Export failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
