import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import mainUa from 'locales/ua/main.js';
import mainRu from 'locales/ru/main';
import calcUa from 'locales/ua/calc';
import calcRu from 'locales/ru/calc';
import modalsUa from 'locales/ua/modals';
import modalsRu from 'locales/ru/modals';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ru',
    resources: {
      ua: { translation: mainUa, calc: calcUa, modals: modalsUa },
      ru: {
        translation: mainRu,
        calc: calcRu,
        modals: modalsRu,
      },
    },
  });
