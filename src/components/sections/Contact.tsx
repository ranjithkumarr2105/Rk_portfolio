
import { motion } from 'framer-motion';
import { Mail, MapPin, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const { email, github, linkedin, location } = portfolioData.personal;

  return (
    <section id="contact" className="py-24 w-full relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="flex flex-col gap-6">
              <a href={`mailto:${email}`} className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Email</span>
                  <span className="font-medium text-white">{email}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Location</span>
                  <span className="font-medium text-white">{location}</span>
                </div>
              </div>

              <div className="flex gap-4 mt-4 pt-6 border-t border-white/10">
                <a href={github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <FaGithub size={20} />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 flex flex-col items-center justify-center text-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <Download size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Resume</h3>
              <p className="text-gray-400 mb-8 max-w-xs mx-auto">
                Download my complete resume to see detailed information about my experience and skills.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-primary/50 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Download PDF <Download size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
