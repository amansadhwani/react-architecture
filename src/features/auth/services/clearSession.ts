import { queryClient } from "@/app/query/queryClient";

import { tokenStorage } from "./tokenStorage";

export function clearSession(): void {
  tokenStorage.clearAccessToken();
  queryClient.clear();
}
