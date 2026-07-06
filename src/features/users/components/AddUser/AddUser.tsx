import { Button } from "@/design-system";
import { useAppSnackbar } from "@/shared/hooks";

import { useCreateUser, useDeleteUser, useUpdateUser } from "../../hooks";

export function AddUser() {
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();
  const deleteUserMutation = useDeleteUser();

  const snackbar = useAppSnackbar();

  const onClickAddUser = () => {
    createUserMutation.mutate(
      {
        name: "John",
        email: "john@example.com",
        role: "User",
      },
      {
        onSuccess: () => {
          snackbar.success("User created successfully!");
        },
      },
    );
  };

  const onClickUpdateUser = () => {
    updateUserMutation.mutate(
      {
        id: "1",
        name: "John Updated",
        email: "john.updated@example.com",
        role: "Admin",
      },
      {
        onSuccess: () => {
          snackbar.success("User updated successfully!");
        },
      },
    );
  };

  const onClickDeleteUser = () => {
    deleteUserMutation.mutate(
      {
        id: "1",
      },
      {
        onSuccess: () => {
          snackbar.success("User deleted successfully!");
        },
      },
    );
  };

  return (
    <>
      <Button onClick={onClickAddUser} disabled={createUserMutation.isPending}>
        Add User
      </Button>
      <Button
        onClick={onClickUpdateUser}
        disabled={updateUserMutation.isPending}
      >
        Update User
      </Button>
      <Button
        onClick={onClickDeleteUser}
        disabled={deleteUserMutation.isPending}
      >
        Delete User
      </Button>
    </>
  );
}
