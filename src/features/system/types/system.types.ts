export interface SystemResponse {
  applicationName: string;
  companyName: string;
  applicationVersion: string;
  backendVersion: string;
  environment: string;
  buildNumber: string;
  releaseDate: string;
  supportEmail: string;
  apiStatus: string;
}

export interface SystemProps {
  systemInfo: SystemResponse;
}
