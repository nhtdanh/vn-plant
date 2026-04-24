FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5173

# Chạy dev server với host để có thể truy cập từ ngoài container
CMD [ "npm", "run", "dev", "--", "--host" ]
