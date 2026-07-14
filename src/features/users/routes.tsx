import type { RouteObject } from "react-router-dom";

import { APP_ROUTES } from "@/app/config";
import { Permission } from "@/auth";

export const usersRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.USERS,
    handle: {
      permission: Permission.UsersRead,
    },
    async lazy() {
      const module = await import("./pages/UsersPage");

      return {
        Component: module.UsersPage,
      };
    },
  },
];
