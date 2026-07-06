import { apiClient } from "@/lib";

import type { User } from "../types";

export async function getUsers(): Promise<User[]> {
  const { data } = await apiClient.get<User[]>("/users");
  return data;
}
