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

import { useCreateUser } from "../../hooks";
import { type UserFormValues, userSchema } from "../../schemas/user.schema";
import { UserForm } from "../UserForm";
import type { CreateUserDialogProps } from "./CreateUserDialog.types";

export function CreateUserDialog({
  open,
  onClose,
}: Readonly<CreateUserDialogProps>) {
  const snackbar = useAppSnackbar();
  const createUser = useCreateUser();

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "User",
    },
  });

  const onSubmit = (data: UserFormValues) => {
    createUser.mutate(data, {
      onSuccess: () => {
        snackbar.success("User created successfully!");
        form.reset();
        onClose();
      },
    });
  };

  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open, form]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Create User</DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ pt: 1 }}>
          <UserForm form={form} />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}> Cancel</Button>

        <Button
          onClick={form.handleSubmit(onSubmit)}
          loading={createUser.isPending}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
