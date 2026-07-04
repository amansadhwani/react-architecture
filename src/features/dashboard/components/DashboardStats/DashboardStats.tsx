import { Grid } from "@mui/material";

import { StatCard } from "../StatCard";
import type { DashboardStatsProps } from "./DashboardStats.types";

export function DashboardStats({ stats }: Readonly<DashboardStatsProps>) {
  const statCards = [
    {
      label: "Total Users",
      value: stats.total_users.toLocaleString(),
    },
    {
      label: "Active Users",
      value: stats.active_users.toLocaleString(),
    },
    {
      label: "Pending Approvals",
      value: stats.pending_approvals.toLocaleString(),
    },
    {
      label: "Monthly Revenue",
      value: `$${stats.monthly_revenue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      })}`,
    },
  ];

  return (
    <Grid container spacing={2}>
      {statCards.map((card) => (
        <Grid key={card.label} size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
}
