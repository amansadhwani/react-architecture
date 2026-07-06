import { useMutation, useQueryClient } from "@tanstack/react-query";

import { usersKeys } from "../api/users.keys";
import { createUser } from "../api/users.mutations";

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: usersKeys.all,
      });
    },
  });
}
