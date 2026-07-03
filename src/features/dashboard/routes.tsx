import type { RouteObject } from "react-router-dom";

import { APP_ROUTES } from "@/app/config";

import DashboardPage from "./pages/DashboardPage";

export const dashboardRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.DASHBOARD,
    Component: DashboardPage,
  },
];
