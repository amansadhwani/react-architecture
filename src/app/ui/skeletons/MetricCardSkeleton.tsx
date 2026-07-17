import { Card, CardContent, Skeleton } from "@mui/material";

export function MetricCardSkeleton() {
  return (
    <Card sx={{ flex: 1 }}>
      <CardContent>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" height={40} />
      </CardContent>
    </Card>
  );
}
