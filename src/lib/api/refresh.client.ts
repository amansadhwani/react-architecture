import axios from "axios";

import { env } from "@/app/config";

export const refreshClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 10000,
  withCredentials: true, // browser if you have cookie send them to server
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
