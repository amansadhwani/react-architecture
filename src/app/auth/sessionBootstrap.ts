import { refreshTokenApi, tokenStorage } from "@/services/auth";

import { clearSession } from "./clearSession";

export async function sessionBootstrap() {
  try {
    const data = await refreshTokenApi.refresh();
    tokenStorage.setAccessToken(data.accessToken);
  } catch (error) {
    console.error(error);
    clearSession();
  }
}
