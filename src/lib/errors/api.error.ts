export class AppError extends Error {
  public readonly status: number | undefined;
  public readonly code: string | undefined;

  constructor(message: string, status?: number, code?: string) {
    super(message);

    this.name = "AppError";

    this.status = status;
    this.code = code;

    Object.setPrototypeOf(this, AppError.prototype);
  }
}
