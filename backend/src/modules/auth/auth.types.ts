import type { UserRole } from "../user/user.types";

export interface AuthPayload {
  userId: string;
  role: UserRole;
}
