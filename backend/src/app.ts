import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import { router } from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// 1. các trung gian cốt lõi (parse dữ liệu sớm nhất có thể)
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// 2. bảo mật và cors (cross-origin resource sharing)
const clientUrl = process.env["CLIENT_URL"] || "http://localhost:5173";
const allowedOrigins = clientUrl.split(",").map((url) => url.trim());

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(helmet({ crossOriginResourcePolicy: false }));

// 3. giới hạn lưu lượng (rate limiting - đã tắt theo yêu cầu người dùng)

// static files
app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "public", "uploads")),
);

// routes
app.use("/api/v1", router);

// error
app.use(errorHandler);

export { app };
