import type { RouteObject } from "react-router-dom";

import { APP_ROUTES } from "@/app/config";

import LoginPage from "./pages/LoginPage";

export const authRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.LOGIN,
    Component: LoginPage,
  },
];
