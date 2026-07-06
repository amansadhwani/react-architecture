import { SnackbarProvider } from "notistack";
import type { PropsWithChildren } from "react";

export function AppSnackbarProvider({ children }: Readonly<PropsWithChildren>) {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      preventDuplicate
    >
      {children}
    </SnackbarProvider>
  );
}
