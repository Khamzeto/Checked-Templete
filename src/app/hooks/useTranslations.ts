// src/hooks/useTranslations.ts
import { useLanguage } from '../context/LanguageContext';
import en from '../locales/en.json';
import ru from '../locales/ru.json';

const translations = {
  en,
  ru,
};

export const useTranslations = () => {
  const { language } = useLanguage();
  return translations[language];
};
