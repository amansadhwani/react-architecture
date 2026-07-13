import { type PropsWithChildren, useEffect, useState } from "react";

import { sessionBootstrap } from "@/app/auth";
import { useAppDispatch } from "@/app/store/hooks";
import { useAuthenticatedUser } from "@/features/login/hooks/useLogin";
import { setCurrentUser } from "@/features/login/store/login.slice";

export function AppAuthProvider({ children }: PropsWithChildren) {
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const dispatch = useAppDispatch();

  const { data: user } = useAuthenticatedUser(!isBootstrapping);

  useEffect(() => {
    async function bootstrap() {
      try {
        await sessionBootstrap();
      } finally {
        setIsBootstrapping(false);
      }
    }

    bootstrap();
  }, []);
  useEffect(() => {
    if (user) {
      dispatch(setCurrentUser(user));
    }
  }, [dispatch, user]);

  if (isBootstrapping) {
    return null; // Replace with a full-screen loader later
  }

  return children;
}
