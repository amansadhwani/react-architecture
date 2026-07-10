import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/design-system";
import { useAppSnackbar } from "@/shared/hooks";

import { useUpdateUser } from "../../hooks";
import { type UserFormValues, userSchema } from "../../schemas/user.schema";
import { UserForm } from "../UserForm";
import type { EditUserDialogProps } from "./EditUserDialog.types";

export function EditUserDialog({
  open,
  onClose,
  user,
}: Readonly<EditUserDialogProps>) {
  const snackbar = useAppSnackbar();
  const updateUser = useUpdateUser();

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "User",
    },
  });

  const onSubmit = (data: UserFormValues) => {
    if (!user) {
      return;
    }

    updateUser.mutate(
      {
        id: user.id,
        ...data,
      },
      {
        onSuccess: () => {
          snackbar.success("User updated successfully!");
          onClose();
        },
      },
    );
  };

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    }
  }, [user, form]);
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ pt: 1 }}>
          <UserForm form={form} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}> Cancel</Button>

        <Button
          onClick={form.handleSubmit(onSubmit)}
          loading={updateUser.isPending}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
