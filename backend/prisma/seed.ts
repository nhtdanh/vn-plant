import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, UserRole } from '../generated/prisma/client';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is missing');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashedPassword = await bcrypt.hash('123456', 10);
  await prisma.user.upsert({
    where: { email: 'admin123@gmail.com' },
    update: {},
    create: {
      email: 'admin123@gmail.com',
      passwordHash: hashedPassword,
      fullName: 'Admin',
      role: UserRole.ADMIN,
    },
  });

  const locations = [
    { code: 'HN', nameDisplay: 'Hà Nội', region: 'Miền Bắc' },
    { code: 'DL', nameDisplay: 'Đà Lạt', region: 'Tây Nguyên' },
    { code: 'SG', nameDisplay: 'TP. Hồ Chí Minh', region: 'Miền Nam' },
  ];

  for (const loc of locations) {
    await prisma.location.upsert({
      where: { code: loc.code },
      update: {},
      create: loc,
    });
  }
  console.log('Seeding success');
}
main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
