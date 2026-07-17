import axios from "axios";

import { env } from "@/app/config";
import { refreshApi } from "@/features/auth/api";
import { logout } from "@/features/auth/services";
import { tokenStorage } from "@/features/auth/services/tokenStorage";
import type { RefreshTokenResponse } from "@/features/auth/types";
import { mapApiError } from "@/lib/errors/map.api.error";

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
    const originalRequest = error.config;

    // Non-auth errors
    if (error.response?.status !== 401) {
      throw mapApiError(error);
    }

    // Already retried once
    if (originalRequest?._retry) {
      throw mapApiError(error);
    }

    originalRequest._retry = true;

    try {
      if (!isRefreshing) {
        isRefreshing = true;

        refreshPromise = refreshApi.refresh().finally(() => {
          isRefreshing = false;
          refreshPromise = null;
        });
      }

      if (!refreshPromise) {
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
      await logout();
      throw mapApiError(refreshError);
    }
  },
);
