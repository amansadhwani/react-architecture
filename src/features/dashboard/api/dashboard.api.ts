import { apiClient } from "@/lib/apiClient";

import type { DashboardResponse } from "../types/dashboard.types";

export const dashboardApi = {
  getDashboard: async (): Promise<DashboardResponse> => {
    const { data } = await apiClient.get<DashboardResponse>("api/dashboard");
    return data;
  },
};
