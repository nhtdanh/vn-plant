import fs from "fs";
import path from "path";
import readline from "readline";

async function splitSpeciesData() {
  const inputPath = path.join(process.cwd(), "data", "raw", "species_deduplicated.jsonl");
  const speciesPath = path.join(process.cwd(), "data", "raw", "species_only.jsonl");
  const infraPath = path.join(process.cwd(), "data", "raw", "infraspecies_only.jsonl");

  if (!fs.existsSync(inputPath)) {
    console.error("Input file not found:", inputPath);
    return;
  }

  const fileStream = fs.createReadStream(inputPath);
  const speciesStream = fs.createWriteStream(speciesPath);
  const infraStream = fs.createWriteStream(infraPath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let speciesCount = 0;
  let infraCount = 0;
  let skippedCount = 0;

  console.log("Splitting species_infraspecies.jsonl...");

  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const data = JSON.parse(line);
      const rank = data.rank?.toLowerCase();

      if (!rank) {
        skippedCount++;
        continue;
      }

      if (rank === "species") {
        speciesStream.write(line + "\n");
        speciesCount++;
      } else {
        infraStream.write(line + "\n");
        infraCount++;
      }
    } catch (err) {
      console.error("Error parsing line:", err);
    }
  }

  speciesStream.end();
  infraStream.end();

  console.log("-----------------------------------------");
  console.log(`Finished splitting data:`);
  console.log(`- Species saved to: species_only.jsonl (${speciesCount} records)`);
  console.log(`- Infraspecies saved to: infraspecies_only.jsonl (${infraCount} records)`);
  console.log(`- Skipped records (rank is null/empty): ${skippedCount}`);
  console.log("-----------------------------------------");
}

splitSpeciesData();
