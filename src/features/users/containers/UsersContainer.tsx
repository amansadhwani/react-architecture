import { Alert, Container, Typography } from "@mui/material";

import { useAppTranslation } from "@/app/i18n";

import { AddUser } from "../components/AddUser";
import { DeleteUserDialog } from "../components/DeleteUserDialog";
import { EditUserDialog } from "../components/EditUserDialog/EditUserDialog";
import { UsersSkeleton } from "../components/UsersSkeleton/UsersSkeleton";
import { UsersTable } from "../components/UserTable/UsersTable";
import { useUsersDialogs } from "../hooks/useUserDialogs";
import { useUsers } from "../hooks/useUsers";

export function UsersContainer() {
  const { data, isPending, isError } = useUsers();
  const { t } = useAppTranslation();
  const {
    selectedUser,
    editOpen,
    onEdit,
    onCloseEdit,
    deleteOpen,
    onCloseDelete,
    onDelete,
  } = useUsersDialogs();

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

      <UsersTable users={data} onEdit={onEdit} onDelete={onDelete} />
      <EditUserDialog
        open={editOpen}
        user={selectedUser}
        onClose={onCloseEdit}
      />
      <DeleteUserDialog
        open={deleteOpen}
        user={selectedUser}
        onClose={onCloseDelete}
      />
    </Container>
  );
}
