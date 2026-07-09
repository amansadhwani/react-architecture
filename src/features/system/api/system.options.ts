import { queryOptions } from "@tanstack/react-query";

import { systemApi } from "./system";
import { systemKeys } from "./system.keys";

export const systemOptions = {
  getDashboard: () =>
    queryOptions({
      queryKey: systemKeys.all,
      queryFn: systemApi.getSystem,
    }),
};
