export const Permission = {
  DashboardRead: "dashboard.read",

  UsersRead: "users.read",
  UsersCreate: "users.create",
  UsersUpdate: "users.update",
  UsersDelete: "users.delete",

  SystemRead: "system.read",

  Users2Read: "users2.read",
} as const;

export type Permission = (typeof Permission)[keyof typeof Permission];
