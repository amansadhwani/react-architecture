import { type PropsWithChildren, useEffect, useState } from "react";

import { sessionBootstrap } from "@/app/auth";
import { useAppDispatch } from "@/app/store/hooks";
import { useAuthenticatedUser } from "@/features/auth/hooks/useAuth";
import { setCurrentUser } from "@/features/auth/store/auth.slice";

export function AppAuthProvider({ children }: PropsWithChildren) {
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  const dispatch = useAppDispatch();

  const { data: user } = useAuthenticatedUser(!isBootstrapping);

  useEffect(() => {
    async function bootstrap() {
      await sessionBootstrap();
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
