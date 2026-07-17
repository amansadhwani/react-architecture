import type { FeatureFlag, Permission, Roles } from "@/access-control";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  userName: string;
  role: typeof Roles;
  permissions: Permission[];
  featureFlags: FeatureFlag[];
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}
