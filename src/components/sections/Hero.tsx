import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  const { name, tagline, availability } = portfolioData.personal;

  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20">
      
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
          <span>Software Engineer & Problem Solver</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[1.1] mb-8"
        >
          <span className="text-white block">Hi, I'm {name.split(' ')[0]}</span>
          <span className="text-gradient">Building Products.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
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
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            <span className="text-sm text-gray-500 w-full mb-2 uppercase tracking-widest font-semibold">Currently Open To</span>
            {availability.map((item, idx) => (
              <span key={idx} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 backdrop-blur-md cursor-default hover:bg-white/10 hover:border-white/20 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
