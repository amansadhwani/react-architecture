import { useState } from "react";

import { Button, TextField } from "@/design-system";

import type { LoginFormProps } from "../../types/login.types";

export function LoginForm({ onSubmit }: Readonly<LoginFormProps>) {
  const [username, setUsername] = useState("johndoe");
  const [password, setPassword] = useState("JohnDoe@123");
  return (
    <>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => onSubmit({ username, password })}>Login</Button>
    </>
  );
}
