import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { hydrateAuth } from "@/app/auth";
import { useAppDispatch } from "@/app/store/hooks";
import { tokenStorage } from "@/services/auth";

import { authApi } from "../api";
import { authOptions } from "../api/auth.options";

export function useAuth() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async (response) => {
      tokenStorage.setAccessToken(response.accessToken);
      await hydrateAuth(queryClient, dispatch);
    },
  });
}

export function useAuthenticatedUser(enabled = true) {
  return useQuery({
    ...authOptions.currentUser(),
    enabled,
  });
}
