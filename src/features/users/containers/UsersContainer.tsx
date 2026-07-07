import { Alert, Container, Typography } from "@mui/material";

import { useAppTranslation } from "@/app/i18n";

import { AddUser } from "../components/AddUser";
import { UsersSkeleton } from "../components/UsersSkeleton/UsersSkeleton";
import { UsersTable } from "../components/UserTable/UsersTable";
import { useUsers } from "../hooks/useUsers";

export function UsersContainer() {
  const { data, isPending, isError } = useUsers();
  const { t } = useAppTranslation();

  if (isPending) {
    return <UsersSkeleton />;
  }

  if (isError) {
    return <Alert severity="error">Failed to load users.</Alert>;
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        {t("users:title")}
      </Typography>
      <AddUser />
      <UsersTable users={data} />
    </Container>
  );
}
