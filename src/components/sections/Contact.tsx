import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const { email, github, linkedin, location, availability } = portfolioData.personal;

  return (
    <section id="contact" className="py-[120px] w-full relative z-10 overflow-hidden border-t border-gray-100">
      
      {/* Section Identity Lights */}
      <div className="section-light light-contact-1" />
      <div className="section-light light-contact-2" />
      
      {/* Massive subtle background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-gray-900/[0.02] whitespace-nowrap pointer-events-none select-none">
        COLLABORATE
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="heading-section mb-8">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-gradient">Amazing Together.</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-[600px] mx-auto font-light leading-relaxed">
            I am currently exploring new opportunities and open to collaborating on ambitious products. Expect a response within 24 hours.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Availability Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[45%] premium-glass-card p-12 flex flex-col justify-center"
          >
            <h3 className="heading-card mb-10 border-b border-gray-100 pb-6">Current Availability</h3>
            <ul className="flex flex-col gap-8">
              {availability.map((item, idx) => (
                <li key={idx} className="flex items-center gap-6 text-gray-700">
                  <div className="w-3 h-3 rounded-full bg-emerald shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  <span className="font-semibold text-lg tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Direct Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[55%] flex flex-col gap-6"
          >
            <a 
              href={`mailto:${email}`} 
              className="premium-glass-card p-12 flex flex-col items-center justify-center text-center group h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-[20px] bg-white border border-gray-100 flex items-center justify-center text-gray-700 mb-8 group-hover:scale-110 transition-transform shadow-sm">
                  <Mail size={32} />
                </div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Send me an email</h4>
                <p className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-primary transition-colors flex items-center gap-3">
                  {email} <ArrowUpRight size={28} className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </p>
              </div>
            </a>
            
            <div className="flex gap-6 h-1/3">
              <a href={github} target="_blank" rel="noreferrer" className="w-1/2 premium-glass-card p-8 flex flex-col items-center justify-center group">
                <FaGithub size={28} className="text-gray-500 group-hover:text-gray-900 mb-4 transition-colors" />
                <span className="font-bold text-gray-900 text-sm tracking-wide">GitHub</span>
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer" className="w-1/2 premium-glass-card p-8 flex flex-col items-center justify-center group">
                <FaLinkedin size={28} className="text-gray-500 group-hover:text-primary mb-4 transition-colors" />
                <span className="font-bold text-gray-900 text-sm tracking-wide">LinkedIn</span>
              </a>
            </div>
          </motion.div>

        </div>
        
        <div className="mt-20 text-center flex items-center justify-center gap-3 text-gray-500 font-bold text-sm tracking-widest uppercase">
          <MapPin size={16} /> Based in {location}
        </div>
      </div>
    </section>
  );
};

export default Contact;
