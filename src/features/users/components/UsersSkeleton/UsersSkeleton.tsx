import { Container, Stack } from "@mui/material";

import { ButtonSkeleton, TableSkeleton } from "@/app/ui/skeletons";

export function UsersSkeleton() {
  return (
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <ButtonSkeleton width={140} />

        <TableSkeleton rows={6} columns={3} />
      </Stack>
    </Container>
  );
}
