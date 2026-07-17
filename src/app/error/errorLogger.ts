/* eslint-disable no-console */
// app/error/errorLogger.ts

export interface ErrorContext {
  componentStack?: string | undefined;
}

export function logError(error: Error, context?: ErrorContext): void {
  if (import.meta.env.DEV) {
    console.group("Unhandled Application Error");

    console.error(error);

    if (context) {
      console.info(context);
    }

    console.groupEnd();
  }

  // Future integrations:
  // Sentry.captureException(...)
  // appInsights.trackException(...)
}
