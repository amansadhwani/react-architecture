import { createBrowserRouter } from "react-router-dom";

import { homeRoutes } from "@/features/home/routes";
import { loginRoutes } from "@/features/login/routes";

import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [...homeRoutes, ...loginRoutes],
  },
]);
