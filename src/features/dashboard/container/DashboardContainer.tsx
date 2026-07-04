import { Stack } from "@mui/material";

import { DashboardStats } from "../components/DashboardStats";
import { useDashboard } from "../hooks/useDashboard";

export function DashboardContainer() {
  const { data, isLoading, isError } = useDashboard();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong.</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <Stack spacing={3} sx={{ p: 3 }}>
      <DashboardStats stats={data.stats} />
    </Stack>
  );
}
