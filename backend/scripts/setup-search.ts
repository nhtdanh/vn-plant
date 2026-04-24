import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';
import { prisma } from '../src/config/prisma.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function setup() {
  try {
    // 1. Setup SQL Triggers & Functions
    console.log('Installing search triggers...');
    const sql = fs.readFileSync(path.join(__dirname, 'sql', 'setup-hybrid-search.sql'), 'utf8');
    await prisma.$executeRawUnsafe(sql);

    // 2. Seed Admin User
    const adminEmail = 'admin123@gmail.com';
    const exists = await prisma.user.findUnique({ where: { email: adminEmail } });
    
    if (!exists) {
      console.log('Creating admin user...');
      await prisma.user.create({
        data: {
          email: adminEmail,
          passwordHash: await bcrypt.hash('admin123', 10),
          displayName: 'Administrator',
          role: 'admin',
          status: 'active'
        }
      });
    }

    // 3. Sync Sequences & Search Vectors
    console.log('Syncing database sequences and vectors...');
    const tables = ['taxon', 'taxon_common_name', 'taxon_synonym', 'province'];
    
    for (const table of tables) {
      await prisma.$executeRawUnsafe(`
        SELECT setval(pg_get_serial_sequence('"${table}"', 'id'), coalesce(max(id), 1), max(id) IS NOT NULL) FROM "${table}";
      `);
    }

    const updated = await prisma.$executeRawUnsafe('UPDATE taxon SET scientific_name = scientific_name;');
    console.log(`Setup complete. Synced ${updated} taxa.`);

  } catch (err) {
    console.error('Setup failed:', err);
    process.exit(1);
  }
}

setup().finally(() => prisma.$disconnect());
