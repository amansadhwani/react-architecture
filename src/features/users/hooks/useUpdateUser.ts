import { useMutation, useQueryClient } from "@tanstack/react-query";

import { usersKeys } from "../api/users.keys";
import { updateUser } from "../api/users.mutations";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: usersKeys.all,
      });
    },
  });
}
