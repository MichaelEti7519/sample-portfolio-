import { motion } from 'motion/react';
import Magnetic from './Magnetic';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 relative overflow-hidden pt-32 pb-20">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] opacity-40 font-semibold mb-8 flex items-center gap-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
            {t.hero.badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[60px] md:text-[88px] leading-[0.85] font-light tracking-tighter font-serif italic mb-4"
          >
            {t.hero.title1} <br />
            <span className="not-italic font-bold">{t.hero.title2}</span>
          </motion.h1>
        </div>

        <div className="md:col-span-4 pb-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm leading-relaxed border-l-2 border-primary pl-6 mb-8"
          >
            {t.hero.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Magnetic>
              <a href="#projects" className="inline-flex text-[11px] font-bold uppercase tracking-widest border border-primary px-6 py-3 hover:bg-primary hover:text-background transition-colors">
                {t.hero.cta}
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
