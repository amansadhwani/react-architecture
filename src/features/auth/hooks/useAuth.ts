import { useMutation, useQueryClient } from "@tanstack/react-query";

import { loadCurrentUser } from "@/app/auth";
import { useAppDispatch } from "@/app/store/hooks";
import { tokenStorage } from "@/services/auth";

import { authApi } from "../api";

export function useAuth() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async (response) => {
      tokenStorage.setAccessToken(response.accessToken);
      await loadCurrentUser(queryClient, dispatch);
    },
  });
}
