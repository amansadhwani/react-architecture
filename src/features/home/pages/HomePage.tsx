import { Box, Card, CardContent, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { APP_ROUTES } from "@/app/config";
import { Button } from "@/design-system";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Card
        elevation={6}
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ p: 6 }}>
          <Stack spacing={3}>
            <Typography component="h1" variant="h4" gutterBottom>
              Enterprise React Architecture
            </Typography>

            <Typography component="p" variant="body1" color="text.secondary">
              A modern React application showcasing enterprise architecture
              using React 19, TypeScript, React Router, TanStack Query, Material
              UI, authentication, internationalization, and scalable
              feature-based organization.
            </Typography>

            <Link to={APP_ROUTES.LOGIN}>
              <Button>Go to Login</Button>
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
