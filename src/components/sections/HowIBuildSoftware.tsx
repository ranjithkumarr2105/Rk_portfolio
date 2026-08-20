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
    <section id="workflow" className="py-[120px] w-full relative z-10 overflow-hidden">
      
      {/* Ambient Section Glows */}
      <div className="ambient-glow glow-workflow" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-gradient-emerald mb-6">Engineering Workflow</h2>
          <h3 className="text-[48px] md:text-[64px] lg:text-[72px] font-[900] leading-[1.1] tracking-tighter text-slate-900">
            How I Build <span className="text-gradient-premium">Software.</span>
          </h3>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Static background line (light gray) */}
          <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px] bg-[#D1D5DB] rounded-full" />
          
          {/* Animated fill line (gradient blue/cyan) */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 w-[4px] bg-gradient-to-b from-[#4F7CFF] via-[#7B61FF] to-[#12D8FA] origin-top rounded-full shadow-[0_0_15px_rgba(33,212,253,0.6)] z-10 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
          />

          <div className="flex flex-col gap-24 relative z-20">
            {workflow.map((item, idx) => {
              const isEven = idx % 2 === 0;
              // Calculate at what percentage this icon should activate
              const activationPoint = idx / (workflow.length - 1);
              const start = activationPoint - 0.05;
              const end = activationPoint;
              
              // Icon scale transforms based on scroll progress passing the activation point
              const scale = useTransform(scrollYProgress, 
                [start, end, end + 0.05], 
                [1, 1.2, 1.1]
              );
              
              const bgColor = useTransform(scrollYProgress, 
                [start, end], 
                ["#FFFFFF", "#21D4FD"]
              );
              
              const iconColor = useTransform(scrollYProgress, 
                [start, end], 
                ["#94A3B8", "#FFFFFF"]
              );
              
              const borderColor = useTransform(scrollYProgress, 
                [start, end], 
                ["#D1D5DB", "#5B8CFF"]
              );
              
              const boxShadow = useTransform(scrollYProgress, 
                [start, end], 
                ["none", "0 0 20px rgba(33, 212, 253, 0.5)"]
              );

              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout on Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Icon Node */}
                  <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center z-30">
                    <motion.div 
                      style={{ 
                        scale, 
                        backgroundColor: bgColor, 
                        color: iconColor, 
                        borderColor: borderColor,
                        boxShadow: boxShadow
                      }}
                      className="w-full h-full rounded-full border-[4px] flex items-center justify-center transition-colors"
                    >
                      {icons[idx]}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
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
