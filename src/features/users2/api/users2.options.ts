import { queryOptions } from "@tanstack/react-query";

import { getUsersList } from "./users2.api";
import { usersKeys } from "./users2.keys";

export function users2Options() {
  return queryOptions({
    queryKey: usersKeys.all,
    queryFn: getUsersList,
  });
}
