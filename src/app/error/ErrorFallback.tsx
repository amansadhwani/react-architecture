import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { FallbackProps } from "react-error-boundary";

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: Readonly<FallbackProps>) {
  console.error(error);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: 2,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4">Something went wrong</Typography>

      <Typography color="text.secondary">
        An unexpected error occurred. Please try again later.
      </Typography>

      <Button variant="contained" onClick={resetErrorBoundary}>
        Reload page
      </Button>
    </Box>
  );
}
