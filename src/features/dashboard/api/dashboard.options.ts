import { queryOptions } from "@tanstack/react-query";

import { dashboardApi } from "./dashboard.api";
import { dashboardKeys } from "./dashboard.keys";

export const dashboardOptions = {
  getDashboard: () =>
    queryOptions({
      queryKey: dashboardKeys.all,
      queryFn: dashboardApi.getDashboard,
    }),
};
