import { useQuery } from "@tanstack/react-query";

import { usersOptions } from "../api/users.options";

export function useUsers() {
  return useQuery(usersOptions());
}
