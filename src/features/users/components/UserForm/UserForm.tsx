import { MenuItem, Stack, TextField } from "@mui/material";
import { Controller } from "react-hook-form"; // we can use default values prop itself but since we have edit we have to use this

import type { UserFormProps } from "./UserForm.types";

export function UserForm({ form }: Readonly<UserFormProps>) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <Stack spacing={2}>
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
        fullWidth
      />

      <TextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
      />

      <Controller
        name="role"
        control={form.control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Role"
            fullWidth
            error={!!errors.role}
            helperText={errors.role?.message}
          >
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="User">User</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
          </TextField>
        )}
      />
    </Stack>
  );
}
