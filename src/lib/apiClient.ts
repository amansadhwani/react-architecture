import axios from "axios";

import { env } from "@/app/config";
import { tokenStorage } from "@/services/login";

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const accessToken = tokenStorage.getAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
