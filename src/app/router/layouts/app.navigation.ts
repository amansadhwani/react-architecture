import { FeatureFlags, Permission } from "@/access-control";
import { APP_ROUTES } from "@/app/config/routes";

import type { NavigationItem } from "../types";

export const appNavigation: NavigationItem[] = [
  {
    label: "dashboard:title",
    to: APP_ROUTES.DASHBOARD,
    permission: Permission.DashboardRead,
  },
  {
    label: "users:title",
    to: APP_ROUTES.USERS,
    permission: Permission.UsersRead,
  },
  {
    label: "users:title2",
    to: APP_ROUTES.USERS2,
    permission: Permission.Users2Read,
    featureFlag: FeatureFlags.usersV2,
  },
  {
    label: "system:title",
    to: APP_ROUTES.SYSTEM,
    permission: Permission.SystemRead,
  },
];
