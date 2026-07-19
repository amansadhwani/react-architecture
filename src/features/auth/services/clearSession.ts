import { queryClient } from "@/app/query/queryClient";
import { tokenStorage } from "@/lib";

export function clearSession(): void {
  tokenStorage.clearAccessToken();
  queryClient.clear();
}
