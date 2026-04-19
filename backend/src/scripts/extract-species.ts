import { prisma } from '../config/prisma.js';
import fs from 'fs';
import path from 'path';

async function main() {
  console.log('--- Đang sử dụng Prisma Client từ src/config/prisma.ts ---');
  
  const limit = 1000;
  
  try {
    // Sử dụng Raw Query để lấy ngẫu nhiên nốt hạt kín (angiosperm) ở cấp loài (species)
    const species = await prisma.$queryRawUnsafe(`
      SELECT 
        canonical_name as "canonicalName", 
        habit, 
        leaf, 
        reproduction, 
        phenology, 
        value, 
        distribution_text as "distributionText"
      FROM taxon 
      WHERE rank = 'species' 
        AND plant_group = 'angiosperm'
        AND (habit IS NOT NULL OR leaf IS NOT NULL OR distribution_text IS NOT NULL)
      ORDER BY RANDOM() 
      LIMIT ${limit}
    `);

    // Đường dẫn tệp đầu ra
    const outputPath = 'd:/CNTT/Luận văn/error_correction/official/data/random_angiosperms.json';
    
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(species, null, 2), 'utf-8');
    console.log(`--- Thành công! Đã trích xuất ${Array.isArray(species) ? species.length : 0} loài vào: ${outputPath} ---`);
  } catch (err) {
    console.error('Lỗi khi trích xuất dữ liệu:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
