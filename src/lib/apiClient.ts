import axios from "axios";

import { env } from "@/app/config";
import { logout } from "@/features/auth/services";
import {
  refreshTokenApi,
  type RefreshTokenResponse,
  tokenStorage,
} from "@/services/auth";

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

let isRefreshing = false;
let refreshPromise: Promise<RefreshTokenResponse> | null = null;

apiClient.interceptors.request.use((config) => {
  const accessToken = tokenStorage.getAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status !== 401) {
      throw error;
    }

    const originalRequest = error.config;

    if (originalRequest._retry) {
      throw error;
    }

    originalRequest._retry = true;

    try {
      if (!isRefreshing) {
        isRefreshing = true;

        refreshPromise = refreshTokenApi.refresh().finally(() => {
          isRefreshing = false;
          refreshPromise = null;
        });
      }

      if (refreshPromise === null) {
        throw new Error("Refresh promise was not initialized.");
      }

      const data = await refreshPromise;

      tokenStorage.setAccessToken(data.accessToken);

      originalRequest.headers = {
        ...originalRequest.headers,
        Authorization: `Bearer ${data.accessToken}`,
      };

      return apiClient(originalRequest);
    } catch (refreshError) {
      logout();
      throw refreshError;
    }
  },
);
