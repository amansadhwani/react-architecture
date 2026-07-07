export const DEFAULT_LANGUAGE = "en";

export const FALLBACK_LANGUAGE = "en";

export const SUPPORTED_LANGUAGES = ["en", "fr"] as const;

export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_NAMESPACE = "common";

export const NAMESPACES = ["common", "dashboard", "users"] as const;

export type AppNamespace = (typeof NAMESPACES)[number];
