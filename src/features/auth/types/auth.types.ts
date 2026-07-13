export interface LoginFormValues {
  username: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (credentials: LoginFormValues) => void;
  isLoading: boolean;
}
