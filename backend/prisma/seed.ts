import "dotenv/config";
import bcrypt from "bcrypt";
import { prisma } from "../src/config/prisma";

const ADMIN_EMAIL = "admin123@gmail.com";
const ADMIN_PASSWORD = "admin123";

async function main() {
  // 1. Tạo Admin
  const existingAdmin = await prisma.user.findUnique({
    where: { email: ADMIN_EMAIL },
  });

  if (!existingAdmin) {
    const adminPasswordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await prisma.user.create({
      data: {
        email: ADMIN_EMAIL,
        passwordHash: adminPasswordHash,
        displayName: "Hệ thống Quản trị",
        role: "admin",
      },
    });
    console.log(`[Seed] Đã tạo admin: ${ADMIN_EMAIL}`);
  }

  // 2. Tạo danh sách thành viên mẫu (Users)
  const memberPasswordHash = await bcrypt.hash("password123", 10);
  const sampleUsers = [
    { name: "Nguyễn Văn An", email: "an.nguyen@gmail.com" },
    { name: "Trần Thị Bình", email: "binh.tran@gmail.com" },
    { name: "Lê Hoàng Nam", email: "nam.le@gmail.com" },
    { name: "Phạm Minh Tuấn", email: "tuan.pham@gmail.com" },
    { name: "Hoàng Thu Hà", email: "ha.hoang@gmail.com" },
    { name: "Đặng Việt Hùng", email: "hung.dang@gmail.com" },
    { name: "Vũ Minh Anh", email: "anh.vu@gmail.com" },
    { name: "Bùi Quang Huy", email: "huy.bui@gmail.com" },
    { name: "Đỗ Thùy Linh", email: "linh.do@gmail.com" },
    { name: "Ngô Quốc Bảo", email: "bao.ngo@gmail.com" },
    { name: "Phan Thanh Tùng", email: "tung.phan@gmail.com" },
    { name: "Dương Ngọc Lan", email: "lan.duong@gmail.com" },
    { name: "Lý Gia Hào", email: "hao.ly@gmail.com" },
    { name: "Trương Thế Vinh", email: "vinh.truong@gmail.com" },
    { name: "Hồ Xuân Hương", email: "huong.ho@gmail.com" },
    { name: "Võ Văn Kiệt", email: "kiet.vo@gmail.com" },
    { name: "Cao Thái Sơn", email: "son.cao@gmail.com" },
    { name: "Mai Phương Thúy", email: "thuy.mai@gmail.com" },
    { name: "Đinh Công Thành", email: "thanh.dinh@gmail.com" },
    { name: "Hà Anh Tuấn", email: "tuan.ha@gmail.com" },
    { name: "Lâm Khánh Chi", email: "chi.lam@gmail.com" },
    { name: "Trịnh Thăng Bình", email: "binh.trinh@gmail.com" },
    { name: "Tạ Quang Thắng", email: "thang.ta@gmail.com" },
    { name: "Quách Ngọc Ngoan", email: "ngoan.quach@gmail.com" },
    { name: "Văn Mai Hương", email: "huong.van@gmail.com" },
  ];

  let createdCount = 0;
  for (const userData of sampleUsers) {
    const exists = await prisma.user.findUnique({ where: { email: userData.email } });
    if (!exists) {
      await prisma.user.create({
        data: {
          email: userData.email,
          displayName: userData.name,
          passwordHash: memberPasswordHash,
          role: "user",
          status: "active",
        },
      });
      createdCount++;
    }
  }

  console.log(`[Seed] Đã tạo thêm ${createdCount} thành viên mẫu.`);
}

main()
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
