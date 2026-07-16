import type { RouteObject } from "react-router-dom";

import { Permission } from "@/access-control";
import { APP_ROUTES } from "@/app/config";

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
