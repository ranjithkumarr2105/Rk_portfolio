import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, Database, Smartphone } from 'lucide-react';

const About = () => {
  const { narrative, stats } = portfolioData.about;

  return (
    <section id="about" className="py-[120px] w-full relative z-10 overflow-hidden border-t border-white/40">
      
      {/* Ambient Section Glows */}
      <div className="ambient-glow glow-about" />

      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%]"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple rounded-[40px] blur-3xl opacity-15" />
              <div className="relative premium-card p-12 lg:p-14 rounded-[40px] flex flex-col gap-10">
                <div className="flex justify-between items-center border-b border-slate-200/60 pb-6">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Projects Delivered</span>
                  <span className="text-4xl font-black text-slate-900">{stats.projects}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200/60 pb-6">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Core Expertise</span>
                  <span className="text-2xl font-bold text-gradient-accent">{stats.experience}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Education</span>
                  <span className="text-[13px] font-bold bg-slate-100 px-4 py-2 rounded-xl text-slate-700 shadow-sm">{stats.education}</span>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -top-8 w-[88px] h-[88px] rounded-[24px] flex items-center justify-center text-primary shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-white bg-white/90 backdrop-blur-md"
              >
                <Smartphone size={36} />
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-10 bottom-10 w-[88px] h-[88px] rounded-[24px] flex items-center justify-center text-accent shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-white bg-white/90 backdrop-blur-md"
              >
                <Database size={36} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[55%] flex flex-col gap-8"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-2 flex items-center gap-3">
              <Terminal size={18} /> My Story
            </h2>
            <h3 className="text-section-title">
              Engineering with <br />
              <span className="text-gradient-premium">Purpose.</span>
            </h3>
            
            <div className="space-y-6 text-slate-600 text-[20px] leading-[1.6] font-medium max-w-[600px]">
              {narrative.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
