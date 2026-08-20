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
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Distinct Section Aurora */}
      <div className="absolute inset-0 aurora-hero opacity-60 mix-blend-screen pointer-events-none" />

      {/* Dynamic 3D lighting element */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8 text-sm font-medium text-gray-300"
        >
          <Sparkles size={16} className="text-primary" />
          <span>Solving real-world problems with code.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[1.1] mb-6"
        >
          <span className="text-white block">Hi, I'm {name.split(' ')[0]}</span>
          <div className="h-[1.2em] relative overflow-hidden flex justify-center items-center mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-gradient-primary absolute"
              >
                {roles[currentRole]}.
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed font-light"
        >
          {tagline}
        </motion.p>

        {/* Floating Skills Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mb-12"
        >
          {skills.map((skill, idx) => (
            <motion.span 
              key={idx} 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, delay: idx * 0.2, repeat: Infinity, ease: "easeInOut" }}
              className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-sm font-medium text-gray-300 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
          {availability.slice(0, 2).map((item, idx) => (
            <motion.span 
              key={`avail-${idx}`} 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, delay: (skills.length + idx) * 0.2, repeat: Infinity, ease: "easeInOut" }}
              className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-primary backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-primary/20 transition-colors cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#featured"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full glass border border-white/10 text-white font-semibold flex items-center justify-center hover:bg-white/10 hover-glow transition-all duration-300"
          >
            Let's Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
