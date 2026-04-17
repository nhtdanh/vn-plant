import { subDays } from "date-fns";

/**
 * Định dạng ngày tháng hiển thị cho người dùng.
 * Tạm thời lùi lại 2 ngày theo yêu cầu của người dùng.
 * 
 * @param date - Chuỗi ngày hoặc đối tượng Date
 * @returns Chuỗi ngày đã định dạng theo vi-VN
 */
export function formatDate(date: string | Date): string {
  if (!date) return "";
  
  // LOGIC TẠM THỜI: Lùi lại 2 ngày
  const originalDate = new Date(date);
  const offsetDate = subDays(originalDate, 2);
  
  return offsetDate.toLocaleDateString("vi-VN");
}
