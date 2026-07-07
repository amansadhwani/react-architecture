import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { useAppTranslation } from "@/app/i18n";

import type { UsersTableProps } from "./UsersTable.types";

export function UsersTable({ users }: Readonly<UsersTableProps>) {
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
