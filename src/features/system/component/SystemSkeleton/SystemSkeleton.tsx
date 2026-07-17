import {
  Card,
  CardContent,
  Divider,
  Grid,
  Skeleton,
  Stack,
} from "@mui/material";

import { LabelValueSkeleton } from "@/app/ui/skeletons";

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
                <LabelValueSkeleton />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
}
