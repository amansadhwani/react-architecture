import { Navigate, Outlet, useMatches } from "react-router";

import { useCan } from "@/access-control";
import { APP_ROUTES } from "@/app/config/routes";
import type { AppRouteHandle } from "@/app/router/router-handle";
import { tokenStorage } from "@/features/auth/services/tokenStorage";

export function ProtectedLayout() {
  const matches = useMatches();

  const currentRoute = matches.at(-1);

  const permission = (currentRoute?.handle as AppRouteHandle | undefined)
    ?.permission;

  const allowed = useCan(permission);

  if (!tokenStorage.getAccessToken()) {
    return <Navigate to={APP_ROUTES.HOME} replace />;
  }
  if (permission && !allowed) {
    return <Navigate to={APP_ROUTES.FORBIDDEN} replace />;
  }

  return <Outlet />;
}
