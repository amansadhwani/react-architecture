import { authApi } from "@/features/auth/api";

import { clearSession } from "./clearSession";

export async function logout(): Promise<void> {
  try {
    await authApi.logout();
  } finally {
    clearSession();
  }
}
