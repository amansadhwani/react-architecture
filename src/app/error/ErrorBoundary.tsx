import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "./ErrorFallback";
import { logError } from "./errorLogger";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export function ErrorBoundary({ children }: Readonly<ErrorBoundaryProps>) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        if (error instanceof Error) {
          logError(error, {
            componentStack: info.componentStack ?? undefined,
          });
        }
      }}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
