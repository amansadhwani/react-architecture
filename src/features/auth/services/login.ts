import { QueryClient } from "@tanstack/react-query";

import type { AppDispatch } from "@/app/store";
import { tokenStorage } from "@/lib";

import { authApi } from "../api";
import type { LoginFormValues } from "../types/auth.types";
import { loadCurrentUser } from "./loadCurrentUser";

export async function login(
  credentials: LoginFormValues,
  queryClient: QueryClient,
  dispatch: AppDispatch,
) {
  const response = await authApi.login(credentials);

  tokenStorage.setAccessToken(response.accessToken);

  await loadCurrentUser(queryClient, dispatch);

  return response;
}
