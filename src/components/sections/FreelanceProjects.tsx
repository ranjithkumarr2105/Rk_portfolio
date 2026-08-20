import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Activity, Layers, Target, ShieldCheck } from 'lucide-react';

const FreelanceProjects = () => {
  const { freelanceProjects } = portfolioData;

  const icons = [
    <Activity size={24} className="text-accent1" />,
    <Target size={24} className="text-secondary" />,
    <Layers size={24} className="text-accent2" />,
    <ShieldCheck size={24} className="text-primary" />
  ];

  return (
    <section id="freelance" className="py-32 w-full relative z-10 overflow-hidden bg-black/40">
      {/* Distinct Section Aurora */}
      <div className="absolute inset-0 aurora-freelance opacity-30 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Client <span className="text-gradient">Engagements.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            Real-world applications delivered for independent clients, prioritizing scalability, robust architectures, and deep business value.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
              >
                {/* 3D Tilt Mockup Side */}
                <div 
                  className="w-full lg:w-1/2 relative perspective-1000 h-[400px] flex justify-center items-center"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => {
                    mouseX.set(0);
                    mouseY.set(0);
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <motion.div 
                    style={{
                      rotateX: useMotionTemplate`${mouseY}deg`,
                      rotateY: useMotionTemplate`${mouseX}deg`,
                    }}
                    animate={{ rotateX: 0, rotateY: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2rem] overflow-hidden glass-card p-2 border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transform-gpu"
                  >
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-[1.5rem]" />
                     {/* Glass Reflection Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 mix-blend-overlay pointer-events-none rounded-[1.5rem]" />
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {icons[idx % icons.length]}
                    </div>
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-400">{project.type}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-col gap-6 mb-10 text-gray-300">
                    <p className="text-lg font-light leading-relaxed">
                      <strong className="text-white font-semibold">Problem: </strong>{project.problem}
                    </p>
                    <p className="text-lg font-light leading-relaxed">
                      <strong className="text-white font-semibold">Solution: </strong>{project.solution}
                    </p>
                    <div className="pl-4 border-l-2 border-white/10 mt-2">
                      <p className="text-sm font-medium text-gray-400">
                        {project.architecture}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Key Value Delivered</h4>
                    <p className="text-white font-medium bg-white/5 p-4 rounded-xl border border-white/10">
                      {project.impact}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-4 py-2 text-xs font-semibold text-gray-300 bg-white/[0.03] border border-white/10 rounded-full hover:bg-white/10 transition-colors cursor-default">
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
