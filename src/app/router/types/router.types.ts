import type { FeatureFlag, Permission } from "@/access-control";

export interface NavigationItem {
  label: string;
  to: string;
  permission?: Permission;
  featureFlag?: FeatureFlag;
}

export interface AppRouteHandle {
  permission?: Permission;
  title?: string;
  breadcrumb?: string;
  featureFlag?: FeatureFlag;
}
