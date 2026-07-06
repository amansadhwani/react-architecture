import { delay, http, HttpResponse } from "msw";

import { users } from "../data";

export const usersHandlers = [
  http.get("/users", async () => {
    await delay(500);

    return HttpResponse.json(users);
  }),
];
