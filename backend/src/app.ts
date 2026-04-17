import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import { router } from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// 1. Core Middlewares (Parse dữ liệu sớm nhất có thể)
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// 2. Security & CORS
app.use(
  cors({
    origin: process.env["CLIENT_URL"] || "http://localhost:5173",
    credentials: true,
  }),
);
app.use(helmet({ crossOriginResourcePolicy: false }));

// 3. Rate Limiting (Disabled per user request)

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
