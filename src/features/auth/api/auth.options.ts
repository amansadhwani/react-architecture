import { queryOptions } from "@tanstack/react-query";

import { authApi } from "./auth.api";
import { authKeys } from "./auth.keys";

export const authOptions = {
  currentUser: () =>
    queryOptions({
      queryKey: authKeys.currentUser(),
      queryFn: authApi.getCurrentUser,
      retry: false,
    }),
};
