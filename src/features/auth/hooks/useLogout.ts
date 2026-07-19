import { useMutation } from "@tanstack/react-query";

import { useAppDispatch } from "@/app/store";

import { logout } from "../services";
import { clearCurrentUser } from "../store/auth.slice";

export function useLogout() {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      dispatch(clearCurrentUser());
    },
  });
}
