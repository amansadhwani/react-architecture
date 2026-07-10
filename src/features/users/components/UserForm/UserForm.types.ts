import type { UseFormReturn } from "react-hook-form";

import type { UserFormValues } from "../../schemas/user.schema";

export interface UserFormProps {
  form: UseFormReturn<UserFormValues>;
}
