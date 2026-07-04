import { createBrowserRouter } from "react-router-dom";

import { dashboardRoutes } from "@/features/dashboard/routes";
import { homeRoutes } from "@/features/home/routes";
import { loginRoutes } from "@/features/login/routes";

import { ProtectedLayout } from "./layouts/ProtectedLayout";
import { PublicLayout } from "./layouts/PublicLayout";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        Component: PublicLayout,
        children: [...loginRoutes, ...homeRoutes],
      },
      {
        Component: ProtectedLayout,
        children: [...dashboardRoutes],
      },
    ],
  },
]);
