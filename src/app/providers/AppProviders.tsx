import { RouterProvider } from "react-router-dom";

import { QueryProvider, ThemeProvider } from "@/app/providers";
import { router } from "@/app/router";

import { AppAuthProvider } from "./AppAuthProvider";

export function AppProviders() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AppAuthProvider>
          <RouterProvider router={router} />
        </AppAuthProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
