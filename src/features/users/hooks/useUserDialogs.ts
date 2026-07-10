import { useState } from "react";

import type { User } from "../types";

export function useUsersDialogs() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editOpen, setEditOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const onDelete = (user: User) => {
    setSelectedUser(user);
    setDeleteOpen(true);
  };

  const onCloseDelete = () => {
    setDeleteOpen(false);
    setSelectedUser(null);
  };

  const onEdit = (user: User) => {
    setSelectedUser(user);
    setEditOpen(true);
  };

  const onCloseEdit = () => {
    setEditOpen(false);
    setSelectedUser(null);
  };

  return {
    deleteOpen,
    onDelete,
    onCloseDelete,
    selectedUser,
    editOpen,
    onEdit,
    onCloseEdit,
  };
}
