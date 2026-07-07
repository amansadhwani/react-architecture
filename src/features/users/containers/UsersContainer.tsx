import { Alert, Container, Typography } from "@mui/material";

import { AddUser } from "../components/AddUser";
import { UsersSkeleton } from "../components/UsersSkeleton/UsersSkeleton";
import { UsersTable } from "../components/UserTable/UsersTable";
import { useUsers } from "../hooks/useUsers";

export function UsersContainer() {
  const { data, isPending, isError } = useUsers();

  if (isPending) {
    return <UsersSkeleton />;
  }

  if (isError) {
    return <Alert severity="error">Failed to load users.</Alert>;
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <AddUser />
      <UsersTable users={data} />
    </Container>
  );
}
