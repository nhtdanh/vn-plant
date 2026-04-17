/**
 * Chuẩn hóa URL để tránh lỗi lặp lại giao thức (e.g., https://https://)
 */
export function normalizeUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  // Loại bỏ các đoạn giao thức bị lặp lại ở đầu chuỗi
  return url.replace(/^(https?:\/\/)+/i, (match) => {
    return match.toLowerCase().startsWith("https") ? "https://" : "http://";
  });
}
