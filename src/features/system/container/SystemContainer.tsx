import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { System } from "../component/System";
import SystemSkeleton from "../component/SystemSkeleton/SystemSkeleton";
import { useSystem } from "../hooks/useSystem";

export function SystemContainer() {
  const { t } = useTranslation("system");
  const { data, isLoading } = useSystem();

  if (isLoading) {
    return <SystemSkeleton />;
  }
  if (!data) {
    return null;
  }
  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <Typography variant="h4">{t("title")}</Typography>
          <Typography color="text.secondary">{t("description")}</Typography>
          <Divider />
          <System systemInfo={data} />
        </Stack>
      </CardContent>
    </Card>
  );
}
