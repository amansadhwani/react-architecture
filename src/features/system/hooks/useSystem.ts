import { useQuery } from "@tanstack/react-query";

import { systemOptions } from "../api/system.options";

export function useSystem() {
  return useQuery(systemOptions.getDashboard());
}
