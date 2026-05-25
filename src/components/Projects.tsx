import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import ImageWithPreload from './ImageWithPreload';
import React from 'react';
import Magnetic from './Magnetic';
import { useLanguage } from '../context/LanguageContext';

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-primary/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 grid grid-cols-12 gap-8 items-end"
      >
        <div className="col-span-12 md:col-span-8">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="text-[60px] leading-none font-light italic font-serif tracking-tighter"
          >
            <motion.span className="inline-block" variants={wordVariants}>{t.projects.title1}</motion.span>{' '}
            <motion.span className="not-italic font-bold inline-block" variants={wordVariants}>{t.projects.title2}</motion.span>
          </motion.h2>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p className="text-sm leading-relaxed border-l-2 border-primary pl-6">{t.projects.description}</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => {
          // ensure we don't index out of bounds
          const projectTranslated = t.projects.items[index] || t.projects.items[0];

          return (
            <motion.a 
              href={project.link}
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className={`min-h-[320px] p-8 flex flex-col justify-between group transition-colors ${index % 2 === 1 ? 'bg-card-dark text-background hover:bg-card-dark-hover' : 'bg-card hover:bg-card-hover'}`}
            >
              <div>
                <div className="text-[10px] uppercase tracking-widest opacity-50 mb-6 flex gap-2 font-bold">
                  <span>{t.projects.caseStudy} 0{index + 1}</span>
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="before:content-['/'] before:mr-2 before:opacity-50">{tag}</span>
                  ))}
                </div>
                <ImageWithPreload 
                  src={project.image} 
                  alt={projectTranslated.title} 
                  containerClassName="w-full aspect-[4/3] mb-8 bg-primary/5 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <h3 className="text-3xl lg:text-4xl font-light leading-none font-serif mb-4">
                  {projectTranslated.title}
                </h3>
              </div>
              
              <div className="flex justify-between items-end gap-4 mt-12">
                <p className={`text-[11px] max-w-[240px] opacity-70 font-medium`}>
                  {projectTranslated.description}
                </p>
                <Magnetic strength={0.4}>
                  <div className={`w-12 h-12 flex-shrink-0 border rounded-full flex items-center justify-center text-xs group-hover:scale-110 transition-transform ${index % 2 === 1 ? 'border-background' : 'border-primary'}`}>
                    &rarr;
                  </div>
                </Magnetic>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
