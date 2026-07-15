import { useQuery } from "@tanstack/react-query";

import { users2Options } from "../api/users2.options";

export function useUsers2() {
  return useQuery(users2Options());
}
