import { delay, http, HttpResponse } from "msw";

import type {
  CreateUserRequest,
  UpdateUserRequest,
  User,
} from "@/features/users/types";

import { users } from "../data/users";

export const usersHandlers = [
  http.get("/users", async () => {
    await delay(500);

    return HttpResponse.json(users);
  }),

  http.post("/users", async ({ request }) => {
    await delay(500);

    const body = (await request.json()) as CreateUserRequest;

    const newUser: User = {
      id: crypto.randomUUID(),
      ...body,
    };

    users.push(newUser);

    return HttpResponse.json(newUser, {
      status: 201,
    });
  }),

  http.put("/users/:id", async ({ params, request }) => {
    await delay(500);

    const id = params.id as string;
    const body = (await request.json()) as Omit<UpdateUserRequest, "id">;

    const user = users.find((user) => user.id === id);

    if (!user) {
      return HttpResponse.json({ message: "User not found" }, { status: 404 });
    }

    user.name = body.name;
    user.email = body.email;
    user.role = body.role;

    return HttpResponse.json(user);
  }),

  http.delete("/users/:id", async ({ params }) => {
    await delay(500);

    const id = params.id as string;

    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
      return HttpResponse.json({ message: "User not found" }, { status: 404 });
    }

    users.splice(index, 1);

    return new HttpResponse(null, {
      status: 204,
    });
  }),
];
