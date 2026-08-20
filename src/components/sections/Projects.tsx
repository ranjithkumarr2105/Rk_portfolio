
import { motion } from 'framer-motion';
import { ExternalLink, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 w-full relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A selection of production-ready applications, backend systems, and AI-powered solutions I've built.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center group`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border-white/10 group-hover:border-white/20 transition-all duration-500">
                   <div className="absolute inset-0 bg-card/80 flex items-center justify-center backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors">
                        <FaGithub size={24} />
                      </a>
                      {project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors">
                          <ExternalLink size={24} />
                        </a>
                      )}
                   </div>
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-2">
                  <Activity size={16} className="text-primary" />
                  <span className="text-sm font-semibold tracking-wider uppercase text-primary">{project.category}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {project.title}
                </h3>
                <div className="glass p-6 rounded-xl mb-6 text-gray-300 leading-relaxed shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <p className="relative z-10">{project.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
