import { useNavigate } from "react-router-dom";

import { APP_ROUTES } from "@/app/config";
import { useAppSnackbar } from "@/shared/hooks";

import { LoginForm } from "../components/LoginForm";
import { useLogin } from "../hooks";
import type { LoginFormValues } from "../types/auth.types";

export function LoginContainer() {
  const loginMutation = useLogin();
  const navigate = useNavigate();
  const snackbar = useAppSnackbar();

  const handleSubmit = (credentials: LoginFormValues) => {
    loginMutation.mutate(credentials, {
      onSuccess: () => {
        navigate(APP_ROUTES.DASHBOARD, {
          replace: true,
        });
      },

      onError: (error) => {
        snackbar.error(
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        );
      },
    });
  };
  return (
    <LoginForm onSubmit={handleSubmit} isLoading={loginMutation.isPending} />
  );
}
