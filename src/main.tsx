import "@/app/i18n";

import { createRoot } from "react-dom/client";

import { AppProviders } from "@/app/providers/AppProviders";
import { enableMocking } from "@/mocks/enableMocking";

await enableMocking();

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AppProviders />,
  // </StrictMode>,
);
