import {
  type AppLanguage,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
} from "./config";

function isSupportedLanguage(value: string): value is AppLanguage {
  return SUPPORTED_LANGUAGES.includes(value as AppLanguage);
}

export const languageStorage = {
  get(): AppLanguage {
    const language = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (language && isSupportedLanguage(language)) {
      return language;
    }

    return DEFAULT_LANGUAGE;
  },

  set(language: AppLanguage) {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  },

  clear() {
    localStorage.removeItem(LANGUAGE_STORAGE_KEY);
  },
};
