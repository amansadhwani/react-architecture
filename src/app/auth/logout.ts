import { APP_ROUTES } from "@/app/config";
import { queryClient } from "@/app/query/queryClient";
import { tokenStorage } from "@/services/auth";

export function logout() {
  tokenStorage.clearAccessToken();

  queryClient.clear();

  window.location.replace(APP_ROUTES.LOGIN);
}
