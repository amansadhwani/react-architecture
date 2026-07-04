import { apiClient } from "@/lib/apiClient";

import type { Dashboard, DashboardResponse } from "../types/dashboard.types";

export const dashboardApi = {
  getDashboard: async (): Promise<Dashboard> => {
    const { data } = await apiClient.get<DashboardResponse>("api/dashboard");
    return data.data;
  },
};
