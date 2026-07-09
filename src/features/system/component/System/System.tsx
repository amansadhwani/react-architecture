import { Chip, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import type { SystemProps } from "../../types/system.types";

export function System({ systemInfo }: Readonly<SystemProps>) {
  const { t } = useTranslation("system");

  const fields = [
    {
      label: t("applicationName"),
      value: systemInfo.applicationName,
    },
    {
      label: t("companyName"),
      value: systemInfo.companyName,
    },
    {
      label: t("applicationVersion"),
      value: systemInfo.applicationVersion,
    },
    {
      label: t("backendVersion"),
      value: systemInfo.backendVersion,
    },
    {
      label: t("environment"),
      value: systemInfo.environment,
    },
    {
      label: t("buildNumber"),
      value: systemInfo.buildNumber,
    },
    {
      label: t("releaseDate"),
      value: systemInfo.releaseDate,
    },
    {
      label: t("supportEmail"),
      value: systemInfo.supportEmail,
    },
  ];

  return (
    <Grid container spacing={3}>
      {fields.map(({ label, value }) => (
        <Grid key={label} size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle2">{label}</Typography>
          <Typography>{value}</Typography>
        </Grid>
      ))}

      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="subtitle2">{t("apiStatus")}</Typography>

        <Chip color="success" label={t(systemInfo.apiStatus.toLowerCase())} />
      </Grid>
    </Grid>
  );
}
