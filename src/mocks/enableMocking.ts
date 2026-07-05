const shouldMock =
  import.meta.env.DEV || import.meta.env.VITE_ENABLE_MSW === "true";

export async function enableMocking(): Promise<void> {
  if (!shouldMock) {
    return;
  }

  const { worker } = await import("./browser");

  await worker.start({
    onUnhandledRequest: "bypass",
  });
}
