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

/**
 * upload một file (buffer) lên cloudflare r2
 * @param fileBuffer buffer của file
 * @param fileName tên file gốc hoặc gợi ý
 * @param folder thư mục trên r2 (ví dụ: 'taxa', 'avatars')
 * @param contentType loại file (ví dụ: 'image/jpeg')
 */
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

  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
    Body: fileBuffer,
    ContentType: contentType,
    // ghi chú: r2 hỗ trợ một số acl nhưng thường được quản lý qua bucket policy
    // ACL: 'public-read' as any, 
  });

  await s3Client.send(command);

  return {
    key,
  };
}

// xóa một file trên r2 (dùng cho dọn dẹp hoặc cập nhật ảnh)
export async function deleteFromR2(key: string) {
  const { DeleteObjectCommand } = await import("@aws-sdk/client-s3");
  const command = new DeleteObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
  });
  await s3Client.send(command);
}

// xóa nhiều file trên r2 (dọn dẹp hàng loạt khi lỗi hoặc xóa taxon)
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

