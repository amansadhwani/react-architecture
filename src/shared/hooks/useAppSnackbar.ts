import { useSnackbar } from "notistack";

export function useAppSnackbar() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return {
    success(message: string) {
      enqueueSnackbar(message, {
        variant: "success",
      });
    },

    error(message: string) {
      enqueueSnackbar(message, {
        variant: "error",
      });
    },

    warning(message: string) {
      enqueueSnackbar(message, {
        variant: "warning",
      });
    },

    info(message: string) {
      enqueueSnackbar(message, {
        variant: "info",
      });
    },

    dismiss(key?: string | number) {
      closeSnackbar(key);
    },
  };
}
