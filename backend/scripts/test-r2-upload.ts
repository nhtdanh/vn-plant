import { uploadToR2 } from "../src/modules/upload/upload.service";
import "dotenv/config";

async function testUpload() {
  console.log("--- Bắt đầu test R2 Upload ---");
  
  // Tạo một buffer giả lập (nội dung text chuyển thành buffer ảnh giả)
  const dummyContent = Buffer.from("Dữ liệu test upload lên Cloudflare R2 - " + new Date().toISOString());
  
  try {
    console.log("Đang upload...");
    const result = await uploadToR2(dummyContent, "test-file.txt", "tests", "text/plain");
    
    console.log("Upload THÀNH CÔNG!");
    console.log("Key trên R2:", result.key);
    console.log("\nBạn có thể vào Dashboard Cloudflare R2 để kiểm tra file này.");
  } catch (error) {
    console.error("Lỗi khi upload:", error);
  }
}

testUpload();
