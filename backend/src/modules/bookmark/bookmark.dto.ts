import { z } from "zod";
import { paginationQuerySchema } from "../../common/pagination.dto";

export const addBookmarkSchema = z.object({
  taxonId: z.number().int().positive("ID thực vật không hợp lệ"),
});

export const listBookmarksQuerySchema = paginationQuerySchema;

export type AddBookmarkInput = z.infer<typeof addBookmarkSchema>;
export type ListBookmarksQuery = z.infer<typeof listBookmarksQuerySchema>;
