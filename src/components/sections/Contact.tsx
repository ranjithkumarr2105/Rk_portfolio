import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const { email, github, linkedin, location, availability } = portfolioData.personal;

  return (
    <section id="contact" className="py-[120px] w-full relative z-10 overflow-hidden border-t border-white/40">
      
      {/* Ambient Section Glows */}
      <div className="ambient-glow glow-contact-1" />
      <div className="ambient-glow glow-contact-2" />
      
      {/* Massive subtle background text */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-slate-900/[0.02] whitespace-nowrap pointer-events-none select-none">
        COLLABORATE
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-section-title mb-8">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-gradient-premium">Amazing Together.</span>
          </h2>
          <p className="text-slate-600 text-[20px] max-w-[600px] mx-auto font-medium leading-[1.6]">
            I am currently exploring new opportunities and open to collaborating on ambitious products. Expect a response within 24 hours.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Availability Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%] premium-card p-12 lg:p-14 flex flex-col justify-center"
          >
            <h3 className="text-[24px] font-bold text-slate-900 mb-10 border-b border-slate-200/60 pb-6">Current Availability</h3>
            <ul className="flex flex-col gap-8">
              {availability.map((item, idx) => (
                <li key={idx} className="flex items-center gap-6 text-slate-700">
                  <div className="w-3 h-3 rounded-full bg-emerald shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  <span className="font-bold text-[18px] tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Direct Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[55%] flex flex-col gap-6"
          >
            <a 
              href={`mailto:${email}`} 
              className="premium-card p-12 flex flex-col items-center justify-center text-center group h-full relative"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-[88px] h-[88px] rounded-[24px] bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-8 group-hover:scale-110 group-hover:text-primary transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                  <Mail size={36} />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Send me an email</h4>
                <p className="text-[28px] md:text-[36px] font-black text-slate-900 group-hover:text-primary transition-colors flex items-center gap-3 tracking-tight">
                  {email} <ArrowUpRight size={28} className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </p>
              </div>
            </a>
            
            <div className="flex gap-6 h-[180px]">
              <a href={github} target="_blank" rel="noreferrer" className="w-1/2 premium-card flex flex-col items-center justify-center group relative">
                <FaGithub size={32} className="text-slate-500 group-hover:text-slate-900 mb-4 transition-colors" />
                <span className="font-bold text-slate-900 text-[15px] tracking-wide">GitHub</span>
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer" className="w-1/2 premium-card flex flex-col items-center justify-center group relative">
                <FaLinkedin size={32} className="text-slate-500 group-hover:text-primary mb-4 transition-colors" />
                <span className="font-bold text-slate-900 text-[15px] tracking-wide">LinkedIn</span>
              </a>
            </div>
          </motion.div>

        </div>
        
        <div className="mt-24 pb-12 text-center flex items-center justify-center gap-3 text-slate-500 font-bold text-[14px] tracking-widest uppercase">
          <MapPin size={18} /> Based in {location}
        </div>
      </div>
    </section>
  );
};

export default Contact;
