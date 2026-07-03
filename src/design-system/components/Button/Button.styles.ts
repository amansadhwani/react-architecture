import type { SxProps, Theme } from "@mui/material/styles";

import type { ButtonVariant } from "./Button.types";

export const buttonStyles: Record<ButtonVariant, SxProps<Theme>> = {
  primary: {
    bgcolor: "primary.main",
    color: "primary.contrastText",

    "&:hover": {
      bgcolor: "primary.dark",
    },
  },

  success: {
    bgcolor: "success.main",
    color: "success.contrastText",

    "&:hover": {
      bgcolor: "success.dark",
    },
  },

  danger: {
    bgcolor: "error.main",
    color: "error.contrastText",

    "&:hover": {
      bgcolor: "error.dark",
    },
  },
};
