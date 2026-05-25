import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
      <button 
        onClick={() => setLanguage('en')}
        className={`transition-opacity ${language === 'en' ? 'opacity-100 border-b border-primary' : 'opacity-40 hover:opacity-70'}`}
      >
        EN
      </button>
      <span className="opacity-20">/</span>
      <button 
        onClick={() => setLanguage('es')}
        className={`transition-opacity ${language === 'es' ? 'opacity-100 border-b border-primary' : 'opacity-40 hover:opacity-70'}`}
      >
        ES
      </button>
    </div>
  );
}
