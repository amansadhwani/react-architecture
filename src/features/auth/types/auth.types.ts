export interface LoginFormValues {
  username: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (credentials: LoginFormValues) => void;
  isLoading: boolean;
}

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
