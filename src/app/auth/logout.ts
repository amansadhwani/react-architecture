import { APP_ROUTES } from "@/app/config";
import { queryClient } from "@/app/query/queryClient";
import { loginApi } from "@/features/login/api";
import { tokenStorage } from "@/services/auth";

export async function logout(): Promise<void> {
  try {
    await loginApi.logout();
  } finally {
    tokenStorage.clearAccessToken();
    queryClient.clear();
    window.location.replace(APP_ROUTES.LOGIN);
  }
}
