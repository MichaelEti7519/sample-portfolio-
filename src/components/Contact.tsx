import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import Magnetic from './Magnetic';
import { useLanguage } from '../context/LanguageContext';

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Contact() {
  const [showToast, setShowToast] = useState(false);
  const { t } = useLanguage();

  const handleContactClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const title1Words = t.contact.title1.split(" ");

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-primary/10 mb-8 mt-16 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center py-16"
      >
        <div className="text-[10px] font-bold uppercase tracking-widest mb-8 opacity-50">{t.contact.badge}</div>
        
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-[60px] md:text-[88px] leading-[0.85] font-light font-serif italic mb-6 tracking-tighter"
        >
          {title1Words.map((word, i) => (
            <React.Fragment key={i}>
              <motion.span className="inline-block" variants={wordVariants}>{word}</motion.span>{' '}
            </React.Fragment>
          ))}
          <br /> 
          <motion.span className="not-italic font-bold inline-block mt-2" variants={wordVariants}>
            {t.contact.title2}
          </motion.span>
        </motion.h2>
        
        <p className="text-sm leading-relaxed border-t border-b border-primary/10 py-6 max-w-lg mx-auto mt-8 mb-12">
          {t.contact.description}
        </p>
        
        <Magnetic>
          <a 
            href="mailto:hello@example.com" 
            onClick={handleContactClick}
            className="inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest border border-primary px-8 py-4 hover:bg-primary hover:text-background transition-colors"
          >
            {t.contact.cta} &rarr;
          </a>
        </Magnetic>

        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary text-background px-6 py-3 rounded-full text-xs font-medium z-50 pointer-events-none shadow-lg border border-border whitespace-nowrap"
            >
              {t.contact.toast}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
