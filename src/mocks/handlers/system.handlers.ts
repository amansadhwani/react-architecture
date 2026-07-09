import { http, HttpResponse } from "msw";

export const systemHandlers = [
  http.get("/api/system", async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return HttpResponse.json({
      applicationName: "Enterprise Admin Portal",
      companyName: "Acme Corporation",
      applicationVersion: "2.8.1",
      backendVersion: "5.14.0",
      environment: "Development",
      buildNumber: "20260709.001",
      releaseDate: "2026-07-09",
      supportEmail: "support@acme.com",
      apiStatus: "Healthy",
    });
  }),
];
