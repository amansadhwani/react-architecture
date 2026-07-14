import { Navigate } from "react-router-dom";

import { APP_ROUTES } from "@/app/config/routes";
import { useCan } from "@/auth";

import type { Permission } from "../permissions";

interface PermissionGuardProps {
  permission: Permission;
  children: React.ReactNode;
}

export function PermissionGuard({
  permission,
  children,
}: Readonly<PermissionGuardProps>) {
  const allowed = useCan(permission);

  if (!allowed) {
    return <Navigate to={APP_ROUTES.FORBIDDEN} replace />;
  }

  return <>{children}</>;
}
