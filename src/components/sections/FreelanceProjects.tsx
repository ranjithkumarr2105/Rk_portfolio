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
    <section id="freelance" className="py-24 w-full relative z-10 overflow-hidden bg-white/30 border-t border-gray-200">
      {/* Distinct Section Aurora */}
      <div className="absolute inset-0 aurora-freelance opacity-100 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-[72px] font-black mb-8 text-gray-900"
          >
            Client <span className="text-gradient">Engagements.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-xl md:text-2xl max-w-[800px] mx-auto font-light leading-relaxed"
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
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <motion.div 
                    style={{
                      rotateX: useMotionTemplate`${mouseY}deg`,
                      rotateY: useMotionTemplate`${mouseX}deg`,
                    }}
                    animate={{ rotateX: 0, rotateY: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full max-w-[600px] aspect-[4/3] rounded-[2rem] overflow-hidden glass-card p-2 border-white shadow-xl transform-gpu bg-white"
                  >
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-[1.5rem]" />
                     {/* Glass Reflection Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-50 mix-blend-overlay pointer-events-none rounded-[1.5rem]" />
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      {icons[idx % icons.length]}
                    </div>
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-500">{project.type}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-col gap-6 mb-12 text-gray-600">
                    <p className="text-lg font-light leading-relaxed">
                      <strong className="text-gray-900 font-semibold">Problem: </strong>{project.problem}
                    </p>
                    <p className="text-lg font-light leading-relaxed">
                      <strong className="text-gray-900 font-semibold">Solution: </strong>{project.solution}
                    </p>
                    <div className="pl-6 border-l-2 border-primary/30 mt-2">
                      <p className="text-sm font-medium text-gray-500">
                        {project.architecture}
                      </p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Key Value Delivered</h4>
                    <p className="text-gray-900 font-semibold bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                      {project.impact}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-5 py-2 text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-200 rounded-full hover:bg-white transition-colors cursor-default shadow-sm">
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
