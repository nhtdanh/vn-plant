import { prisma } from '../src/config/prisma';

async function main() {
  console.log('--- Starting Search Vector Re-sync ---');
  console.log('This will trigger the SQL focus on Vietnamese names for all taxa.');

  try {
    // Kích hoạt lại trigger bằng cách touch trường scientificName
    // Sử dụng executeRaw để đạt tốc độ tối đa cho toàn bộ bảng
    const startTime = Date.now();
    const count = await prisma.$executeRawUnsafe(
      'UPDATE taxon SET scientific_name = scientific_name;'
    );
    const duration = (Date.now() - startTime) / 1000;

    console.log(`[SUCCESS] Successfully re-synced search vectors for ${count} records.`);
    console.log(`[TIME] Completed in ${duration.toFixed(2)}s.`);
  } catch (error) {
    console.error('[ERROR] Failed to re-sync search vectors:', error);
    process.exit(1);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
