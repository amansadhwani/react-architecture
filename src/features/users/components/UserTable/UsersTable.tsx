import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { useAppTranslation } from "@/app/i18n";
import { Can, Permission } from "@/auth";

import type { UsersTableProps } from "./UsersTable.types";

export function UsersTable({
  users,
  onEdit,
  onDelete,
}: Readonly<UsersTableProps>) {
  const { t } = useAppTranslation();
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t("users:name")}</TableCell>
            <TableCell>{t("users:email")}</TableCell>
            <TableCell>{t("users:role")}</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell align="right">
                <Can permission={Permission.UsersUpdate}>
                  <IconButton onClick={() => onEdit(user)}>
                    <EditIcon />
                  </IconButton>
                </Can>
                <Can permission={Permission.UsersDelete}>
                  <IconButton onClick={() => onDelete(user)}>
                    <DeleteIcon />
                  </IconButton>
                </Can>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
