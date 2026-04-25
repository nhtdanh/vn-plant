# EfloraVN - Plant Search System

Hệ thống tra cứu thực vật Việt Nam từ bộ sách Cây cỏ Việt Nam của Giáo sư Phạm Hoàng Hộ.

## Công nghệ sử dụng
- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js (Express), TypeScript
- Database: PostgreSQL, Prisma ORM
- Môi trường: Docker, Docker Compose

---

## Hướng dẫn cài đặt (Docker)

Đây là cách nhanh nhất để chạy dự án với Node 22 và Postgres 15.

### 1. Cấu hình môi trường
Copy file `.env.example` thành `.env` tại cả hai thư mục:
- backend/.env
- frontend/.env

Khởi chạy containers:
```bash
docker-compose up -d --build
```

### 2. Thiết lập dữ liệu (Chỉ chạy lần đầu)
Mở terminal và chạy lần lượt các lệnh sau:

```powershell
# A. Tạo cấu trúc bảng
docker exec -it efloravn-backend npx prisma migrate dev

# B. Import dữ liệu mẫu
# Cách 1: Dùng CMD (Command Prompt)
docker exec -i efloravn-db psql -U postgres -d vn_plant < backend/prisma/seed_data.sql
# Cách 2: Dùng PowerShell
Get-Content -Encoding UTF8 backend/prisma/seed_data.sql | docker exec -i efloravn-db psql -U postgres -d vn_plant

# C. Đồng bộ Breadcrumb (Cập nhật đường dẫn phân cấp)
docker exec -i efloravn-db psql -U postgres -d vn_plant -c "UPDATE taxon t SET path = subpath.new_path FROM (WITH RECURSIVE taxon_path AS (SELECT id, CAST(id AS text)::ltree AS new_path FROM taxon WHERE parent_id IS NULL UNION ALL SELECT t.id, tp.new_path || CAST(t.id AS text)::ltree FROM taxon t JOIN taxon_path tp ON t.parent_id = tp.id) SELECT id, new_path FROM taxon_path) AS subpath WHERE t.id = subpath.id;"

# D. Cấu hình search và tạo tài khoản admin
docker exec -it efloravn-backend npm run setup-search
```

---

## Cài đặt thủ công (Không dùng Docker)

Yêu cầu: Node.js 22 và PostgreSQL 15.

### 1. Backend
- Tạo database `vn_plant`.
- Cấu hình `DATABASE_URL` trong `backend/.env`.
```bash
cd backend
npm install
npx prisma migrate dev
# Nạp file prisma/seed_data.sql vào Postgres
npm run setup-search
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## Thông tin truy cập

- Frontend: [http://localhost:5050](http://localhost:5050)
- Backend API: [http://localhost:3030/api/v1](http://localhost:3030/api/v1)
- Tài khoản Admin: `admin123@gmail.com` / `admin123`

---

## Các script hỗ trợ (Backend)

Sử dụng lệnh: `docker exec -it efloravn-backend [script]`

- `npm run setup-search`: Cài đặt search triggers và tạo admin.
- `npm run re-sync-search`: Chạy lại chỉ mục tìm kiếm khi cần.
- `npm run export-data`: Xuất dữ liệu hiện tại ra file SQL dự phòng.

## Lưu ý kỹ thuật

- Dự án dùng Prisma 7. Không thêm url vào schema.prisma, hãy chỉnh sửa trong prisma.config.ts.
- VS Code có thể báo lỗi IntelliSense nếu không chạy npm install ở máy thật, nhưng không ảnh hưởng đến việc chạy qua Docker.
- Xem log: `docker-compose logs -f backend`.
