import { queryOptions } from "@tanstack/react-query";

import { getUsers } from "./users.api";
import { usersKeys } from "./users.keys";

export function usersOptions() {
  return queryOptions({
    queryKey: usersKeys.all,
    queryFn: getUsers,
  });
}
