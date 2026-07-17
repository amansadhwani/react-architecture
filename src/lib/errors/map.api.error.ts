import axios from "axios";

import { AppError } from "./api.error";

export function mapApiError(error: unknown): Error {
  if (!axios.isAxiosError(error)) {
    return error instanceof Error ? error : new Error("Unknown error");
  }

  const status = error.response?.status;

  const message =
    error.response?.data?.error?.message ??
    error.message ??
    "Something went wrong.";

  return new AppError(message, status);
}
