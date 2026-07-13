import { Card, CardContent, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { Button, TextField } from "@/design-system";

import type { LoginFormProps } from "../../types/auth.types";

export function LoginForm({ onSubmit }: Readonly<LoginFormProps>) {
  const [username, setUsername] = useState("johndoe");
  const [password, setPassword] = useState("JohnDoe@123");

  return (
    <Card
      elevation={6}
      sx={{
        width: "100%",
        maxWidth: 420,
        mx: "auto",
        mt: 10,
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ p: 5 }}>
        <Stack spacing={3}>
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <Typography component="h1" variant="h4" gutterBottom>
              Welcome Back
            </Typography>

            <Typography component="p" variant="body2" color="text.secondary">
              Sign in to continue to React Architecture
            </Typography>
          </Box>

          <TextField
            fullWidth
            autoFocus
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button
            fullWidth
            size="large"
            onClick={() => onSubmit({ username, password })}
          >
            Sign In
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
