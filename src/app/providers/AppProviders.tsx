import { RouterProvider } from "react-router-dom";

import { QueryProvider, ThemeProvider } from "@/app/providers";
import { router } from "@/app/router";

export function AppProviders() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryProvider>
  );
}
