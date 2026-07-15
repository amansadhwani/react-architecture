export interface User2 {
  id: number;
  name: string;
  email: string;
  userName: string;
  role: "Admin" | "Manager" | "User";
}

export interface Users2Response {
  data: User2[];
}
