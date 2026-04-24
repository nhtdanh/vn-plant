import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

async function extractOrphans() {
  const logFile = path.join(process.cwd(), 'data/logs/invalid_group.jsonl');
  const outFile = path.join(process.cwd(), 'data/raw/orphaned_infraspecies.jsonl');

  if (!fs.existsSync(logFile)) {
    console.error(`Log file not found at: ${logFile}`);
    return;
  }

  const fileStream = fs.createReadStream(logFile);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const outStream = fs.createWriteStream(outFile);
  let count = 0;
  let totalLogs = 0;

  const targetRanks = ['subspecies', 'variety', 'form', 'subvariety', 'subform'];

  console.log(`Processing logs...`);

  for await (const line of rl) {
    totalLogs++;
    try {
      const entry = JSON.parse(line);
      const rawData = entry.rawData;
      
      if (rawData && rawData.rank) {
        const rank = rawData.rank.toLowerCase();
        
        if (targetRanks.includes(rank)) {
          outStream.write(JSON.stringify(rawData) + '\n');
          count++;
        }
      }
    } catch (err) {
      console.error(`Error parsing line ${totalLogs}:`, err);
    }
  }

  outStream.end();
  console.log(`Done!`);
  console.log(`- Total logs scanned: ${totalLogs}`);
  console.log(`- Orphaned infraspecies extracted: ${count}`);
  console.log(`- Saved to: data/raw/orphaned_infraspecies.jsonl`);
}

extractOrphans();
