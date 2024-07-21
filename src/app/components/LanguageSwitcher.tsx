// src/components/LanguageSwitcher.tsx
'use client';
// src/components/LanguageSwitcher.tsx
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setLanguage } = useLanguage();

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    router.push(`${pathname}?${searchParams.toString()}`, { locale: lng });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
    </div>
  );
};

export default LanguageSwitcher;
