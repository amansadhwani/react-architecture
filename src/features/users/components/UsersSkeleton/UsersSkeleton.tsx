import {
  Container,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const ROWS = 6;

export function UsersSkeleton() {
  return (
    <Container maxWidth="lg">
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={60} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={60} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={40} />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Array.from({ length: ROWS }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton variant="text" width="70%" />
                </TableCell>

                <TableCell>
                  <Skeleton variant="text" width="90%" />
                </TableCell>

                <TableCell>
                  <Skeleton variant="rounded" width={70} height={28} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
