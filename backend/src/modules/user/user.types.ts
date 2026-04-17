export type UserRole = "admin" | "editor" | "user";

export type UserEntity = {
  id: string;
  email: string;
  displayName: string | null;
  avatarUrl: string | null;
  role: UserRole;
  createdAt: Date;
  passwordHash: string | null;
};

export type UserResponse = Omit<
  UserEntity,
  "passwordHash" | "refreshToken" | "refreshTokenExp"
>;
