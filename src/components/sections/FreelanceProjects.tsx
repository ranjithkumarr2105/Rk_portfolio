import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Activity, Layers, Target, ShieldCheck } from 'lucide-react';

const FreelanceProjects = () => {
  const { freelanceProjects } = portfolioData;

  const icons = [
    <Activity size={24} className="text-secondary" />,
    <Target size={24} className="text-cyan" />,
    <Layers size={24} className="text-primary" />,
    <ShieldCheck size={24} className="text-emerald" />
  ];

  return (
    <section id="freelance" className="py-[120px] w-full relative z-10 overflow-hidden border-t border-white/50">
      
      {/* Ambient Section Glows */}
      <div className="ambient-glow glow-projects" />

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-section-title mb-6"
          >
            Client <span className="text-gradient-premium">Engagements.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-[20px] max-w-[700px] mx-auto font-medium leading-[1.6]"
          >
            Real-world applications delivered for independent clients, prioritizing scalability, robust architectures, and deep business value.
          </motion.p>
        </div>

        <div className="flex flex-col gap-[120px]">
          {freelanceProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            // Tilt effect mechanics
            const mouseX = useMotionValue(0);
            const mouseY = useMotionValue(0);

            function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
              const { left, top, width, height } = currentTarget.getBoundingClientRect();
              mouseX.set(clientX - left - width / 2);
              mouseY.set(clientY - top - height / 2);
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center group`}
              >
                {/* 3D Tilt Mockup Side */}
                <div 
                  className="w-full lg:w-1/2 relative perspective-1000 h-[400px] md:h-[500px] flex justify-center items-center"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => {
                    mouseX.set(0);
                    mouseY.set(0);
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[32px] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <motion.div 
                    style={{
                      rotateX: useMotionTemplate`${mouseY}deg`,
                      rotateY: useMotionTemplate`${mouseX}deg`,
                    }}
                    animate={{ rotateX: 0, rotateY: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full max-w-[600px] aspect-[4/3] rounded-[32px] overflow-hidden premium-card p-2 transform-gpu"
                  >
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-[24px]" />
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-[20px] bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      {icons[idx % icons.length]}
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-500">{project.type}</span>
                  </div>
                  
                  <h3 className="text-[36px] md:text-[48px] font-black mb-8 text-slate-900 leading-[1.1] tracking-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-col gap-6 mb-10 text-slate-600">
                    <p className="text-[18px] font-medium leading-[1.6]">
                      <strong className="text-slate-900 font-bold">Problem: </strong>{project.problem}
                    </p>
                    <p className="text-[18px] font-medium leading-[1.6]">
                      <strong className="text-slate-900 font-bold">Solution: </strong>{project.solution}
                    </p>
                    <div className="pl-6 border-l-[3px] border-primary/30 mt-2">
                      <p className="text-[15px] font-semibold text-slate-500">
                        {project.architecture}
                      </p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Key Value Delivered</h4>
                    <p className="text-[18px] text-slate-900 font-bold bg-white p-6 rounded-[20px] border border-slate-200 shadow-sm">
                      {project.impact}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-5 py-2 text-[14px] font-bold text-slate-600 bg-white border border-slate-200 rounded-xl shadow-sm transition-colors cursor-default hover:bg-slate-50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FreelanceProjects;
