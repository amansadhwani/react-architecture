import { useQuery } from "@tanstack/react-query";

import { dashboardOptions } from "../api/dashboard.options";

export function useDashboard() {
  return useQuery(dashboardOptions.getDashboard());
}
