import crypto from "crypto";
import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { s3Client, R2_BUCKET_NAME, isR2Configured } from "../../config/s3.config.js";

export interface UploadResult {
  key: string;
  url?: string;
}

export interface ImageProcessResult {
  buffer: Buffer;
  width: number;
  height: number;
  format: string;
}

// xử lý tối ưu hóa hình ảnh (convert webp, resize, rotate)
export async function processImage(buffer: Buffer): Promise<ImageProcessResult> {
  const image = sharp(buffer);
  const metadata = await image.metadata();

  // tạo pipeline xử lý
  let pipeline = image
    .webp({ quality: 95 })
    .rotate(); // tự động xoay ảnh theo exif

  // resize nếu ảnh quá rộng (> 1920px)
  if (metadata.width && metadata.width > 1920) {
    pipeline = pipeline.resize(1920);
  }

  const { data, info } = await pipeline.toBuffer({ resolveWithObject: true });

  return {
    buffer: data,
    width: info.width,
    height: info.height,
    format: info.format,
  };
}

// upload một file (buffer) lên cloudflare r2
// tham số: fileBuffer, fileName, folder, contentType
export async function uploadToR2(
  fileBuffer: Buffer,
  fileName: string,
  folder: string = "misc",
  contentType: string = "image/jpeg"
): Promise<UploadResult> {
  // tạo tên file ngẫu nhiên để tránh trùng lặp
  const fileExtension = fileName.split(".").pop();
  const randomName = crypto.randomBytes(16).toString("hex");
  const key = `${folder}/${randomName}.${fileExtension}`;

  if (isR2Configured && s3Client) {
    const { PutObjectCommand } = await import("@aws-sdk/client-s3");
    const command = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: fileBuffer,
      ContentType: contentType,
    });
    await s3Client.send(command);
  } else {
    // Local Fallback
    const uploadDir = path.join(process.cwd(), "public", "uploads", folder);
    await fs.mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, `${randomName}.${fileExtension}`);
    await fs.writeFile(filePath, fileBuffer);
    console.log(`[Upload] Local fallback: saved to ${filePath}`);
  }

  return {
    key,
  };
}

// xóa một file trên r2 (dùng cho dọn dẹp hoặc cập nhật ảnh)
export async function deleteFromR2(key: string) {
  if (isR2Configured && s3Client) {
    const { DeleteObjectCommand } = await import("@aws-sdk/client-s3");
    const command = new DeleteObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
    });
    await s3Client.send(command);
  } else {
    // Local Cleanup
    const filePath = path.join(process.cwd(), "public", "uploads", key);
    await fs.unlink(filePath).catch(() => {
      console.warn(`[Cleanup] Failed to delete local file: ${filePath}`);
    });
  }
}

// xóa nhiều file trên r2 (dọn dẹp hàng loạt khi lỗi hoặc xóa taxon)
export async function deleteMultipleFromR2(keys: string[]) {
  if (!keys || keys.length === 0) return;
  
  if (isR2Configured && s3Client) {
    const { DeleteObjectsCommand } = await import("@aws-sdk/client-s3");
    const command = new DeleteObjectsCommand({
      Bucket: R2_BUCKET_NAME,
      Delete: {
        Objects: keys.map((key) => ({ Key: key })),
        Quiet: true,
      },
    });
    await s3Client.send(command);
  } else {
    // Local Cleanup
    await Promise.all(
      keys.map(key => {
        const filePath = path.join(process.cwd(), "public", "uploads", key);
        return fs.unlink(filePath).catch(() => {
          console.warn(`[Cleanup] Failed to delete local file: ${filePath}`);
        });
      })
    );
  }
}

