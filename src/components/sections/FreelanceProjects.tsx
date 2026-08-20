import { motion } from 'framer-motion';
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
    <section id="freelance" className="py-32 w-full relative z-10 bg-black/60 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Client <span className="text-gradient-subtle">Engagements.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Real-world applications delivered for independent clients, prioritizing scalability, robust architectures, and deep business value.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          {freelanceProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/0 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <motion.div 
                    whileHover={{ rotateY: isEven ? 5 : -5, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative rounded-[2rem] overflow-hidden glass-card p-2 border-white/10 group-hover:border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform-gpu"
                  >
                     <img src={project.image} alt={project.title} className="w-full h-auto rounded-[1.5rem] object-cover" />
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
