import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/app/query";

interface QueryProviderProps {
  children: React.ReactNode;
}

export function QueryProvider({ children }: Readonly<QueryProviderProps>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
