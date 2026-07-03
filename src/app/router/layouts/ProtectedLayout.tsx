import { Navigate, Outlet } from "react-router-dom";

import { APP_ROUTES } from "@/app/config/routes";

export function ProtectedLayout() {
  // Temporary until we build auth/session management
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to={APP_ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
}
