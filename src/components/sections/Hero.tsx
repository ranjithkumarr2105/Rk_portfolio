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
    <section id="hero" className="min-h-screen w-full flex items-center relative overflow-hidden pt-32 pb-24">
      
      {/* Soft Section Aurora (Premium Blend) */}
      <div className="absolute inset-0 aurora-hero opacity-100 pointer-events-none" />

      {/* Subtle Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 mb-8 text-sm font-semibold text-gray-700 w-max"
          >
            <Sparkles size={16} className="text-primary" />
            <span>Solving real-world problems with code.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-[72px] font-black tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-gray-900 block mb-2">Hi, I'm {name.split(' ')[0]}</span>
            {/* Fixed height container for animated roles to prevent layout shifts/overlaps */}
            <div className="h-[1.2em] relative overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-gradient-primary absolute left-0"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-[600px] mb-12 leading-relaxed font-light"
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a
              href="#featured"
              className="px-8 py-4 rounded-[16px] bg-gray-900 text-white font-bold flex items-center justify-center gap-3 hover:bg-primary transition-colors shadow-lg shadow-gray-900/10 w-full sm:w-auto"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-[16px] bg-white border border-gray-200 text-gray-900 font-bold flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              Let's Collaborate
            </a>
          </motion.div>

          {/* Tech Pills aligned left */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-2 max-w-[600px]"
          >
            {skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="px-4 py-1.5 rounded-lg bg-white border border-gray-200 text-sm font-semibold text-gray-600 shadow-sm"
              >
                {skill}
              </span>
            ))}
            {availability.slice(0, 2).map((item, idx) => (
              <span 
                key={`avail-${idx}`} 
                className="px-4 py-1.5 rounded-lg bg-primary/5 border border-primary/20 text-sm font-bold text-primary shadow-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Illustration / Abstract Elements */}
        <div className="w-full lg:w-2/5 hidden md:flex justify-center items-center relative h-[500px]">
          {/* A premium abstract composition */}
          <div className="relative w-full h-full flex justify-center items-center">
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[350px] h-[350px] rounded-full border border-gray-200/50 border-dashed"
            />
            
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[250px] h-[250px] rounded-full border border-gray-200"
            />

            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 h-48 bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center overflow-hidden rotate-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-10 h-10 bg-primary rounded-full shadow-lg shadow-primary/30" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-white flex flex-col items-center justify-center p-4 -rotate-6"
            >
              <span className="text-3xl font-black text-gray-900 mb-1">5+</span>
              <span className="text-xs font-bold text-gray-500 uppercase text-center leading-tight">Projects<br/>Shipped</span>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
