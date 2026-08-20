import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Search, PenTool, Code2, TestTube, Rocket, Wrench } from 'lucide-react';
import { FaFigma } from 'react-icons/fa';

const icons = [
  <Search size={20} />,
  <PenTool size={20} />,
  <FaFigma size={20} />,
  <Code2 size={20} />,
  <TestTube size={20} />,
  <Rocket size={20} />,
  <Wrench size={20} />
];

const HowIBuildSoftware = () => {
  const { workflow } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="workflow" className="py-32 w-full relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-accent3 mb-4">Engineering Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            How I Build <span className="text-gradient">Software.</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Static background line */}
          <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5" />
          
          {/* Animated fill line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent3 origin-top"
          />

          <div className="flex flex-col gap-16 relative z-10">
            {workflow.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout on Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Icon Node */}
                  <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-background border-2 border-white/10 flex items-center justify-center text-gray-400 z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1, backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
                      className="w-full h-full rounded-full flex items-center justify-center bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    >
                      {icons[idx]}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}
                  >
                    <div className="glass-card p-8 hover-glow transition-all duration-300">
                      <h4 className="text-xl font-bold text-white mb-2">{item.step}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIBuildSoftware;
