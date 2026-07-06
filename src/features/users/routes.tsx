import type { RouteObject } from "react-router-dom";

import { APP_ROUTES } from "@/app/config";

export const usersRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.USERS,
    async lazy() {
      const module = await import("./pages/UsersPage");

      return {
        Component: module.UsersPage,
      };
    },
  },
];
