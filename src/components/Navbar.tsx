import { motion } from 'motion/react';
import { NAV_LINKS } from '../data';
import ThemeToggle from './ThemeToggle';
import Magnetic from './Magnetic';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-baseline justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-background/90 border-b border-primary/10"
    >
      <div className="text-xs font-bold uppercase tracking-widest hidden sm:block">
        {t.nav.title}
      </div>
      
      <nav className="flex-1 sm:flex-none flex items-center justify-between sm:justify-end gap-6 md:gap-8 text-[11px] font-medium uppercase tracking-widest opacity-60">
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-primary hover:opacity-100 transition-colors">{t.nav.home}</a>
          <a href="#about" className="hover:text-primary hover:opacity-100 transition-colors">{t.nav.about}</a>
          <a href="#projects" className="hover:text-primary hover:opacity-100 transition-colors">{t.nav.projects}</a>
        </div>
        
        <div className="flex items-center gap-6">
          <Magnetic strength={0.2}>
            <a 
              href="#contact" 
              className="text-primary opacity-100 font-bold border-b border-primary pb-0.5 inline-block"
            >
              {t.nav.available}
            </a>
          </Magnetic>
          
          <div className="flex items-center gap-4 opacity-100 text-primary">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
