import { apiClient } from "@/lib/apiClient";

import type { LoginFormValues } from "../types/login.types";

export const loginApi = {
  login: async (credentials: LoginFormValues) => {
    const { data } = await apiClient.post("api/auth/login", credentials);
    return data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post("api/auth/logout");
  },

  getCurrentUser: async () => {
    const { data } = await apiClient.get("api/users/me");
    return data.data;
  },
};
