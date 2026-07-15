import "@/app/i18n";

import { createRoot } from "react-dom/client";

import { AppProviders } from "@/app/providers/AppProviders";

// await enableMocking();

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AppProviders />,
  // </StrictMode>,
);
