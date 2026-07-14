import type { ReactNode } from "react";

import { useCan } from "../hooks/useCan";
import { Permission } from "../permissions";

interface CanProps {
  permission: Permission;
  children: ReactNode;
  fallback?: ReactNode;
}

export function Can({ permission, children, fallback = null }: CanProps) {
  const allowed = useCan(permission);

  return allowed ? <>{children}</> : <>{fallback}</>;
}
