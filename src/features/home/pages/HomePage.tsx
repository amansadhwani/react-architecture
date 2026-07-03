import { Link } from "react-router-dom";

import { Button } from "@/design-system";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>

      <Link to="/login">
        <Button variant="danger">Go to Login</Button>
      </Link>
    </>
  );
}
