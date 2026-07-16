import "@/app/i18n";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppProviders } from "@/app/providers/AppProviders";

import { enableMocking } from "./mocks";

await enableMocking();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders />,
  </StrictMode>,
);
