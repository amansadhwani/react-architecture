import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";

import type { SystemStatusProps } from "./SystemStatus.types";

export function SystemStatus({ status }: Readonly<SystemStatusProps>) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          System Status
        </Typography>

        <Stack direction="row" spacing={2}>
          <Chip label={`API: ${status.api}`} color="success" />
          <Chip label={`Database: ${status.database}`} color="warning" />
          <Chip label={`Cache: ${status.cache}`} color="error" />
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Last updated: {new Date(status.last_updated).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
