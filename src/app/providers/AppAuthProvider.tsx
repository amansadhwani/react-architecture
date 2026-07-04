import { type PropsWithChildren, useEffect, useState } from "react";

import { sessionBootstrap } from "@/app/auth";

export function AppAuthProvider({ children }: PropsWithChildren) {
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  useEffect(() => {
    async function bootstrap() {
      await sessionBootstrap();
      setIsBootstrapping(false);
    }

    bootstrap();
  }, []);

  if (isBootstrapping) {
    return null; // Replace with a full-screen loader later
  }

  return children;
}
