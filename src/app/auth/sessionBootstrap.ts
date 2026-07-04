import { logout } from "@/app/auth/logout";
import { refreshTokenApi, tokenStorage } from "@/services/auth";

export async function sessionBootstrap() {
  try {
    const data = await refreshTokenApi.refresh();

    tokenStorage.setAccessToken(data.accessToken);
    // Later:
    // sessionStorage.setUser(data.user);
  } catch {
    logout();
  }
}
