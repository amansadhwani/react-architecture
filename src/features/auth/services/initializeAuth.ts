import { QueryClient } from "@tanstack/react-query";

import type { AppDispatch } from "@/app/store";
import { tokenStorage } from "@/lib";

import { refreshApi } from "../api";
import { clearSession } from "./clearSession";
import { loadCurrentUser } from "./loadCurrentUser";

export async function initializeAuth(
  queryClient: QueryClient,
  dispatch: AppDispatch,
): Promise<boolean> {
  try {
    const response = await refreshApi.refresh();

    if (!response?.accessToken) {
      clearSession();
      return false;
    }

    tokenStorage.setAccessToken(response.accessToken);

    await loadCurrentUser(queryClient, dispatch);

    return true;
  } catch (error) {
    console.error(error);

    clearSession();

    return false;
  }
}
