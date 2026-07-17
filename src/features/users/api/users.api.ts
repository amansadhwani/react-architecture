import { apiClient } from "@/lib/api";

import type { User } from "../types";

export async function getUsers(): Promise<User[]> {
  const { data } = await apiClient.get<User[]>("/users");
  return data;
}
