export type Role = "admin" | "manager" | "user";

export type Permission =
  | "dashboard.read"
  | "users.read"
  | "users.create"
  | "users.update"
  | "users.delete"
  | "system.read";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  userName: string;
  role: Role;
  permissions: Permission[];
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}
