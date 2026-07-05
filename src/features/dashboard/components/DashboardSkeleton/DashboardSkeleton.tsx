import { Card, CardContent, Skeleton, Stack } from "@mui/material";

export function DashboardSkeleton() {
  return (
    <Stack spacing={3} sx={{ p: 3 }}>
      <Stack direction="row" spacing={2}>
        {[...Array(4)].map((_, index) => (
          <Card key={index} sx={{ flex: 1 }}>
            <CardContent>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" height={40} />
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Card>
        <CardContent>
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="rectangular" height={180} />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="rectangular" height={220} />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="rectangular" height={80} />
        </CardContent>
      </Card>
    </Stack>
  );
}
