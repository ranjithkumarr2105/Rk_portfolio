import { motion, useScroll, useMotionValueEvent, useMotionTemplate, useMotionValue } from 'framer-motion';
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

  // Mouse Parallax for Phone Mockup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  }

  return (
    <section id="featured" className="w-full relative z-10 py-[120px] overflow-visible border-y border-white/50">
      
      {/* Ambient Section Glows */}
      <div className="ambient-glow glow-featured-1" />
      <div className="ambient-glow glow-featured-2" />

      {/* Intro Header */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 mb-16">
        <div className="flex flex-col items-start md:items-center md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-2 rounded-full bg-white/80 border border-slate-200 text-xs font-bold tracking-widest uppercase text-slate-500 mb-6 shadow-sm backdrop-blur-md"
          >
            Featured Product
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-section-title mb-6"
          >
            {project.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[18px] md:text-[20px] text-slate-600 font-medium max-w-[600px] leading-[1.6]"
          >
            {project.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Cinematic Storytelling Scroll Showcase (40/60 Split) */}
      <div ref={containerRef} className="h-[400vh] relative w-full mb-[120px]">
        
        {/* Sticky Viewport */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center gap-12 h-full py-16">
            
            {/* Left Column (40%): Feature Text Story */}
            <div className="w-full md:w-[40%] flex flex-col justify-center h-[40vh] md:h-[60vh] relative z-20">
              {project.screenshots.map((shot: any, idx: number) => {
                const isActive = activeIndex === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      y: isActive ? 0 : (idx > activeIndex ? 40 : -40),
                      filter: isActive ? "blur(0px)" : "blur(12px)",
                      pointerEvents: isActive ? "auto" : "none"
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex flex-col justify-center max-w-[400px]"
                  >
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-14 h-14 bg-slate-900 rounded-[20px] shadow-[0_10px_20px_rgba(15,23,42,0.2)] flex items-center justify-center text-white font-bold text-lg">
                        0{idx + 1}
                      </div>
                      <div className="h-[2px] flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                    </div>
                    <h3 className="text-[32px] md:text-[40px] font-black mb-6 text-slate-900 leading-[1.1] tracking-tight">
                      {shot.title}
                    </h3>
                    <p className="text-[18px] text-slate-600 leading-[1.6] font-medium">
                      {shot.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column (60%): Sticky Premium iPhone Mockup with Mouse Parallax */}
            <div 
              className="w-full md:w-[60%] flex justify-center items-center h-[50vh] md:h-full relative z-20 perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
            >
              {/* Dynamic glowing backdrop behind phone based on scroll index */}
              <motion.div 
                animate={{ backgroundColor: ["#5B7FFF", "#7C5CFF", "#F97316", "#2DD4BF", "#9D4EDD"][activeIndex % 5] }}
                transition={{ duration: 1 }}
                className="absolute w-[300px] h-[500px] blur-[100px] opacity-20 rounded-full"
              />

              <motion.div 
                style={{
                  rotateX: useMotionTemplate`${mouseY}deg`,
                  rotateY: useMotionTemplate`${mouseX}deg`,
                  scale: 1,
                }}
                className="device-mockup w-[240px] h-[492px] md:w-[320px] md:h-[656px] relative flex-shrink-0 transform-gpu"
              >
                <div className="dynamic-island" />
                
                {/* Glossy Screen Reflection */}
                <div className="absolute inset-0 z-40 pointer-events-none rounded-[40px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 -rotate-12 translate-y-[-50%] scale-150" />
                </div>
                
                {/* Images inside the mockup: strictly object-fit contain to prevent cropping */}
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
                      className="absolute inset-0 w-full h-full object-contain bg-white rounded-[36px] p-1"
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
          <div className="premium-card p-10 lg:p-12 flex flex-col gap-5">
            <h3 className="text-sm font-bold tracking-widest uppercase text-gradient-orange">The Problem</h3>
            <p className="text-slate-700 text-[18px] leading-[1.6] font-medium">{project.problem}</p>
          </div>
          <div className="premium-card p-10 lg:p-12 flex flex-col gap-5">
            <h3 className="text-sm font-bold tracking-widest uppercase text-gradient-emerald">The Solution</h3>
            <p className="text-slate-700 text-[18px] leading-[1.6] font-medium">{project.solution}</p>
          </div>
        </div>

        {/* Architecture & Tech */}
        <div className="premium-card p-10 lg:p-16 relative">
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h3 className="text-[24px] font-bold mb-6 flex items-center gap-3 text-slate-900">
                <Layers className="text-primary" size={24} /> Architecture
              </h3>
              <p className="text-slate-600 leading-[1.6] mb-12 font-medium text-[18px]">{project.architecture}</p>
              
              <h3 className="text-[24px] font-bold mb-6 flex items-center gap-3 text-slate-900">
                <Database className="text-purple" size={24} /> Impact & Challenges
              </h3>
              <p className="text-slate-900 font-bold mb-3 text-[20px]">{project.impact}</p>
              <p className="text-slate-600 text-[16px] leading-[1.6] font-medium">{project.challenges}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-12 px-8 py-4 rounded-[20px] bg-slate-900 text-white font-bold flex items-center justify-center gap-3 hover:-translate-y-1 transition-all shadow-[0_10px_30px_rgba(15,23,42,0.15)] hover:shadow-[0_15px_40px_rgba(91,127,255,0.4)] w-max"
              >
                <FaGithub size={20} /> View Source Code
              </a>
            </div>

            <div>
              <h3 className="text-[24px] font-bold mb-8 border-b border-slate-200 pb-4 text-slate-900">Key Features</h3>
              <ul className="grid grid-cols-1 gap-6 mb-12">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-5 text-[16px] text-slate-700 font-bold">
                    <div className="w-12 h-12 rounded-[16px] bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      <Smartphone size={20} className="text-slate-500" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-[24px] font-bold mb-8 border-b border-slate-200 pb-4 text-slate-900">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech: string, idx: number) => (
                  <span key={idx} className="px-5 py-2.5 text-[14px] font-bold text-slate-700 bg-white border border-slate-200 rounded-[14px] shadow-sm cursor-default hover:-translate-y-0.5 transition-transform">
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
