import { Button, TextField } from "@/design-system";

export default function LoginPage() {
  return (
    <>
      <TextField label="Username" variant="outlined" />
      <TextField label="Password" variant="outlined" />
      <Button>Login</Button>
    </>
  );
}
