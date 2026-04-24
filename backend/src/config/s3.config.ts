import { S3Client } from "@aws-sdk/client-s3";
import "dotenv/config";

const ACCOUNT_ID = process.env["R2_ACCOUNT_ID"];
const ACCESS_KEY_ID = process.env["R2_ACCESS_KEY_ID"];
const SECRET_ACCESS_KEY = process.env["R2_SECRET_ACCESS_KEY"];

export const isR2Configured = !!(ACCOUNT_ID && ACCESS_KEY_ID && SECRET_ACCESS_KEY);

export const s3Client = isR2Configured 
  ? new S3Client({
      region: "auto",
      endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: ACCESS_KEY_ID!,
        secretAccessKey: SECRET_ACCESS_KEY!,
      },
      forcePathStyle: true,
    })
  : null;

export const R2_BUCKET_NAME = process.env["R2_BUCKET_NAME"] || "vnflora";
export const R2_PUBLIC_DOMAIN = process.env["R2_PUBLIC_DOMAIN"] || "http://localhost:3000/uploads";
