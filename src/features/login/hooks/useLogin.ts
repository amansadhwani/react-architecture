import { useMutation } from "@tanstack/react-query";

import { tokenStorage } from "@/services/auth";

import { loginApi } from "../api";

export function useLogin() {
  return useMutation({
    mutationFn: loginApi.login,
    onSuccess: (response) => {
      tokenStorage.setAccessToken(response.token);
    },
  });
}
