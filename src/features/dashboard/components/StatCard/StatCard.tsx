import { Card, CardContent, Typography } from "@mui/material";

import type { StatCardProps } from "./StatCard.types.ts";

export function StatCard({ label, value }: StatCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>

        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
}
