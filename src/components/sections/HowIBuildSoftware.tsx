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
      
      {/* Ambient Section Glows */}
      <div className="ambient-glow glow-workflow" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-gradient-emerald mb-6">Engineering Workflow</h2>
          <h3 className="text-section-title">
            How I Build <span className="text-gradient-premium">Software.</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Static background line */}
          <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px] bg-slate-200/50 rounded-full" />
          
          {/* Animated fill line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 w-[4px] bg-gradient-to-b from-emerald via-cyan to-primary origin-top rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]"
          />

          <div className="flex flex-col gap-24 relative z-10">
            {workflow.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout on Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Icon Node */}
                  <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-slate-400 z-20 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1, backgroundColor: "#2DD4BF", color: "#FFF" }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
                      className="w-full h-full rounded-full flex items-center justify-center bg-slate-100 text-slate-500 shadow-inner"
                    >
                      {icons[idx]}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pl-24' : 'md:pr-24 text-left md:text-right'}`}
                  >
                    <div className="premium-card p-10">
                      <h4 className="text-[24px] font-bold leading-tight text-slate-900 mb-4">{item.step}</h4>
                      <p className="text-slate-600 text-[18px] leading-[1.6] font-medium">
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
