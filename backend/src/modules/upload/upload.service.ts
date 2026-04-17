import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client, R2_BUCKET_NAME } from "../../config/s3.config.js";
import crypto from "crypto";
import sharp from "sharp";

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

// Xử lý tối ưu hóa hình ảnh (Convert WebP, Resize, rotate)
export async function processImage(buffer: Buffer): Promise<ImageProcessResult> {
  const image = sharp(buffer);
  const metadata = await image.metadata();

  // Tạo pipeline xử lý
  let pipeline = image
    .webp({ quality: 95 })
    .rotate(); // Tự động xoay ảnh theo EXIF

  // Resize nếu ảnh quá rộng (> 1920px)
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

/**
 * Upload một file (Buffer) lên Cloudflare R2
 * @param fileBuffer Buffer của file
 * @param fileName Tên file gốc hoặc gợi ý
 * @param folder Thư mục trên R2 (ví dụ: 'taxa', 'avatars')
 * @param contentType Loại file (ví dụ: 'image/jpeg')
 */
export async function uploadToR2(
  fileBuffer: Buffer,
  fileName: string,
  folder: string = "misc",
  contentType: string = "image/jpeg"
): Promise<UploadResult> {
  // Tạo tên file ngẫu nhiên để tránh trùng lặp
  const fileExtension = fileName.split(".").pop();
  const randomName = crypto.randomBytes(16).toString("hex");
  const key = `${folder}/${randomName}.${fileExtension}`;

  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
    Body: fileBuffer,
    ContentType: contentType,
    // Note: R2 supports some ACLs but often managed via bucket policies
    // ACL: 'public-read' as any, 
  });

  await s3Client.send(command);

  return {
    key,
  };
}

// Xóa một file trên R2 (Dùng cho dọn dẹp hoặc cập nhật ảnh)
export async function deleteFromR2(key: string) {
  const { DeleteObjectCommand } = await import("@aws-sdk/client-s3");
  const command = new DeleteObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
  });
  await s3Client.send(command);
}

// Xóa nhiều file trên R2 (Dọn dẹp hàng loạt khi lỗi hoặc xóa Taxon)
export async function deleteMultipleFromR2(keys: string[]) {
  if (!keys || keys.length === 0) return;
  const { DeleteObjectsCommand } = await import("@aws-sdk/client-s3");
  const command = new DeleteObjectsCommand({
    Bucket: R2_BUCKET_NAME,
    Delete: {
      Objects: keys.map((key) => ({ Key: key })),
      Quiet: true,
    },
  });
  await s3Client.send(command);
}

