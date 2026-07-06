import { loginApi } from "@/features/login/api";

import { clearSession } from "./clearSession";

export async function logout(): Promise<void> {
  try {
    await loginApi.logout();
  } finally {
    clearSession();
  }
}
