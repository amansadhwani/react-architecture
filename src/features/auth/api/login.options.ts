import { queryOptions } from "@tanstack/react-query";

import { authKeys } from "./auth.keys";
import { authApi } from "./authApi";

export const loginOptions = {
  currentUser: (enabled = true) =>
    queryOptions({
      queryKey: authKeys.currentUser(),
      queryFn: authApi.getCurrentUser,
      retry: false,
      enabled,
    }),
};
