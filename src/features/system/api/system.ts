import { apiClient } from "@/lib";

import type { SystemResponse } from "../types/system.types";

export const systemApi = {
  getSystem: async () => {
    const { data } = await apiClient.get<SystemResponse>("api/system");
    return data;
  },
};
