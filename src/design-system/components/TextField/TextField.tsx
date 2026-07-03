import MuiTextField from "@mui/material/TextField";

import type { TextFieldProps } from "./TextField.types.ts";

export function TextField(props: Readonly<TextFieldProps>) {
  return <MuiTextField {...props} />;
}
