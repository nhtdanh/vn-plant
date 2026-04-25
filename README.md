# EfloraVN

Hệ thống tra cứu thực vật Việt Nam từ bộ sách Cây cỏ Việt Nam của Giáo sư Phạm Hoàng Hộ.

## Công nghệ sử dụng
- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js (Express), TypeScript
- Database: PostgreSQL, Prisma ORM
- Môi trường: Docker, Docker Compose

---

## Hướng dẫn cài đặt (Docker)

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

# C. Đồng bộ path (Cập nhật đường dẫn phân cấp)
docker exec -i efloravn-db psql -U postgres -d vn_plant -c "UPDATE taxon t SET path = subpath.new_path FROM (WITH RECURSIVE taxon_path AS (SELECT id, CAST(id AS text)::ltree AS new_path FROM taxon WHERE parent_id IS NULL UNION ALL SELECT t.id, tp.new_path || CAST(t.id AS text)::ltree FROM taxon t JOIN taxon_path tp ON t.parent_id = tp.id) SELECT id, new_path FROM taxon_path) AS subpath WHERE t.id = subpath.id;"

# D. Cấu hình search và tạo tài khoản admin (có thể tùy chỉnh tài khoản admin trong file setup-search.ts)
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

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:3000/api/v1](http://localhost:3000/api/v1)
- Tài khoản Admin mẫu: admin123@gmail.com / admin123

---

## Kiểm tra API nhanh

Sau khi cài đặt, bạn có thể truy cập các đường dẫn sau để kiểm tra kết nối:

- **Trạng thái hệ thống:** [http://localhost:3000/api/v1/health](http://localhost:3000/api/v1/health)
- **Danh sách cây cỏ (Phân trang):** [http://localhost:3000/api/v1/taxa](http://localhost:3000/api/v1/taxa)
- **Gợi ý tìm kiếm:** [http://localhost:3000/api/v1/taxa/autocomplete?q=sen+h&limit=5](http://localhost:3000/api/v1/taxa/autocomplete?q=sen+h&limit=5)
- **Chi tiết loài (VD: Sen):** [http://localhost:3000/api/v1/taxa/nelumbo-nucifera-gaertn](http://localhost:3000/api/v1/taxa/nelumbo-nucifera-gaertn)

---

## Xử lý sự cố

### 1. Lỗi xung đột cổng (Port already allocated)
Nếu máy bạn đã cài sẵn Postgres hoặc đang chạy ứng dụng khác ở cổng 3000, 5173, hãy mở `docker-compose.yml` và sửa số bên trái dấu `:`:
- **Đổi cổng Database:** `5432:5432` -> `5433:5432`
- **Đổi cổng Backend:** `3000:3000` -> `3030:3000`
- **Đổi cổng Frontend:** `5173:5173` -> `5050:5173`
*(Lưu ý: Nếu đổi cổng, hãy cập nhật lại các biến environment trong docker-compose.yml tương ứng. Chỉ sửa file .env nếu chạy ở máy thật).*

### 2. Lỗi tiếng Việt 
Hãy chắc chắn dùng lệnh nạp dữ liệu có `-Encoding UTF8` như hướng dẫn ở bước 2B.

---

## Các script hỗ trợ (Backend)

Sử dụng lệnh: docker exec -it efloravn-backend [script]

- npm run setup-search: Cài đặt search triggers và tạo admin.
- npm run re-sync-search: Chạy lại chỉ mục tìm kiếm khi cần.
- npm run export-data: Xuất dữ liệu hiện tại ra file SQL dự phòng.

