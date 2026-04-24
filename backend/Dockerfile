FROM node:22-alpine

WORKDIR /usr/src/app

# Cài đặt các thư viện cần thiết cho Prisma, Bcrypt và Sharp
RUN apk add --no-cache libc6-compat python3 make g++

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install --legacy-peer-deps

COPY . .

RUN npx prisma generate

EXPOSE 3000

# Chạy chế độ dev để tự động cập nhật khi sửa code
CMD [ "npm", "run", "dev" ]
