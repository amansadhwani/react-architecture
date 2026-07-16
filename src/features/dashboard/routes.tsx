import type { RouteObject } from "react-router-dom";

import { Permission } from "@/access-control";
import { APP_ROUTES } from "@/app/config";

export const dashboardRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.DASHBOARD,
    handle: {
      permission: Permission.DashboardRead,
    },
    async lazy() {
      const module = await import("./pages/DashboardPage");
      return {
        Component: module.default,
      };
    },
  },
];
