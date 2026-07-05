import { Alert, Button, Stack } from "@mui/material";

import type { ErrorStateProps } from "./ErrorState.types";

export function ErrorState({
  message = "Something went wrong.",
  onRetry,
}: Readonly<ErrorStateProps>) {
  return (
    <Stack spacing={2} sx={{ p: 3 }}>
      <Alert severity="error">{message}</Alert>

      {onRetry && (
        <Button variant="contained" onClick={onRetry}>
          Retry
        </Button>
      )}
    </Stack>
  );
}
