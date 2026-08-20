import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  const { name, roles, skills, tagline } = portfolioData.personal;
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="min-h-screen w-full flex items-center relative overflow-hidden pt-32 pb-[120px]">
      
      {/* Premium Cinematic Background Elements */}
      <div className="section-light light-hero-1" />
      <div className="section-light light-hero-2" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column: Typography & Content */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 className="heading-hero">
              <span className="block text-gray-900 leading-[1.1]">Hi, I'm</span>
              <span className="block text-gray-900 leading-[1.1]">{name}</span>
            </h1>
          </motion.div>

          {/* Fixed Height Rotating Role Area - ZERO Overlap */}
          <div className="h-[60px] md:h-[80px] relative overflow-hidden mb-8 w-full max-w-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.95 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)", scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center"
              >
                <h2 className="text-3xl md:text-[40px] font-bold text-gradient-primary leading-tight">
                  {roles[currentRole]}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-[600px] mb-12 leading-relaxed font-light"
          >
            {tagline}
          </motion.p>

          {/* 5-Second Recruiter Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3 max-w-[600px]"
          >
            {/* The absolute critical roles a recruiter looks for */}
            <span className="px-5 py-2.5 rounded-xl bg-gray-900 text-sm font-bold text-white shadow-lg shadow-gray-900/20 hover:-translate-y-1 transition-transform cursor-default">
              Android Expert
            </span>
            <span className="px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-sm font-bold text-primary shadow-sm hover:-translate-y-1 transition-transform cursor-default">
              Backend Developer
            </span>
            <span className="px-5 py-2.5 rounded-xl bg-secondary/10 border border-secondary/20 text-sm font-bold text-secondary shadow-sm hover:-translate-y-1 transition-transform cursor-default">
              AI Developer
            </span>
            <span className="px-5 py-2.5 rounded-xl bg-emerald/10 border border-emerald/20 text-sm font-bold text-emerald shadow-sm hover:-translate-y-1 transition-transform cursor-default flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" /> Available for Hire
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-2 max-w-[600px] mt-6"
          >
            {skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="px-4 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-500 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>

        </div>

        {/* Right Column: Premium Abstract Composition */}
        <div className="w-full lg:w-[45%] hidden md:flex justify-center items-center relative h-[600px]">
          <div className="relative w-full h-full flex justify-center items-center">
            
            {/* Massive rotating dashed ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[450px] h-[450px] rounded-full border border-gray-200/50 border-dashed"
            />
            
            {/* Inner solid ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] rounded-full border border-gray-100"
            />

            {/* Main floating glass element */}
            <motion.div
              animate={{ y: [-20, 20, -20], rotateX: [5, -5, 5], rotateY: [-5, 5, -5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 premium-glass-card flex items-center justify-center overflow-hidden z-20 perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-tertiary/20" />
              <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50" />
              </div>
            </motion.div>

            {/* Secondary floating element */}
            <motion.div
              animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 w-36 h-36 premium-glass-card flex flex-col items-center justify-center p-4 z-30"
            >
              <span className="text-4xl font-black text-gray-900 mb-1">100%</span>
              <span className="text-xs font-bold text-gray-500 uppercase text-center leading-tight">Production<br/>Ready</span>
            </motion.div>

            {/* Tertiary floating element */}
            <motion.div
              animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-20 right-10 w-24 h-24 premium-glass-card flex items-center justify-center z-10"
            >
               <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan to-emerald opacity-80" />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
