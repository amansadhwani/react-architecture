import { Grid } from "@mui/material";

import { useAppTranslation } from "@/app/i18n";

import { StatCard } from "../StatCard";
import type { DashboardStatsProps } from "./DashboardStats.types";

export function DashboardStats({ stats }: Readonly<DashboardStatsProps>) {
  const { t } = useAppTranslation();
  const statCards = [
    {
      label: t("dashboard:totalUsers"),
      value: stats.total_users.toLocaleString(),
    },
    {
      label: t("dashboard:activeUsers"),
      value: stats.active_users.toLocaleString(),
    },
    {
      label: t("dashboard:pendingApprovals"),
      value: stats.pending_approvals.toLocaleString(),
    },
    {
      label: t("dashboard:monthlyRevenue"),
      value: stats.monthly_revenue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      }),
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
