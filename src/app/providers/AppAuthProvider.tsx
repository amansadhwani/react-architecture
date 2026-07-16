import { useQueryClient } from "@tanstack/react-query";
import { type PropsWithChildren, useEffect, useState } from "react";

import { useAppDispatch } from "@/app/store/hooks";
import { initializeAuth } from "@/features/auth/services";

export function AppAuthProvider({ children }: PropsWithChildren) {
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function bootstrap() {
      try {
        await initializeAuth(queryClient, dispatch);
      } finally {
        setIsBootstrapping(false);
      }
    }

    bootstrap();
  }, [dispatch, queryClient]);

  if (isBootstrapping) {
    return null;
  }

  return children;
}
