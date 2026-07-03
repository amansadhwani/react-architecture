import type { RouteObject } from "react-router-dom";

import { APP_ROUTES } from "@/app/router";

import LoginPage from "./pages/LoginPage";

export const loginRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.LOGIN,
    Component: LoginPage,
  },
];
