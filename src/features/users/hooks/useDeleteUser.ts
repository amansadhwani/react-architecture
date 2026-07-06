import { useMutation, useQueryClient } from "@tanstack/react-query";

import { usersKeys } from "../api/users.keys";
import { deleteUser } from "../api/users.mutations";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: usersKeys.all,
      });
    },
  });
}
