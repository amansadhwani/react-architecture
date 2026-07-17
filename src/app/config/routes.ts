export const PUBLIC_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
} as const;

export const PROTECTED_ROUTES = {
  DASHBOARD: "/dashboard",
  USERS: "/users",
  USERS2: "/users2",
  SYSTEM: "/system",
} as const;

export const APP_ROUTES = {
  ...PUBLIC_ROUTES,
  ...PROTECTED_ROUTES,
  FORBIDDEN: "/forbidden",
} as const;
