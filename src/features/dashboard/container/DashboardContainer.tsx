import { Grid, Stack, Typography } from "@mui/material";

import { useAppSelector } from "@/app/store";
import { selectCurrentUser } from "@/features/auth/store/auth.selectors";

import {
  DashboardSkeleton,
  DashboardStats,
  ErrorState,
  RecentActivities,
  RecentOrders,
  SystemStatus,
} from "../components";
import { useDashboard } from "../hooks/useDashboard";

export function DashboardContainer() {
  const { data, isLoading, isError, refetch } = useDashboard();

  const user = useAppSelector(selectCurrentUser);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (isError) {
    return <ErrorState onRetry={refetch} />;
  }

  if (!data) {
    return null;
  }

  return (
    <Stack spacing={3} sx={{ p: 3 }}>
      <Typography variant="h4">Welcome {user?.name}</Typography>
      <DashboardStats stats={data.stats} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <RecentActivities activities={data.recent_activities} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <SystemStatus status={data.system_status} />
        </Grid>

        <Grid size={12}>
          <RecentOrders orders={data.recent_orders} />
        </Grid>
      </Grid>
    </Stack>
  );
}
