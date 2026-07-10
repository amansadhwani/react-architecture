import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import { Button } from "@/design-system";
import { useAppSnackbar } from "@/shared/hooks";

import { useDeleteUser } from "../../hooks";
import type { DeleteUserDialogProps } from "./DeleteUserDialog.types";

export function DeleteUserDialog({
  open,
  onClose,
  user,
}: Readonly<DeleteUserDialogProps>) {
  const snackbar = useAppSnackbar();
  const deleteUser = useDeleteUser();

  const onConfirm = () => {
    if (!user) {
      return;
    }

    deleteUser.mutate(
      { id: user.id },
      {
        onSuccess: () => {
          snackbar.success("User deleted successfully!");
          onClose();
        },
      },
    );
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete User</DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to delete <strong>{user?.name}</strong>?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="danger"
          loading={deleteUser.isPending}
          onClick={onConfirm}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
