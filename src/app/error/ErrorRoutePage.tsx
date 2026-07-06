import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorRoutePage() {
  const error = useRouteError();

  if (import.meta.env.DEV && error instanceof Error) {
    throw error;
  }

  let title = "Something went wrong";
  let message = "An unexpected error occurred. Please try again later.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;

    if (error.status === 404) {
      message = "The page you're looking for doesn't exist.";
    } else {
      message = "We couldn't complete your request.";
    }
  } else {
    console.error(error);

    // Future:
    // Sentry.captureException(error);
  }

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
      <Typography variant="h4">{title}</Typography>

      <Typography color="text.secondary">{message}</Typography>

      <Button variant="contained" onClick={() => window.location.assign("/")}>
        Go Home
      </Button>
    </Box>
  );
}
