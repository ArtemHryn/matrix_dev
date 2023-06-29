import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import mainUa from 'locales/ua/main.js';
import mainRu from 'locales/ru/main';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ru',
    resources: {
      ua: { translation: mainUa },
      ru: {
        translation: mainRu,
      },
    },
  });
