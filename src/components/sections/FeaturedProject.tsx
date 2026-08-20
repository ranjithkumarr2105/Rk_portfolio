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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * project.screenshots.length), project.screenshots.length - 1);
    setActiveIndex(index);
  });

  return (
    <section id="featured" className="w-full relative z-10 bg-white overflow-hidden border-y border-gray-200 pt-[140px]">
      
      {/* Distinct Section Aurora (Light Theme) */}
      <div className="absolute inset-0 aurora-featured opacity-100 pointer-events-none" />

      {/* Intro text */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 mb-[140px]">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-5 py-2 rounded-full bg-accent2/10 border border-accent2/20 text-xs font-bold tracking-widest uppercase text-accent2 mb-8 shadow-sm"
          >
            Featured Product
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-[80px] font-black mb-8 text-gray-900 leading-tight"
          >
            {project.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600 font-light max-w-[700px] mx-auto leading-relaxed"
          >
            {project.subtitle}
          </motion.p>
        </div>
      </div>

      {/* SCROLLING SHOWCASE */}
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
                      scale: isActive ? 1 : 0.95,
                      filter: isActive ? "blur(0px)" : "blur(8px)",
                      pointerEvents: isActive ? "auto" : "none"
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex flex-col justify-center max-w-[500px]"
                  >
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
                      {shot.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                      {shot.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side: CSS Device Mockup */}
            <div className="w-full lg:w-1/2 flex justify-center items-center h-full relative z-20">
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="device-mockup w-[280px] h-[580px] md:w-[340px] md:h-[700px] relative"
              >
                <div className="device-notch" />
                <div className="device-glass" />
                
                {/* Images inside the mockup with object-fit: contain to prevent cropping */}
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
                        scale: isActive ? 1 : 1.05,
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full object-contain bg-white rounded-[32px] p-2"
                      onError={(e) => {
                        console.error(`Failed to load image: ${shot.image}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  );
                })}
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Details Area below the scroll section */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 pb-[140px] pt-[140px]">
        <div className="grid lg:grid-cols-2 gap-16 mb-[140px]">
          <div className="glass-card p-12 flex flex-col gap-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-accent2">The Problem</h3>
            <p className="text-gray-700 text-lg leading-relaxed font-light">{project.problem}</p>
          </div>
          <div className="glass-card p-12 flex flex-col gap-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-accent1">The Solution</h3>
            <p className="text-gray-700 text-lg leading-relaxed font-light">{project.solution}</p>
          </div>
        </div>

        {/* Architecture & Tech */}
        <div className="glass-card p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tl from-accent2/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                <Layers className="text-primary" /> Architecture
              </h3>
              <p className="text-gray-600 leading-relaxed mb-10 font-light">{project.architecture}</p>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                <Database className="text-secondary" /> Impact & Challenges
              </h3>
              <p className="text-gray-800 font-semibold mb-4 text-lg">{project.impact}</p>
              <p className="text-gray-600 text-sm leading-relaxed font-light">{project.challenges}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-12 px-8 py-4 rounded-full bg-gray-900 text-white font-bold flex items-center justify-center gap-3 hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl w-max"
              >
                <FaGithub size={20} /> View Source Code
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <div className="w-8 h-8 rounded-full bg-accent3/10 flex items-center justify-center">
                      <Smartphone size={16} className="text-accent3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech: string, idx: number) => (
                  <span key={idx} className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-200 rounded-full shadow-sm">
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
