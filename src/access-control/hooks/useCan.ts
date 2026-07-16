import { useAppSelector } from "@/app/store";
import { selectCurrentUser } from "@/features/auth/store/auth.selectors";

import type { Permission } from "../permissions";

export function useCan(permission?: Permission) {
  const user = useAppSelector(selectCurrentUser);

  if (!permission) {
    return true;
  }

  return user?.permissions?.includes(permission) ?? false;
}
