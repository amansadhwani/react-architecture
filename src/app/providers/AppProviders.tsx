import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/app/providers";
import { router } from "@/app/router";

export function AppProviders() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
