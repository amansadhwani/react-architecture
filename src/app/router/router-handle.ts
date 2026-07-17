import type { FeatureFlag, Permission } from "@/access-control";

export interface AppRouteHandle {
  permission?: Permission;
  title?: string;
  breadcrumb?: string;
  featureFlag?: FeatureFlag;
}
