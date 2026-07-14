import type { Permission } from "@/auth";

export interface AppRouteHandle {
  permission?: Permission;
  title?: string;
  breadcrumb?: string;
  featureFlag?: string;
}
