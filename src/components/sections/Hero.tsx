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
    <section id="hero" className="min-h-screen w-full flex items-center relative overflow-hidden pt-[120px] pb-[120px]">
      
      {/* Ambient Section Glows */}
      <div className="ambient-glow glow-hero-1" />
      <div className="ambient-glow glow-hero-2" />
      <div className="ambient-glow glow-hero-3" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Column: Typography & Content */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <h1 className="text-hero-name flex flex-col">
              <span className="block">Hi, I'm</span>
              <span className="block">{name.split(' ')[0]}</span>
            </h1>
          </motion.div>

          {/* Fixed Height Rotating Role Area - ZERO Overlap Guarantee */}
          <div className="h-[60px] md:h-[80px] lg:h-[90px] relative overflow-hidden mb-8 w-full max-w-[650px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(12px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center"
              >
                <h2 className="text-hero-role text-gradient-premium">
                  {roles[currentRole]}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-600 text-[18px] md:text-[20px] max-w-[600px] mb-12 leading-[1.6] font-medium"
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 mb-14"
          >
            <a
              href="#featured"
              className="px-8 py-4 rounded-[20px] bg-slate-900 text-white font-bold flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-[0_10px_30px_rgba(15,23,42,0.15)] hover:shadow-[0_15px_40px_rgba(91,127,255,0.4)] w-full sm:w-auto hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-[20px] bg-white border border-slate-200 text-slate-900 font-bold flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] w-full sm:w-auto hover:-translate-y-1"
            >
              Let's Collaborate
            </a>
          </motion.div>

          {/* Tech Pills aligned left */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-2.5 max-w-[600px]"
          >
            {skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="px-5 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-600 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Premium Animated Abstract Visual (Glass Cards, Orbs, Tech) */}
        <div className="w-full lg:w-[45%] h-[500px] lg:h-[700px] flex justify-center items-center relative mt-12 lg:mt-0">
          <div className="relative w-full h-full flex justify-center items-center perspective-1000">
            
            {/* Center Glowing Orb */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], filter: ["blur(40px)", "blur(60px)", "blur(40px)"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-primary to-cyan rounded-full opacity-30"
            />

            {/* Orbiting Ring 1 */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-slate-300/40 border-dashed"
            />

            {/* Main Floating Glass Panel */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotateX: [5, -5, 5], rotateY: [-5, 5, -5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[280px] h-[320px] premium-card flex flex-col items-center justify-center p-8 z-20"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan mb-6 shadow-[0_10px_20px_rgba(91,127,255,0.4)] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">100%</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center">
                Production<br/>Ready
              </p>
            </motion.div>

            {/* Secondary Floating Card (Stats) */}
            <motion.div
              animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[10%] right-[10%] md:right-0 w-[180px] premium-card p-6 z-30"
            >
              <h3 className="text-3xl font-black text-slate-900 mb-1 text-gradient-accent">4+</h3>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                Production Apps<br/>Shipped
              </p>
            </motion.div>

            {/* Tertiary Floating Card (AI) */}
            <motion.div
              animate={{ y: [-10, 10, -10], x: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[10%] left-[10%] md:left-0 w-[180px] premium-card p-6 z-30 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple to-pink flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 leading-none mb-1">AI</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Integrated<br/>Solutions</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
