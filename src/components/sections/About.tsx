import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, Database, Smartphone } from 'lucide-react';

const About = () => {
  const { narrative, stats } = portfolioData.about;

  return (
    <section id="about" className="py-32 w-full relative z-10 bg-background/50 border-y border-white/5 overflow-hidden">
      {/* Distinct Section Aurora */}
      <div className="absolute inset-0 aurora-about opacity-30 mix-blend-screen pointer-events-none" />
      
      {/* Decorative gradient blob */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-96 h-96 bg-accent1/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-20" />
              <div className="relative glass-card p-10 rounded-3xl border border-white/10 flex flex-col gap-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                  <span className="text-gray-400 font-medium">Projects Delivered</span>
                  <span className="text-3xl font-black text-white">{stats.projects}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                  <span className="text-gray-400 font-medium">Core Expertise</span>
                  <span className="text-xl font-bold text-gradient">{stats.experience}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Education</span>
                  <span className="text-sm font-bold bg-white/10 px-3 py-1 rounded-full">{stats.education}</span>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 -top-6 w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-primary shadow-lg border border-white/20 bg-white/[0.05]"
              >
                <Smartphone size={28} />
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-10 w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-secondary shadow-lg border border-white/20 bg-white/[0.05]"
              >
                <Database size={28} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 flex flex-col gap-8"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-2 flex items-center gap-2">
              <Terminal size={16} /> My Story
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-2">
              Engineering with <br />
              <span className="text-gradient">Purpose.</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
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
