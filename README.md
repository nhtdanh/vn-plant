# EfloraVN - Plant Search System

Hệ thống tra cứu thực vật Việt Nam từ bộ sách Cây cỏ Việt Nam của Giáo sư Phạm Hoàng Hộ.

## Hướng dẫn cài đặt (Docker)

### 1. Cấu hình môi trường
Copy file `.env.example` thành `.env` tại cả hai thư mục:
- `backend/.env`
- `frontend/.env`

Khởi chạy containers:
```bash
docker-compose up -d --build
```

### 2. Thiết lập dữ liệu (Chỉ chạy lần đầu)
Mở terminal và chạy lần lượt các lệnh sau:

```powershell
# Tạo cấu trúc bảng
docker exec -it efloravn-backend npx prisma migrate dev

# Import dữ liệu mẫu (Dùng cho PowerShell Windows)
Get-Content backend/prisma/seed_data.sql | docker exec -i efloravn-db psql -U postgres -d vn_plant

# Cấu hình search và tạo tài khoản admin
docker exec -it efloravn-backend npm run setup-search
```

---

## Thông tin truy cập

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000/api/v1

**Tài khoản Admin:** `admin123@gmail.com` / `admin123`

---

## Các script hỗ trợ (Backend, ít khi dùng)

Sử dụng lệnh: `docker exec -it efloravn-backend [script]`

- `npm run setup-search`: Cài đặt search triggers và tạo admin. (chỉ dùng một lần - đã có sử dụng trên phần thiết lập)
- `npm run re-sync-search`: Chạy lại chỉ mục tìm kiếm khi cần.
- `npm run export-data`: Xuất dữ liệu hiện tại ra file SQL dự phòng.

## Lưu ý kỹ thuật

- Dự án dùng **Prisma 7**. Không thêm `url` vào `schema.prisma`, hãy chỉnh sửa trong `prisma.config.ts`.
- VS Code không nhận diện được thư viện (IntelliSense) do không chạy npm install, nếu chỉ dùng docker thì có warning cũng không sao

