import { type PropsWithChildren, useEffect, useState } from "react";

import { useAppDispatch } from "@/app/store/hooks";
import { useAuthenticatedUser } from "@/features/auth/hooks/useAuth";
import { setCurrentUser } from "@/features/auth/store/auth.slice";

import { sessionBootstrap } from "../auth";

export function AppAuthProvider({ children }: PropsWithChildren) {
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const [bootstrapSucceeded, setBootstrapSucceeded] = useState<boolean | null>(
    null,
  );

  const dispatch = useAppDispatch();

  const { data: user } = useAuthenticatedUser(bootstrapSucceeded === true);

  useEffect(() => {
    async function bootstrap() {
      const success = await sessionBootstrap();

      setBootstrapSucceeded(success);
      setIsBootstrapping(false);
    }

    bootstrap();
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(setCurrentUser(user));
    }
  }, [dispatch, user]);

  // Wait until refresh finishes
  if (isBootstrapping) {
    return null;
  }

  return children;
}
