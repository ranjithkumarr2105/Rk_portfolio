import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, Database, Smartphone } from 'lucide-react';

const About = () => {
  const { narrative, stats } = portfolioData.about;

  return (
    <section id="about" className="py-[140px] w-full relative z-10 bg-white/50 border-y border-gray-200 overflow-hidden">
      {/* Distinct Section Aurora */}
      <div className="absolute inset-0 aurora-about opacity-100 pointer-events-none" />
      
      {/* Decorative gradient blob */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-96 h-96 bg-accent5/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent5 rounded-3xl blur-2xl opacity-10" />
              <div className="relative glass-card p-12 rounded-3xl flex flex-col gap-10 bg-white border border-gray-200">
                <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                  <span className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Projects Delivered</span>
                  <span className="text-4xl font-black text-gray-900">{stats.projects}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                  <span className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Core Expertise</span>
                  <span className="text-2xl font-bold text-gradient-primary">{stats.experience}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Education</span>
                  <span className="text-sm font-bold bg-gray-100 px-4 py-2 rounded-full text-gray-800">{stats.education}</span>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -top-8 w-20 h-20 rounded-3xl flex items-center justify-center text-primary shadow-xl border border-gray-200 bg-white"
              >
                <Smartphone size={32} />
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-10 bottom-10 w-20 h-20 rounded-3xl flex items-center justify-center text-secondary shadow-xl border border-gray-200 bg-white"
              >
                <Database size={32} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 flex flex-col gap-10"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent5 mb-2 flex items-center gap-3">
              <Terminal size={18} /> My Story
            </h2>
            <h3 className="text-5xl lg:text-7xl font-black leading-tight mb-4 text-gray-900">
              Engineering with <br />
              <span className="text-gradient">Purpose.</span>
            </h3>
            
            <div className="space-y-8 text-gray-600 text-lg md:text-xl leading-relaxed font-light max-w-[700px]">
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
