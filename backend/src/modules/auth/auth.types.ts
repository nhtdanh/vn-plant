import type { UserRole } from "../user/user.types.js";

export interface AuthPayload {
  userId: string;
  role: UserRole;
}

