import { APP_ROUTES } from "@/app/config";
import { queryClient } from "@/app/query/queryClient";
import { tokenStorage } from "@/services/auth";

export function clearSession(): void {
  tokenStorage.clearAccessToken();
  queryClient.clear();

  if (window.location.pathname !== APP_ROUTES.LOGIN) {
    window.location.replace(APP_ROUTES.LOGIN);
  }
}
