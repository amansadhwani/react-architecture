import { apiClient } from "@/lib/api";

import type { Users2Response } from "../types";

export async function getUsersList(): Promise<Users2Response[]> {
  const { data } = await apiClient.get("api/users/list");
  return data?.data;
}
