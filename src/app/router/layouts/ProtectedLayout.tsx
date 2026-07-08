import { Navigate, Outlet } from "react-router-dom";

import { APP_ROUTES } from "@/app/config/routes";
import { tokenStorage } from "@/services/auth";

export function ProtectedLayout() {
  const isAuthenticated = Boolean(tokenStorage.getAccessToken());

  if (!isAuthenticated) {
    return <Navigate to={APP_ROUTES.HOME} replace />;
  }

  return <Outlet />;
}
