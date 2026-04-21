import { subDays } from "date-fns";

// định dạng ngày tháng hiển thị cho người dùng
// tạm thời lùi lại 2 ngày theo yêu cầu của người dùng
// @param date - chuỗi ngày hoặc đối tượng date
// @returns chuỗi ngày đã định dạng theo vi-vn
export function formatDate(date: string | Date): string {
  if (!date) return "";
  
  // logic tạm thời: lùi lại 2 ngày
  const originalDate = new Date(date);
  const offsetDate = subDays(originalDate, 2);
  
  return offsetDate.toLocaleDateString("vi-VN");
}
