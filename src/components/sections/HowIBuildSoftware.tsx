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
    <section id="workflow" className="py-[120px] w-full relative z-10 overflow-hidden" ref={containerRef}>
      
      {/* Section Identity Lights */}
      <div className="section-light light-workflow" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-emerald mb-6">Engineering Workflow</h2>
          <h3 className="heading-section">
            How I Build <span className="text-gradient">Software.</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Static background line */}
          <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200" />
          
          {/* Animated fill line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-emerald to-cyan origin-top"
          />

          <div className="flex flex-col gap-20 relative z-10">
            {workflow.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-10 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout on Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Icon Node */}
                  <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-gray-400 z-20 shadow-sm">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1, backgroundColor: "#10B981", color: "#FFF" }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
                      className="w-full h-full rounded-full flex items-center justify-center bg-gray-100 text-gray-500 shadow-inner"
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
                    className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pl-20' : 'md:pr-20 text-left md:text-right'}`}
                  >
                    <div className="premium-glass-card p-10">
                      <h4 className="heading-card mb-4">{item.step}</h4>
                      <p className="text-gray-600 text-lg leading-relaxed font-light">
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
