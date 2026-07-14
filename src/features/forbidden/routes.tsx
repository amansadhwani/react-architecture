import type { RouteObject } from "react-router-dom";

import { APP_ROUTES } from "@/app/config";

import { ForbiddenPage } from "./pages";

export const forbiddenRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.FORBIDDEN,
    Component: ForbiddenPage,
  },
];
