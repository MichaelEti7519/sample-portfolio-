import { motion } from 'motion/react';
import { SKILLS } from '../data';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  const { t } = useLanguage();
  const title1Words = t.about.title1.split(" ");

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-primary/10">
      <div className="grid md:grid-cols-12 gap-8 items-start">
        <motion.div
           initial={{ opacity: 0, x: -40 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="md:col-span-8"
        >
          <div className="text-[10px] uppercase tracking-widest opacity-50 mb-6 font-bold">{t.about.badge}</div>
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="text-3xl md:text-5xl font-light font-serif italic mb-8 leading-[1.1] max-w-2xl"
          >
            {title1Words.map((word, i) => (
              <React.Fragment key={i}>
                <motion.span className="inline-block" variants={wordVariants}>{word}</motion.span>{' '}
              </React.Fragment>
            ))}
            <motion.span className="not-italic font-bold inline-block" variants={wordVariants}>
              {t.about.title2}
            </motion.span>
          </motion.h2>
          <div className="space-y-6 text-sm leading-relaxed border-l-2 border-primary pl-6 max-w-xl">
            <p>
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 40 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
           className="md:col-span-4 flex flex-col mt-12 md:mt-0"
        >
          <div className="flex-1 border-t border-primary/10 pt-6">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-4">{t.about.skills}</div>
            <ul className="text-[11px] space-y-3 opacity-70 font-medium">
              {SKILLS.map((skill, index) => (
                <motion.li 
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
