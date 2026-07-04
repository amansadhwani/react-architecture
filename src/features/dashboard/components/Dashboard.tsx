import { logout } from "@/app/auth";
import { Button } from "@/design-system";

export function Dashboard() {
  return (
    <>
      <h1>Welcome to dashboard</h1>;
      <Button onClick={logout}>Logout</Button>{" "}
    </>
  );
}
