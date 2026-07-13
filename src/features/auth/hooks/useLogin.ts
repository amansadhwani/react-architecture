import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { tokenStorage } from "@/services/auth";

import { authApi } from "../api";
import { authKeys } from "../api/auth.keys";
import { loginOptions } from "../api/login.options";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async (response) => {
      tokenStorage.setAccessToken(response.token);
      await queryClient.invalidateQueries({
        queryKey: authKeys.currentUser(),
      });
    },
  });
}

export function useAuthenticatedUser(enabled = true) {
  return useQuery({
    ...loginOptions.currentUser(),
    enabled,
  });
}
