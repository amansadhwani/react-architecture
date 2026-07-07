import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import {
  DEFAULT_LANGUAGE,
  DEFAULT_NAMESPACE,
  FALLBACK_LANGUAGE,
  NAMESPACES,
} from "./config";
import { en } from "./locales/en";
import { fr } from "./locales/fr";

void i18n.use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,

  fallbackLng: FALLBACK_LANGUAGE,

  defaultNS: DEFAULT_NAMESPACE,

  ns: NAMESPACES,

  interpolation: {
    escapeValue: false,
  },

  resources: {
    en,
    fr,
  },
});

export default i18n;
