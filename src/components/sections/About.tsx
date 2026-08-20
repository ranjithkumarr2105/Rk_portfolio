import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, Database, Smartphone } from 'lucide-react';

const About = () => {
  const { narrative, stats } = portfolioData.about;

  return (
    <section id="about" className="py-[120px] w-full relative z-10 overflow-hidden border-t border-gray-100">
      
      {/* Section Identity Lights */}
      <div className="section-light light-about" />

      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[45%]"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-lavender rounded-[32px] blur-2xl opacity-10" />
              <div className="relative premium-glass-card p-12 rounded-[32px] flex flex-col gap-10">
                <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Projects Delivered</span>
                  <span className="text-4xl font-black text-gray-900">{stats.projects}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Core Expertise</span>
                  <span className="text-2xl font-bold text-gradient-primary">{stats.experience}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Education</span>
                  <span className="text-xs font-bold bg-gray-100 px-4 py-2 rounded-lg text-gray-700">{stats.education}</span>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -top-8 w-20 h-20 rounded-[24px] flex items-center justify-center text-primary shadow-xl border border-white bg-white/80 backdrop-blur-md"
              >
                <Smartphone size={32} />
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-10 bottom-10 w-20 h-20 rounded-[24px] flex items-center justify-center text-secondary shadow-xl border border-white bg-white/80 backdrop-blur-md"
              >
                <Database size={32} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[55%] flex flex-col gap-8"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-lavender mb-2 flex items-center gap-3">
              <Terminal size={18} /> My Story
            </h2>
            <h3 className="heading-section">
              Engineering with <br />
              <span className="text-gradient">Purpose.</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light max-w-[600px]">
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
