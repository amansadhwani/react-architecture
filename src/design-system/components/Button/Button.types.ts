import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export type ButtonVariant = "primary" | "success" | "danger";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
  variant?: ButtonVariant;
}
