import type { RootState } from "@/app/store/store";

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectPermissions = (state: RootState) =>
  state.auth.user?.permissions ?? [];

export const selectFeatureFlag = (state: RootState) =>
  state.auth.user?.featureFlags ?? [];

export const selectRole = (state: RootState) => state.auth.user?.role;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
