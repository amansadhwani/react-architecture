import type { RouteObject } from "react-router-dom";

import { APP_ROUTES } from "@/app/config";

export const dashboardRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.DASHBOARD,
    async lazy() {
      const module = await import("./pages/DashboardPage");
      return {
        Component: module.default,
      };
    },
  },
];
