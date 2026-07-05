import { logout } from "@/app/auth";
import { Button } from "@/design-system";

export function Dashboard() {
  return <Button onClick={logout}>Logout</Button>;
}
