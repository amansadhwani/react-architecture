import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { tokenStorage } from "@/services/auth";

import { loginApi } from "../api";
import { loginKeys } from "../api/login.keys";
import { loginOptions } from "../api/login.options";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginApi.login,
    onSuccess: async (response) => {
      tokenStorage.setAccessToken(response.token);
      await queryClient.invalidateQueries({
        queryKey: loginKeys.currentUser(),
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
