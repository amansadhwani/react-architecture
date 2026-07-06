export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Manager" | "User";
}

export interface CreateUserRequest {
  name: string;
  email: string;
  role: User["role"];
}

export interface UpdateUserRequest {
  id: string;
  name: string;
  email: string;
  role: User["role"];
}
