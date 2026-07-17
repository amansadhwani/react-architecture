import { useAppSelector } from "@/app/store";
import { selectCurrentUser } from "@/features/auth/store/auth.selectors";

import type { FeatureFlag } from "../featureFlags";

export function useFeatureFlag(flag?: FeatureFlag): boolean {
  const user = useAppSelector(selectCurrentUser);

  if (!flag) {
    return true;
  }

  return user?.featureFlags.includes(flag) ?? false;
}
