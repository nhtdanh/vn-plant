import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { prisma } from "../../config/prisma.js";
import { ApiError } from "../../utils/apiError.js";
import {
  JWT_SECRET,
  ACCESS_EXPIRES_IN,
  REFRESH_EXPIRES_IN,
  SALT_ROUNDS,
  getDurationMs,
} from "../../config/auth-config.js";
import { registerSchema, loginSchema } from "./auth.dto.js";
import type { UserEntity, UserResponse, UserRole } from "../user/user.types.js";

function generateTokens(userId: string, role: UserRole) {
  const accessToken = jwt.sign({ userId, role }, JWT_SECRET, {
    expiresIn: ACCESS_EXPIRES_IN as any,
  });
  const refreshToken = jwt.sign({ userId, role, type: "refresh" }, JWT_SECRET, {
    expiresIn: REFRESH_EXPIRES_IN as any,
  });
  return { accessToken, refreshToken };
}

function sanitizeUser(user: UserEntity): UserResponse {
  return {
    id: user.id,
    email: user.email,
    displayName: user.displayName,
    avatarUrl: user.avatarUrl,
    role: user.role,
    createdAt: user.createdAt,
  };
}

async function createSession(userId: string, role: UserRole, userAgent?: string) {
  const { accessToken, refreshToken } = generateTokens(userId, role);

  const tokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
  const expiresAt = new Date(Date.now() + getDurationMs(REFRESH_EXPIRES_IN));

  await prisma.refreshToken.create({
    data: {
      userId,
      tokenHash,
      userAgent: userAgent ?? null,
      expiresAt,
    },
  });

  return { accessToken, refreshToken };
}

export async function register(data: z.infer<typeof registerSchema>, userAgent?: string) {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (existing) {
    throw ApiError.conflict("Email đã được sử dụng");
  }

  const passwordHash = await bcrypt.hash(data.password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      email: data.email,
      passwordHash,
      displayName: data.displayName ?? null,
    },
  });

  const { accessToken, refreshToken } = await createSession(user.id, user.role, userAgent);

  return {
    accessToken,
    refreshToken,
    user: sanitizeUser(user),
  };
}

export async function login(data: z.infer<typeof loginSchema>, userAgent?: string) {
  const message = "Email hoặc mật khẩu không đúng";

  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) {
    throw ApiError.unauthorized(message);
  }

  if (user.status !== "active") {
    throw ApiError.forbidden("Tài khoản của bạn đã bị khóa. Vui lòng liên hệ quản trị viên.");
  }

  if (!user.passwordHash) {
    throw ApiError.unauthorized(
      "Tài khoản này được đăng nhập bằng Google/Facebook. Vui lòng sử dụng phương thức đăng nhập tương ứng.",
    );
  }

  const valid = await bcrypt.compare(data.password, user.passwordHash);
  if (!valid) {
    throw ApiError.unauthorized(message);
  }

  const { accessToken, refreshToken } = await createSession(user.id, user.role, userAgent);

  return {
    accessToken,
    refreshToken,
    user: sanitizeUser(user),
  };
}

export async function refreshToken(tokenString: string) {
  const message = "Refresh token không hợp lệ";

  let payload: { userId: string; role: string; type: string };
  try {
    payload = jwt.verify(tokenString, JWT_SECRET) as typeof payload;
  } catch {
    throw ApiError.unauthorized(message);
  }

  if (payload.type !== "refresh") {
    throw ApiError.unauthorized(message);
  }

  const tokenHash = crypto.createHash("sha256").update(tokenString).digest("hex");
  const tokenRecord = await prisma.refreshToken.findFirst({
    where: {
      tokenHash,
      userId: payload.userId,
    },
  });

  if (!tokenRecord || tokenRecord.expiresAt < new Date()) {
    if (tokenRecord) {
      await prisma.refreshToken.delete({ where: { id: tokenRecord.id } });
    }
    throw ApiError.unauthorized(message);
  }

  const user = await prisma.user.findUnique({ where: { id: payload.userId } });
  if (!user || user.status !== "active") {
    throw ApiError.unauthorized("Tài khoản không tồn tại hoặc đã bị khóa");
  }

  const accessToken = jwt.sign(
    { userId: user.id, role: user.role },
    JWT_SECRET,
    {
      expiresIn: ACCESS_EXPIRES_IN as any,
    },
  );

  return { accessToken };
}

export async function logout(tokenString: string) {
  try {
    const tokenHash = crypto.createHash("sha256").update(tokenString).digest("hex");
    await prisma.refreshToken.deleteMany({
      where: { tokenHash },
    });
  } catch (error) {
    // nếu lỗi hoặc token không tồn tại, bỏ qua vì coi như đã logout
  }
}

