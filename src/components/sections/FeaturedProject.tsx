import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { FaGithub } from 'react-icons/fa';
import { Layers, Zap, Shield, Database, Smartphone } from 'lucide-react';

const FeaturedProject = () => {
  const { featuredProject: project } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="featured" ref={containerRef} className="py-32 w-full relative z-10 bg-black">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-1/2 h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-1/2 h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-white mb-6"
          >
            Featured Product
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            {project.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gradient font-medium mb-10"
          >
            {project.subtitle}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <FaGithub size={20} /> View Source Code
          </motion.a>
        </div>

        {/* Cinematic Screenshots Showcase */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-32 h-[600px] md:h-[700px] relative">
          
          <motion.div style={{ y: y1 }} className="z-20 w-64 md:w-80 rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-[0_0_50px_rgba(59,130,246,0.3)] bg-gray-900">
            <img src={project.screenshots.landing} alt="Landing Screen" className="w-full h-auto" />
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="z-10 w-56 md:w-72 rounded-[2rem] overflow-hidden border-8 border-gray-900 shadow-2xl bg-gray-900 opacity-60 md:absolute md:left-[10%] xl:left-[15%] hidden md:block">
            <img src={project.screenshots.customer} alt="Customer View" className="w-full h-auto" />
          </motion.div>

          <motion.div style={{ y: y2 }} className="z-30 w-60 md:w-72 rounded-[2rem] overflow-hidden border-8 border-gray-900 shadow-2xl bg-gray-900 opacity-80 md:absolute md:right-[5%] xl:right-[15%] hidden md:block">
            <img src={project.screenshots.ownerMenu} alt="Owner Menu" className="w-full h-auto" />
          </motion.div>
        </div>

        {/* Deep Dive Details */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col gap-6"
          >
            <h3 className="text-sm font-bold tracking-widest uppercase text-accent2 flex items-center gap-2">
              <Zap size={16} /> The Problem
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.problem}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col gap-6"
          >
            <h3 className="text-sm font-bold tracking-widest uppercase text-accent1 flex items-center gap-2">
              <Shield size={16} /> The Solution
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.solution}</p>
          </motion.div>
        </div>

        {/* Architecture & Tech */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 lg:p-16 relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Layers className="text-primary" /> Architecture
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">{project.architecture}</p>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="text-secondary" /> Impact & Challenges
              </h3>
              <p className="text-gray-300 font-medium mb-4">{project.impact}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{project.challenges}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
                    <Smartphone size={16} className="text-accent3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 text-sm font-medium text-white/80 bg-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProject;
