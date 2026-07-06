import { apiClient } from "@/lib";

import type { CreateUserRequest, UpdateUserRequest, User } from "../types";

export async function createUser(payload: CreateUserRequest): Promise<User> {
  const { data } = await apiClient.post<User>("/users", payload);

  return data;
}

export async function updateUser({
  id,
  ...payload
}: UpdateUserRequest): Promise<User> {
  const { data } = await apiClient.put<User>(`/users/${id}`, payload);

  return data;
}

export async function deleteUser({ id }: { id: string }): Promise<User> {
  const { data } = await apiClient.delete<User>(`/users/${id}`);

  return data;
}
