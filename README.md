# EfloraVN

Dự án tra cứu thực vật Việt Nam từ bộ sách Cây cỏ Việt Nam của Giáo sư Phạm Hoàng Hộ

## Các bước thực hiện

### 1. Thiết lập cấu hình
Copy file mẫu để tạo file `.env`:
- Tại `/backend`: Copy `.env.example` -> `.env`
- Tại `/frontend`: Copy `.env.example` -> `.env`

### 2. Khởi chạy hệ thống
Sử dụng Docker để dựng Server và Database:
```bash
docker-compose up --build
```

### 3. Tạo cấu trúc bảng (Làm lần đầu)
Mở một terminal mới và chạy lệnh sau để khởi tạo các bảng trong Database:
```bash
docker exec -it efloravn-backend npx prisma migrate dev --name init

## Địa chỉ truy cập
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api/v1
