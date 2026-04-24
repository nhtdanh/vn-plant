import { prisma } from "../src/config/prisma";
import * as fs from "fs";
import * as path from "path";

async function seedProvinces() {
  try {
    const filePath = path.join(process.cwd(), "data", "raw", "province.csv");
    
    if (!fs.existsSync(filePath)) {
      return;
    }

    const rawContent = fs.readFileSync(filePath, "utf-8");
    
    // Clean and validate data
    const provinceNames = rawContent
      .split(/\r?\n/)
      .map(name => name.trim())
      .filter(name => name.length > 0);


    // 1. Clear existing data to ensure clean state
    await prisma.taxonProvince.deleteMany({});
    await prisma.province.deleteMany({});

    // 2. Bulk insert new data
    const data = provinceNames.map(name => ({ name }));

    await prisma.province.createMany({
      data,
      skipDuplicates: true
    });

  } catch (error) {
    console.error("[Error] Ingestion failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProvinces();
