import { QueryClient } from "@tanstack/react-query";

import type { AppDispatch } from "@/app/store";
import { refreshTokenApi, tokenStorage } from "@/services/auth";

import { clearSession } from "./clearSession";
import { hydrateAuth } from "./hydrateAuth";

export async function initializeAuth(
  queryClient: QueryClient,
  dispatch: AppDispatch,
): Promise<boolean> {
  try {
    const response = await refreshTokenApi.refresh();

    if (!response?.accessToken) {
      clearSession();
      return false;
    }

    tokenStorage.setAccessToken(response.accessToken);

    await hydrateAuth(queryClient, dispatch);

    return true;
  } catch (error) {
    console.error(error);

    clearSession();

    return false;
  }
}
