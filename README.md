# EfloraVN - Plant Search System

Hệ thống tra cứu thực vật Việt Nam dựa trên dữ liệu từ bộ sách "Cây cỏ Việt Nam" của Giáo sư Phạm Hoàng Hộ.

## Cài đặt với Docker (Khuyên dùng)

### 1. Chuẩn bị
- Copy `.env.example` -> `.env` (tại cả `/backend` và `/frontend`).
- Khởi chạy services: `docker-compose up -d --build`.

### 2. Khởi tạo Database
```bash
# Tạo schema
cd backend && npx prisma migrate dev

# Import dữ liệu thực vật
docker exec -i efloravn-db psql -U postgres -d vn_plant < backend/prisma/seed_data.sql

# Cấu hình search & admin
npm run setup-search
```

---

## Cài đặt trực tiếp trên máy (Local)

### 1. Yêu cầu
- Node.js 18+
- PostgreSQL 15+

### 2. Cấu hình
- Tạo database `vn_plant`.
- Cập nhật thông tin kết nối trong `backend/.env`.
- Sửa `VITE_API_URL=http://localhost:3000/api/v1` trong `frontend/.env`.

### 3. Thực thi
**Backend:**
```bash
cd backend
npm install            # Sẽ tự động chạy 'prisma generate' để sinh Client
npx prisma migrate dev # Tạo cấu trúc bảng
# Import file backend/prisma/seed_data.sql vào Postgres
npm run setup-search   # Kích hoạt tìm kiếm Hybrid & tạo tài khoản admin mẫu
npm run dev            # Chạy server tại cổng 3000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev            # Chạy giao diện tại cổng 5173
```

---

## Thông tin truy cập

| Dịch vụ | Địa chỉ | Ghi chú |
| ------------- | ------------- | ------------- |
| Frontend | http://localhost:5173 | Admin: admin123@gmail.com / admin123 |
| Backend API | http://localhost:3000/api/v1 | |
| Adminer (DB) | http://localhost:8888 | (Chỉ dành cho Docker) |

## Cấu trúc Scripts (Backend)
Hệ thống sử dụng các script tự động hóa trong `backend/scripts/`:

*   **Lệnh vận hành chính:**
    *   `npm run setup-search`: Cài đặt SQL Extensions (ltree, pg_trgm), Triggers tìm kiếm và tạo tài khoản Admin.
    *   `npm run re-sync-search`: Chạy lại toàn bộ chỉ mục tìm kiếm (dùng khi bạn sửa dữ liệu hàng loạt trực tiếp trong DB).
    *   `npm run export-data`: Xuất toàn bộ dữ liệu Taxon ra file JSON làm dự phòng.

*   **Thư mục `archive/`**: Chứa các script lịch sử đã sử dụng để xử lý dữ liệu từ file JSONL, migrate ảnh sang Cloudflare R2 và xử lý trùng lặp. (Dùng để tham khảo quy trình xử lý dữ liệu).

## Các lệnh hỗ trợ khác
- **Hot Reload**: Code tự động cập nhật khi lưu file.
- **Xem Logs (Docker)**: `docker-compose logs -f [service_name]`
- **Cập nhật Schema**: Nếu sửa `schema.prisma`, hãy chạy lại `npx prisma generate`.
