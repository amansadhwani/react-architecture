// EditUserDialog.types.ts

import type { User } from "../../types";

export interface EditUserDialogProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
}
