export const Roles = {
  admin: "admin",
  manager: "manager",
  user: "user",
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];
