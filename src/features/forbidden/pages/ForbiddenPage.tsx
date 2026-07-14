import { Box, Typography } from "@mui/material";

export function ForbiddenPage() {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 8,
      }}
    >
      <Typography variant="h3">403</Typography>

      <Typography variant="h5">
        You don't have permission to access this page.
      </Typography>
    </Box>
  );
}
