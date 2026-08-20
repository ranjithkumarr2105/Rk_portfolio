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
    // 5 screenshots -> 5 stops
    const index = Math.min(Math.floor(latest * project.screenshots.length), project.screenshots.length - 1);
    setActiveIndex(index);
  });

  return (
    <section id="featured" className="w-full relative z-10 bg-white border-y border-gray-100 pt-24 pb-24 overflow-visible">
      
      {/* Distinct Section Aurora (Orange+Violet) */}
      <div className="absolute inset-0 aurora-featured opacity-100 pointer-events-none" />

      {/* Intro Header */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 mb-16">
        <div className="flex flex-col items-start md:items-center md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-accent2/10 border border-accent2/20 text-xs font-bold tracking-widest uppercase text-accent2 mb-6 shadow-sm"
          >
            Featured Product
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 leading-tight"
          >
            {project.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 font-light max-w-[600px] leading-relaxed"
          >
            {project.subtitle}
          </motion.p>
        </div>
      </div>

      {/* SCROLLING SHOWCASE: Sticky Phone + Scrolling Text */}
      <div ref={containerRef} className="h-[400vh] relative w-full mb-24">
        
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center gap-12 h-full py-16">
            
            {/* Left Column: Feature Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center h-[50vh] md:h-[60vh] relative z-20">
              {project.screenshots.map((shot: any, idx: number) => {
                const isActive = activeIndex === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      y: isActive ? 0 : (idx > activeIndex ? 30 : -30),
                      filter: isActive ? "blur(0px)" : "blur(4px)",
                      pointerEvents: isActive ? "auto" : "none"
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col justify-center max-w-[450px]"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-900 font-bold mb-6 shadow-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
                      {shot.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                      {shot.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Sticky iPhone Mockup */}
            <div className="w-full md:w-1/2 flex justify-center items-center h-full relative z-20">
              <motion.div 
                className="device-mockup w-[260px] h-[533px] md:w-[320px] md:h-[656px] relative shadow-2xl flex-shrink-0"
              >
                <div className="dynamic-island" />
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
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0 w-full h-full object-contain bg-white rounded-[36px]"
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

      {/* Details Area */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass-card p-10 flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-accent2">The Problem</h3>
            <p className="text-gray-700 text-lg leading-relaxed font-light">{project.problem}</p>
          </div>
          <div className="glass-card p-10 flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-accent1">The Solution</h3>
            <p className="text-gray-700 text-lg leading-relaxed font-light">{project.solution}</p>
          </div>
        </div>

        {/* Architecture & Tech */}
        <div className="glass-card p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-accent2/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                <Layers className="text-primary" size={20} /> Architecture
              </h3>
              <p className="text-gray-600 leading-relaxed mb-10 font-light">{project.architecture}</p>
              
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                <Database className="text-secondary" size={20} /> Impact & Challenges
              </h3>
              <p className="text-gray-800 font-semibold mb-3 text-lg">{project.impact}</p>
              <p className="text-gray-600 text-sm leading-relaxed font-light">{project.challenges}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-10 px-8 py-3.5 rounded-2xl bg-gray-900 text-white font-bold flex items-center justify-center gap-3 hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl w-max"
              >
                <FaGithub size={18} /> View Source Code
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900 border-b border-gray-100 pb-3">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                      <Smartphone size={14} className="text-gray-500" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold mb-6 text-gray-900 border-b border-gray-100 pb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string, idx: number) => (
                  <span key={idx} className="px-4 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm">
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
