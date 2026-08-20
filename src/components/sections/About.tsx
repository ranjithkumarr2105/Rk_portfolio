
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const About = () => {
  const { summary, education } = portfolioData.about;

  return (
    <section id="about" className="py-24 w-full relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {summary}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I specialize in transforming complex requirements into elegant, high-performance solutions. My approach combines deep technical expertise with a keen eye for premium design and user experience.
            </p>
            
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-white">3+</span>
                <span className="text-gray-500 text-sm uppercase tracking-wider">Years Coding</span>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-white">10+</span>
                <span className="text-gray-500 text-sm uppercase tracking-wider">Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={64} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <GraduationCap className="text-primary" size={20} /> Education
              </h3>
              <p className="text-lg font-semibold text-gray-200">{education.degree}</p>
              <p className="text-gray-400">{education.institution}</p>
              <div className="mt-4 flex justify-between items-end text-sm">
                <span className="text-primary font-medium">{education.period}</span>
                <span className="bg-white/10 px-3 py-1 rounded-full font-semibold text-white">CGPA: {education.cgpa}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center gap-3 group hover-glow transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <h4 className="font-semibold text-gray-200 text-sm">Oracle SQL<br/>Certified</h4>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center gap-3 group hover-glow transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <Briefcase size={24} />
                </div>
                <h4 className="font-semibold text-gray-200 text-sm">Freelance<br/>Developer</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
