import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const { email, github, linkedin, location, availability } = portfolioData.personal;

  return (
    <section id="contact" className="py-32 w-full relative z-10 overflow-hidden bg-background/80">
      {/* Distinct Section Aurora */}
      <div className="absolute inset-0 aurora-contact opacity-40 mix-blend-screen pointer-events-none" />
      
      {/* Massive subtle background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        COLLABORATE
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-gradient">Amazing Together.</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-light">
            I am currently exploring new opportunities and open to collaborating on ambitious products. Expect a response within 24 hours.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Availability Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 glass-card p-12 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Current Availability</h3>
            <ul className="flex flex-col gap-6">
              {availability.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-accent1 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Direct Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <a 
              href={`mailto:${email}`} 
              className="glass-card p-10 flex flex-col items-center justify-center text-center group hover-glow transition-all duration-300 h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-400 mb-2">Send me an email</h4>
                <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                  {email} <ArrowUpRight size={24} className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </p>
              </div>
            </a>
            
            <div className="flex gap-6 h-1/3">
              <a href={github} target="_blank" rel="noreferrer" className="w-1/2 glass-card p-6 flex flex-col items-center justify-center group hover-glow transition-all">
                <FaGithub size={28} className="text-gray-400 group-hover:text-white mb-3" />
                <span className="font-bold text-white">GitHub</span>
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer" className="w-1/2 glass-card p-6 flex flex-col items-center justify-center group hover-glow transition-all">
                <FaLinkedin size={28} className="text-gray-400 group-hover:text-white mb-3" />
                <span className="font-bold text-white">LinkedIn</span>
              </a>
            </div>
          </motion.div>

        </div>
        
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-gray-500 font-medium">
          <MapPin size={18} /> Based in {location}
        </div>
      </div>
    </section>
  );
};

export default Contact;
