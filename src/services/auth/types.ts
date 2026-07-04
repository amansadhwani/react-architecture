export interface RefreshTokenResponse {
  user: {
    id: number;
    name: string;
    email: string;
    userName: string;
  };
  accessToken: string;
  expiresAt: string;
}
