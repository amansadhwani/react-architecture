import { Link } from "react-router-dom";

import { APP_ROUTES } from "@/app/config";
import { Button } from "@/design-system";

export default function HomePage() {
  return (
    <Link to={APP_ROUTES.LOGIN}>
      <Button variant="danger">Go to Login</Button>
    </Link>
  );
}
