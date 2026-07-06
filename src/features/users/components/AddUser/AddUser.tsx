import { Button } from "@/design-system";

import { useCreateUser, useDeleteUser, useUpdateUser } from "../../hooks";

export function AddUser() {
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();
  const deleteUserMutation = useDeleteUser();

  const onClickAddUser = () => {
    createUserMutation.mutate(
      {
        name: "John",
        email: "john@example.com",
        role: "User",
      },
      {
        onSuccess: () => {
          window.alert("User created successfully!");
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
          window.alert("User updated successfully!");
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
          window.alert("User deleted successfully!");
        },
      },
    );
  };

  return (
    <>
      <Button onClick={onClickAddUser} disabled={createUserMutation.isPending}>
        Add User
      </Button>
      <Button onClick={onClickUpdateUser}>Update User</Button>
      <Button onClick={onClickDeleteUser}>Delete User</Button>
    </>
  );
}
