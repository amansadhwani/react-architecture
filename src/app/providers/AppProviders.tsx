import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { ErrorBoundary } from "@/app/error";
import {
  AppSnackbarProvider,
  QueryProvider,
  ThemeProvider,
} from "@/app/providers";
import { router } from "@/app/router";
import { store } from "@/app/store/store";

import { AppAuthProvider } from "./AppAuthProvider";

export function AppProviders() {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <Provider store={store}>
          <ThemeProvider>
            <AppAuthProvider>
              <AppSnackbarProvider>
                <RouterProvider router={router} />
              </AppSnackbarProvider>
            </AppAuthProvider>
          </ThemeProvider>
        </Provider>
      </QueryProvider>
    </ErrorBoundary>
  );
}
