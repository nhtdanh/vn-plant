import { S3Client } from "@aws-sdk/client-s3";
import "dotenv/config";

const ACCOUNT_ID = process.env["R2_ACCOUNT_ID"] as string;
const ACCESS_KEY_ID = process.env["R2_ACCESS_KEY_ID"] as string;
const SECRET_ACCESS_KEY = process.env["R2_SECRET_ACCESS_KEY"] as string;

if (!ACCOUNT_ID || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
  throw new Error("Missing R2 configuration in environment variables.");
}

export const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});

export const R2_BUCKET_NAME = process.env["R2_BUCKET_NAME"] || "vn-plant-data";
export const R2_PUBLIC_DOMAIN = process.env["R2_PUBLIC_DOMAIN"] || "localhost";
