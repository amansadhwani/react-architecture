import { useTranslation } from "react-i18next";

import { type AppLanguage } from "../config";
import { languageStorage } from "../languageStorage";

export function useLanguage() {
  const { i18n } = useTranslation();

  function changeLanguage(language: AppLanguage) {
    languageStorage.set(language);
    void i18n.changeLanguage(language);
  }

  return {
    language: i18n.resolvedLanguage as AppLanguage,
    changeLanguage,
  };
}
