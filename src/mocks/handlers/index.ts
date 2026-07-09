import { dashboardHandlers } from "./dashboard.handlers";
import { systemHandlers } from "./system.handlers";
import { usersHandlers } from "./users.handlers";

export const handlers = [
  ...dashboardHandlers,
  ...usersHandlers,
  ...systemHandlers,
];
