import type { ReactNode } from "react";

import type { FeatureFlag } from "../feature.flags";
import { useCan, useFeatureFlag } from "../hooks";
import type { Permission } from "../permissions";

interface CanProps {
  permission?: Permission;
  featureFlag?: FeatureFlag | undefined;
  children: ReactNode;
  fallback?: ReactNode;
}

export function Can({
  permission,
  featureFlag,
  children,
  fallback = null,
}: CanProps) {
  const hasPermission = useCan(permission);
  const hasFeatureFlag = useFeatureFlag(featureFlag);

  return hasPermission && hasFeatureFlag ? <>{children}</> : <>{fallback}</>;
}
