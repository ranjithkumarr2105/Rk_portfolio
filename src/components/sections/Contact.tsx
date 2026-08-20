import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const { email, github, linkedin, location, availability } = portfolioData.personal;

  return (
    <section id="contact" className="py-[140px] w-full relative z-10 overflow-hidden bg-white/50">
      {/* Distinct Section Aurora */}
      <div className="absolute inset-0 aurora-contact opacity-100 pointer-events-none" />
      
      {/* Massive subtle background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-gray-900/[0.03] whitespace-nowrap pointer-events-none select-none">
        COLLABORATE
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black mb-10 leading-tight text-gray-900">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-gradient">Amazing Together.</span>
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-[700px] mx-auto font-light leading-relaxed">
            I am currently exploring new opportunities and open to collaborating on ambitious products. Expect a response within 24 hours.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Availability Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 glass-card p-14 flex flex-col justify-center bg-white border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-10 border-b border-gray-100 pb-6">Current Availability</h3>
            <ul className="flex flex-col gap-8">
              {availability.map((item, idx) => (
                <li key={idx} className="flex items-center gap-6 text-lg text-gray-700">
                  <div className="w-3 h-3 rounded-full bg-accent1 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
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
            className="w-full lg:w-1/2 flex flex-col gap-8"
          >
            <a 
              href={`mailto:${email}`} 
              className="glass-card p-12 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all duration-300 h-full relative overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 mb-8 group-hover:scale-110 transition-transform shadow-sm">
                  <Mail size={36} />
                </div>
                <h4 className="text-xl font-bold text-gray-500 mb-4">Send me an email</h4>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center gap-3">
                  {email} <ArrowUpRight size={28} className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </p>
              </div>
            </a>
            
            <div className="flex gap-8 h-1/3">
              <a href={github} target="_blank" rel="noreferrer" className="w-1/2 glass-card p-8 flex flex-col items-center justify-center group hover:-translate-y-1 transition-all bg-white border border-gray-200 shadow-sm hover:shadow-md">
                <FaGithub size={32} className="text-gray-500 group-hover:text-gray-900 mb-4 transition-colors" />
                <span className="font-bold text-gray-900">GitHub</span>
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer" className="w-1/2 glass-card p-8 flex flex-col items-center justify-center group hover:-translate-y-1 transition-all bg-white border border-gray-200 shadow-sm hover:shadow-md">
                <FaLinkedin size={32} className="text-gray-500 group-hover:text-primary mb-4 transition-colors" />
                <span className="font-bold text-gray-900">LinkedIn</span>
              </a>
            </div>
          </motion.div>

        </div>
        
        <div className="mt-20 text-center flex items-center justify-center gap-3 text-gray-600 font-medium text-lg">
          <MapPin size={20} /> Based in {location}
        </div>
      </div>
    </section>
  );
};

export default Contact;
