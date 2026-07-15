import { createBrowserRouter } from "react-router-dom";

import { authRoutes } from "@/features/auth/routes";
import { dashboardRoutes } from "@/features/dashboard/routes";
import { forbiddenRoutes } from "@/features/forbidden/routes";
import { homeRoutes } from "@/features/home/routes";
import { systemRoutes } from "@/features/system/routes";
import { usersRoutes } from "@/features/users/routes";
import { users2Routes } from "@/features/users2/routes";

import { ErrorRoutePage } from "../error";
import { AppLayout } from "./layouts/AppLayout";
import { ProtectedLayout } from "./layouts/ProtectedLayout";
import { PublicLayout } from "./layouts/PublicLayout";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorRoutePage />,
    children: [
      {
        Component: PublicLayout,
        children: [...authRoutes, ...homeRoutes, ...forbiddenRoutes],
      },
      {
        Component: ProtectedLayout,
        children: [
          {
            Component: AppLayout,
            children: [
              ...dashboardRoutes,
              ...usersRoutes,
              ...systemRoutes,
              ...users2Routes,
            ],
          },
        ],
      },
    ],
  },
]);
