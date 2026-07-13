export const loginKeys = {
  all: ["auth"] as const,

  currentUser: () => [...loginKeys.all, "currentUser"] as const,
};
