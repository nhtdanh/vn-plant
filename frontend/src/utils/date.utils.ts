// định dạng ngày tháng hiển thị cho người dùng
// @param date - chuỗi ngày hoặc đối tượng date
// @returns chuỗi ngày đã định dạng theo vi-vn
export function formatDate(date: string | Date): string {
  if (!date) return "";
  
  const originalDate = new Date(date);
  
  return originalDate.toLocaleDateString("vi-VN");
}
