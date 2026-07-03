import { apiClient } from "@/lib/axios";

import type { LoginFormValues } from "../types/login.types";

export const loginApi = {
  login: async (credentials: LoginFormValues) => {
    const { data } = await apiClient.post("api/auth/login", credentials);
    return data;
  },
};
