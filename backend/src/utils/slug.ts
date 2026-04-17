/**
 * Tạo slug từ tên khoa học hoặc tên tiếng Việt
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu tiếng Việt
    .replace(/[^a-z0-9\s-]/g, "")    // Loại bỏ ký tự đặc biệt
    .trim()
    .replace(/\s+/g, "-")            // Thay khoảng trắng bằng dấu gạch ngang
    .replace(/-+/g, "-");            // Loại bỏ gạch ngang thừa
}
