import MuiButton from "@mui/material/Button";

import { buttonStyles } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export function Button({
  variant = "primary",
  sx,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <MuiButton
      variant="contained"
      sx={[buttonStyles[variant], ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    />
  );
}
