import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] max-w-6xl mx-auto w-full">
      <div className="mb-6 md:mb-0 opacity-80">{t.footer.location}</div>
      <div className="flex gap-8 mb-6 md:mb-0">
        <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
        <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
        <a href="#" className="hover:opacity-70 transition-opacity">GitHub</a>
      </div>
      <div className="opacity-80">&copy; {new Date().getFullYear()}</div>
    </footer>
  );
}
