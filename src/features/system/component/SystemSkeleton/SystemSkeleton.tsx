import {
  Card,
  CardContent,
  Divider,
  Grid,
  Skeleton,
  Stack,
} from "@mui/material";

export default function SystemSkeleton() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <Skeleton variant="text" width={180} height={42} />

          <Skeleton variant="text" width="60%" />

          <Divider />

          <Grid container spacing={3}>
            {Array.from({ length: 9 }).map((_, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Skeleton variant="text" width={120} height={20} />
                  <Skeleton variant="text" width="75%" height={28} />
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
}
