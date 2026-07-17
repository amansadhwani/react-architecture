import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { APP_ROUTES } from "@/app/config";

import { logout } from "../services";

export function useLogout() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate(APP_ROUTES.LOGIN, {
        replace: true,
      });
    },
  });
}
