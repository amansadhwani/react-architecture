import { Navigate, Outlet, useMatches } from "react-router";

import { useCan, useFeatureFlag } from "@/access-control";
import { APP_ROUTES } from "@/app/config/routes";
import type { AppRouteHandle } from "@/app/router/router-handle";
import { tokenStorage } from "@/lib";

export function ProtectedLayout() {
  const matches = useMatches();

  const currentRoute = matches.at(-1);

  const permission = (currentRoute?.handle as AppRouteHandle | undefined)
    ?.permission;

  const featureFlag = (currentRoute?.handle as AppRouteHandle | undefined)
    ?.featureFlag;

  const allowed = useCan(permission);
  const isFeatureEnabled = useFeatureFlag(featureFlag);

  if (!tokenStorage.getAccessToken()) {
    return <Navigate to={APP_ROUTES.HOME} replace />;
  }

  if (!isFeatureEnabled) {
    return <Navigate to={APP_ROUTES.FORBIDDEN} replace />;
  }

  if (permission && !allowed) {
    return <Navigate to={APP_ROUTES.FORBIDDEN} replace />;
  }

  return <Outlet />;
}
