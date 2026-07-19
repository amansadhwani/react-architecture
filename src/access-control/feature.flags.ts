export const FeatureFlags = {
  usersV2: "users-v2",
} as const;

export type FeatureFlag = (typeof FeatureFlags)[keyof typeof FeatureFlags];
