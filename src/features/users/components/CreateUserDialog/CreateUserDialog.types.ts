import type { DialogProps } from "@mui/material";

export interface CreateUserDialogProps {
  open: DialogProps["open"];
  onClose: () => void;
}
