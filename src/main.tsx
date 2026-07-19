import "@/app/i18n";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppProviders } from "@/app/providers/AppProviders";

import { registerSessionInterceptor } from "./app/session";
import { enableMocking } from "./mocks";

await enableMocking();

registerSessionInterceptor();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders />,
  </StrictMode>,
);
