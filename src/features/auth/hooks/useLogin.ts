import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAppDispatch } from "@/app/store/hooks";

import { login } from "../services";
import type { LoginFormValues } from "../types";
export function useLogin() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (credentials: LoginFormValues) =>
      login(credentials, queryClient, dispatch),
  });
}
