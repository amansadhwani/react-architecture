import { queryOptions } from "@tanstack/react-query";

import { loginKeys } from "./login.keys";
import { loginApi } from "./loginApi";

export const loginOptions = {
  currentUser: (enabled = true) =>
    queryOptions({
      queryKey: loginKeys.currentUser(),
      queryFn: loginApi.getCurrentUser,
      retry: false,
      enabled,
    }),
};
