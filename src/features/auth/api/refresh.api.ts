import { refreshClient } from "@/lib";

import type { RefreshTokenResponse } from "../types";

export const refreshApi = {
  refresh: async (): Promise<RefreshTokenResponse> => {
    const { data } =
      await refreshClient.post<RefreshTokenResponse>("api/auth/refresh");

    return data;
  },
};
