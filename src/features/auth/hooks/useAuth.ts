import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useAppDispatch } from "@/app/store";
import { tokenStorage } from "@/services/auth";

import { authApi } from "../api";
import { authKeys } from "../api/auth.keys";
import { authOptions } from "../api/auth.options";
import { setCurrentUser } from "../store/auth.slice";

export function useAuth() {
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
  const dispatch = useAppDispatch();

  return useQuery({
    ...authOptions.currentUser(),
    enabled,
    select: (user) => {
      dispatch(setCurrentUser(user));
      return user;
    },
  });
}
