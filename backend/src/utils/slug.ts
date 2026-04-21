// tạo slug từ tên khoa học hoặc tên tiếng Việt
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // loại bỏ dấu tiếng Việt
    .replace(/[^a-z0-9\s-]/g, "")    // loại bỏ ký tự đặc biệt
    .trim()
    .replace(/\s+/g, "-")            // thay khoảng trắng bằng dấu gạch ngang
    .replace(/-+/g, "-");            // loại bỏ gạch ngang thừa
}
