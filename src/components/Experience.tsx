import { motion } from 'motion/react';
import { EXPERIENCES } from '../data';
import { useLanguage } from '../context/LanguageContext';

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-primary/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-50">{t.experience.badge}</div>
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-4xl md:text-[60px] font-serif font-light italic leading-none tracking-tighter"
        >
          <motion.span className="inline-block" variants={wordVariants}>{t.experience.title}</motion.span>
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-0 border-t border-primary/10">
        {EXPERIENCES.map((exp, index) => {
           const expTranslated = t.experience.items[index] || t.experience.items[0];

           return (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-12 border-b border-primary/10 items-baseline"
            >
              <div className="md:col-span-3 text-[10px] font-bold uppercase tracking-widest opacity-50">
                {exp.date}
              </div>
              
              <div className="md:col-span-4">
                <h3 className="text-2xl lg:text-3xl font-serif font-light mb-2">{expTranslated.role}</h3>
                <div className="text-[10px] font-bold uppercase tracking-widest">{exp.company}</div>
              </div>
              
              <div className="md:col-span-5 pt-2 md:pt-0">
                <p className="text-sm leading-relaxed border-l-2 border-primary pl-6">
                  {expTranslated.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
