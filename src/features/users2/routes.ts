import type { RouteObject } from "react-router-dom";

import { Permission } from "@/access-control";
import { APP_ROUTES } from "@/app/config";

export const users2Routes: RouteObject[] = [
  {
    path: APP_ROUTES.USERS2,
    handle: {
      permission: Permission.Users2Read,
    },
    async lazy() {
      const module = await import("./pages/Users2Page");

      return {
        Component: module.Users2Page,
      };
    },
  },
];
