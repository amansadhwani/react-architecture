import type { RouteObject } from "react-router-dom";

import { APP_ROUTES } from "@/app/config";
import { Permission } from "@/auth";

export const systemRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.SYSTEM,
    handle: {
      permission: Permission.SystemRead,
    },
    async lazy() {
      const module = await import("./pages/SystemPage");

      return {
        Component: module.default,
      };
    },
  },
];
