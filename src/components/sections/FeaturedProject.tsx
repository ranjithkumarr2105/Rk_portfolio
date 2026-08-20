import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { FaGithub } from 'react-icons/fa';
import { Layers, Database, Smartphone } from 'lucide-react';

const FeaturedProject = () => {
  const { featuredProject: project } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the active index based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // We have 5 screenshots. latest goes from 0 to 1.
    // 0 to 0.2 = index 0
    // 0.2 to 0.4 = index 1
    // ...
    const index = Math.min(Math.floor(latest * project.screenshots.length), project.screenshots.length - 1);
    setActiveIndex(index);
  });

  return (
    <section id="featured" className="w-full relative z-10 bg-background overflow-hidden border-y border-white/5 pt-32">
      
      {/* Distinct Section Aurora */}
      <div className="absolute inset-0 aurora-featured opacity-40 mix-blend-screen pointer-events-none" />

      {/* Intro text */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 mb-32">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-accent2 mb-6"
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
            className="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-2xl mx-auto"
          >
            {project.subtitle}
          </motion.p>
        </div>
      </div>

      {/* SCROLLING SHOWCASE - The container is tall so we can scroll through it */}
      <div ref={containerRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24 h-full py-20">
            
            {/* Left Side: Storytelling Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center h-full relative z-20">
              {project.screenshots.map((shot: any, idx: number) => {
                const isActive = activeIndex === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      y: isActive ? 0 : 50,
                      scale: isActive ? 1 : 0.9,
                      filter: isActive ? "blur(0px)" : "blur(10px)",
                      pointerEvents: isActive ? "auto" : "none"
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                      {shot.title}
                    </h3>
                    <p className="text-xl text-gray-400 leading-relaxed font-light">
                      {shot.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side: CSS Device Mockup */}
            <div className="w-full lg:w-1/2 flex justify-center items-center h-full relative z-20">
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="device-mockup w-[280px] h-[580px] md:w-[320px] md:h-[680px] relative border-[12px] border-black rounded-[50px] shadow-[0_0_80px_rgba(245,158,11,0.2)] bg-black"
              >
                <div className="device-notch" />
                <div className="device-glass" />
                
                {/* Images inside the mockup */}
                {project.screenshots.map((shot: any, idx: number) => {
                  const isActive = activeIndex === idx;
                  return (
                    <motion.img
                      key={idx}
                      src={shot.image}
                      alt={shot.title}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 1.1,
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full object-cover object-top rounded-[32px]"
                    />
                  );
                })}
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Details Area below the scroll section */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 pb-32 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="glass-card p-10 flex flex-col gap-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-accent2">The Problem</h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.problem}</p>
          </div>
          <div className="glass-card p-10 flex flex-col gap-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-accent1">The Solution</h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.solution}</p>
          </div>
        </div>

        {/* Architecture & Tech */}
        <div className="glass-card p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tl from-accent2/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
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

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-8 px-6 py-3 rounded-full bg-white/10 text-white font-bold flex items-center justify-center gap-3 hover:bg-white transition-colors hover:text-black w-max"
              >
                <FaGithub size={20} /> View Source Code
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 bg-white/5 p-3 rounded-xl border border-white/5">
                    <Smartphone size={16} className="text-accent3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string, idx: number) => (
                  <span key={idx} className="px-4 py-2 text-sm font-medium text-white/80 bg-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
