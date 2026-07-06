import { Alert, CircularProgress } from "@mui/material";

import { UsersTable } from "../components/UserTable/UsersTable";
import { useUsers } from "../hooks/useUsers";

export function UsersContainer() {
  const { data, isPending, isError } = useUsers();

  if (isPending) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="error">Failed to load users.</Alert>;
  }

  return <UsersTable users={data} />;
}
