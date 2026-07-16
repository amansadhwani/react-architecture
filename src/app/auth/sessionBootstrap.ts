import { refreshTokenApi, tokenStorage } from "@/services/auth";

import { clearSession } from "./clearSession";

export async function sessionBootstrap(): Promise<boolean> {
  try {
    const data = await refreshTokenApi.refresh();

    if (!data?.accessToken) {
      clearSession();
      return false;
    }

    tokenStorage.setAccessToken(data.accessToken);

    return true;
  } catch (error) {
    console.error(error);

    clearSession();

    return false;
  }
}
