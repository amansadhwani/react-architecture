import type { Permission } from "@/access-control";

export interface AppRouteHandle {
  permission?: Permission;
  title?: string;
  breadcrumb?: string;
  featureFlag?: string;
}
