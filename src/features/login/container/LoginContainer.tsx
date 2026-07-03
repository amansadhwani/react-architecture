import { useNavigate } from "react-router-dom";

import { APP_ROUTES } from "@/app/config";

import { LoginForm } from "../components/LoginForm";
import { useLogin } from "../hooks";
import type { LoginFormValues } from "../types/login.types";

export function LoginContainer() {
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (credentials: LoginFormValues) => {
    loginMutation.mutate(credentials, {
      onSuccess: () => {
        navigate(APP_ROUTES.DASHBOARD);
      },
    });
  };
  return (
    <LoginForm onSubmit={handleSubmit} isLoading={loginMutation.isPending} />
  );
}
