import { Container, Typography } from "@mui/material";

import { UsersContainer } from "../containers/UsersContainer";

export function UsersPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <UsersContainer />
    </Container>
  );
}
