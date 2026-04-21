import multer from "multer";
import path from "path";
import fs from "fs";
import { ApiError } from "../utils/apiError.js";

const uploadDir = path.join(process.cwd(), "public/uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

function sanitizeFileName(filename: string): string {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/\.\./g, "_")
    .substring(0, 100);
}

const storage = multer.diskStorage({
  destination: (_req: any, _file: any, cb: any) => {
    cb(null, uploadDir);
  },
  filename: (_req: any, file: any, cb: any) => {
    const safeName = sanitizeFileName(file.fieldname);
    const safeBasename = sanitizeFileName(path.parse(file.originalname).name);
    const ext = path.extname(file.originalname).toLowerCase();
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const finalName = `${safeName}-${safeBasename}-${uniqueSuffix}${ext}`;
    cb(null, finalName);
  },
});

const fileFilter = (_req: any, file: any, cb: multer.FileFilterCallback) => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
  ];
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

  const fileExt = path.extname(file.originalname).toLowerCase();
  const isMimeValid = allowedMimeTypes.includes(file.mimetype);
  const isExtValid = allowedExtensions.includes(fileExt);

  if (isMimeValid && isExtValid) {
    cb(null, true);
  } else {
    cb(
      ApiError.badRequest("Chỉ chấp nhận file hình ảnh (jpeg, png, webp, gif)"),
    );
  }
};

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // giới hạn 5mb
  fileFilter,
});

export const memoryUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter,
});

