import { QueryClient } from "@tanstack/react-query";

import type { AppDispatch } from "@/app/store";
import { authOptions } from "@/features/auth/api/auth.options";
import { setCurrentUser } from "@/features/auth/store/auth.slice";

export async function loadCurrentUser(
  queryClient: QueryClient,
  dispatch: AppDispatch,
) {
  const user = await queryClient.fetchQuery(authOptions.currentUser());

  dispatch(setCurrentUser(user));

  return user;
}
