import { useState } from "react";

import { Can, Permission } from "@/auth";
import { Button } from "@/design-system";

import { CreateUserDialog } from "../CreateUserDialog";

export function AddUser() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Can permission={Permission.UsersCreate}>
        <Button onClick={() => setOpen(true)} sx={{ mb: 2 }}>
          Add User
        </Button>
      </Can>

      <CreateUserDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
