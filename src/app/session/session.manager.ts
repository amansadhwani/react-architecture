import { refreshApi } from "@/features/auth/api";
import { logout } from "@/features/auth/services";
import type { RefreshTokenResponse } from "@/features/auth/types";
import { apiClient } from "@/lib/api";
import { mapApiError } from "@/lib/errors";
import { tokenStorage } from "@/lib/storage";

let isRefreshing = false;
let refreshPromise: Promise<RefreshTokenResponse> | null = null;

export function registerSessionInterceptor() {
  apiClient.interceptors.response.use(
    (response) => response,

    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status !== 401) {
        throw mapApiError(error);
      }

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
}
