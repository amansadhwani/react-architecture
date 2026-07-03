import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

import { theme } from "@/design-system/theme";

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Readonly<Props>) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
