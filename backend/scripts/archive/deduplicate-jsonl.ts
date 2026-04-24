import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

async function deduplicateJSONL(inputPath: string, outputPath: string) {
  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    return;
  }

  const fileStream = fs.createReadStream(inputPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const uniqueMap = new Map<number | string, any>();
  let totalRows = 0;
  let duplicateCount = 0;

  console.log(`Reading and deduplicating data from ${path.basename(inputPath)}...`);

  for await (const line of rl) {
    if (!line.trim()) continue;
    totalRows++;

    try {
      const record = JSON.parse(line);
      // Lấy GBIF ID làm khóa duy nhất
      const gbifId = record.externalIds?.gbif || record.gbifId;
      
      if (!gbifId) {
        console.warn(`Line ${totalRows} missing GBIF ID. Skipping.`);
        continue;
      }

      const existing = uniqueMap.get(gbifId);
      
      if (existing) {
        duplicateCount++;
        // So sánh độ dài rawText (hoặc description nếu không có rawText)
        const currentText = record.rawText || record.rawData?.rawText || JSON.stringify(record);
        const existingText = existing.rawText || existing.rawData?.rawText || JSON.stringify(existing);

        if (currentText.length > existingText.length) {
          uniqueMap.set(gbifId, record);
        }
      } else {
        uniqueMap.set(gbifId, record);
      }
    } catch (err) {
      console.error(`Error parsing line ${totalRows}:`, err);
    }
  }

  console.log(`Writing ${uniqueMap.size} unique records to ${path.basename(outputPath)}...`);
  const outStream = fs.createWriteStream(outputPath);
  
  for (const record of uniqueMap.values()) {
    outStream.write(JSON.stringify(record) + '\n');
  }
  
  outStream.end();
  console.log(`Done!`);
  console.log(`- Total records: ${totalRows}`);
  console.log(`- Duplicates filtered: ${duplicateCount}`);
  console.log(`- Unique saved: ${uniqueMap.size}`);
}

// Bạn hãy thay đổi đường dẫn file ở đây nếu cần
const INPUT_FILE = path.join(process.cwd(), 'data/raw/species_infraspecies.jsonl');
const OUTPUT_FILE = path.join(process.cwd(), 'data/raw/species_deduplicated.jsonl');

deduplicateJSONL(INPUT_FILE, OUTPUT_FILE);
