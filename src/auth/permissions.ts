export const Permission = {
  DashboardRead: "dashboard.read",

  UsersRead: "users.read",
  UsersCreate: "users.create",
  UsersUpdate: "users.update",
  UsersDelete: "users.delete",

  SystemRead: "system.read",
} as const;

export type Permission = (typeof Permission)[keyof typeof Permission];
