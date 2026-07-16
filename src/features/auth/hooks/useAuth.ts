import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAppDispatch } from "@/app/store/hooks";

import { authApi } from "../api";
import { loadCurrentUser } from "../services";
import { tokenStorage } from "../services/tokenStorage";

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
