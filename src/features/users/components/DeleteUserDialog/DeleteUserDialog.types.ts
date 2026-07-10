import type { User } from "../../types";

export interface DeleteUserDialogProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
}
