import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationES from "./locales/es.json";
import translationEN from "./locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: translationES },
    en: { translation: translationEN },
  },
  lng: "en", // Idioma por defecto
  fallbackLng: "en", // Idioma de fallback en caso de no encontrar una traducción
  interpolation: {
    escapeValue: false, // Evitar la necesidad de escapar valores
  },
});

export default i18n;
