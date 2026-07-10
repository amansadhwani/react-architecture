import { useState } from "react";

import { Button } from "@/design-system";

import { CreateUserDialog } from "../CreateUserDialog";

export function AddUser() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ mb: 2 }}>
        Add User
      </Button>
      <CreateUserDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
