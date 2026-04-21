function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} environment variable is required.`);
  return value;
}

// chuyển đổi định dạng thời gian (ví dụ: '15m', '7d') thành mili giây
export function getDurationMs(duration: string): number {
  const units: { [key: string]: number } = {
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
  };

  const regex = /^(\d+)([smhd])$/;
  const match = duration.match(regex);

  if (!match) {
    // nếu không khớp regex, mặc định trả về số (nếu là số) hoặc 0
    const value = parseInt(duration);
    return isNaN(value) ? 0 : value;
  }

  const value = parseInt(match[1] as string);
  const unit = match[2] as string;

  return value * (units[unit] || 0);
}

export const JWT_SECRET = getEnv("JWT_SECRET");
export const ACCESS_EXPIRES_IN = process.env["JWT_ACCESS_EXPIRES_IN"] ?? "15m";
export const REFRESH_EXPIRES_IN = process.env["JWT_REFRESH_EXPIRES_IN"] ?? "7d";
export const SALT_ROUNDS = 10;
