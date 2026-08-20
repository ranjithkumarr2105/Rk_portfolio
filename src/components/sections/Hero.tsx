import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  const { name, roles, skills, tagline, availability } = portfolioData.personal;
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="min-h-[90vh] w-full flex items-center justify-center relative overflow-hidden pt-[140px] pb-[140px]">
      
      {/* Distinct Section Aurora (Light Theme) */}
      <div className="absolute inset-0 aurora-hero opacity-100 pointer-events-none" />

      {/* Dynamic 3D lighting element */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-gray-200 mb-12 text-sm font-semibold text-gray-700"
        >
          <Sparkles size={16} className="text-primary" />
          <span>Solving real-world problems with code.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-7xl lg:text-[80px] font-black tracking-tighter leading-[1.2] mb-12"
        >
          <span className="text-gray-900 block mb-2">Hi, I'm {name.split(' ')[0]}</span>
          <div className="h-[1.3em] relative overflow-hidden flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-gradient-primary absolute"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 text-lg md:text-2xl max-w-[700px] mx-auto mb-16 leading-relaxed font-light"
        >
          {tagline}
        </motion.p>

        {/* Floating Skills Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 max-w-[800px] mb-16"
        >
          {skills.map((skill, idx) => (
            <motion.span 
              key={idx} 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, delay: idx * 0.15, repeat: Infinity, ease: "easeInOut" }}
              className="px-5 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
          {availability.slice(0, 2).map((item, idx) => (
            <motion.span 
              key={`avail-${idx}`} 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, delay: (skills.length + idx) * 0.15, repeat: Infinity, ease: "easeInOut" }}
              className="px-5 py-2 rounded-full bg-primary/5 border border-primary/20 text-sm font-bold text-primary shadow-sm hover:bg-primary/10 transition-colors cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a
            href="#featured"
            className="px-10 py-4 rounded-full bg-gray-900 text-white font-bold flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-gray-900/20 hover:shadow-gray-900/40"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full bg-white border border-gray-200 text-gray-900 font-bold flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
          >
            Let's Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
