import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  const { name, roles, tagline } = portfolioData.personal;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full glass mb-8 p-1 relative group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-spin-slow opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center relative z-10 overflow-hidden">
             <span className="text-4xl font-bold text-gradient">RK</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-gray-400 text-lg md:text-xl font-medium tracking-wide uppercase mb-4">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6">
            {name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-12 md:h-16 mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.h3
              key={currentRoleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-4xl font-semibold text-gradient"
            >
              {roles[currentRoleIndex]}
            </motion.h3>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-300 w-full sm:w-auto justify-center"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="/resume.pdf" // Assuming resume.pdf is in public folder
            target="_blank"
            className="px-8 py-4 rounded-full glass border border-white/10 text-white font-semibold flex items-center gap-2 hover:bg-white/10 hover-glow transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Download Resume <Download size={18} />
          </a>
        </motion.div>
      </div>

      {/* Floating particles - abstract representation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {[...Array(5)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute w-2 h-2 rounded-full bg-primary/40 blur-[2px]"
             animate={{
               y: ["0vh", "100vh"],
               x: Math.sin(i) * 100,
               opacity: [0, 1, 0]
             }}
             transition={{
               duration: 10 + Math.random() * 10,
               repeat: Infinity,
               ease: "linear",
               delay: Math.random() * 5
             }}
             style={{
               left: `${20 + i * 15}%`,
               top: "-5%"
             }}
           />
         ))}
      </div>
    </section>
  );
};

export default Hero;
