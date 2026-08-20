import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Me', href: '#why-me' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Featured', href: '#featured' },
    { name: 'Projects', href: '#freelance' },
    { name: 'About', href: '#about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-6 ${
        isScrolled ? 'pt-4' : 'pt-8'
      }`}
    >
      <div className={`w-full max-w-7xl rounded-[28px] flex items-center justify-between px-8 py-4 transition-all duration-500 ${
        isScrolled ? 'bg-white/60 backdrop-blur-3xl border border-white/80 shadow-[0_10px_40px_rgba(91,127,255,0.08)]' : 'bg-transparent border-transparent'
      }`}>
        
        {/* Logo */}
        <div className="w-[200px] flex justify-start">
          <a href="#" className="text-3xl font-black tracking-tighter text-slate-900 flex items-center gap-1 group">
            RK<span className="text-gradient-premium opacity-80 group-hover:opacity-100 transition-opacity">.</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="flex-1 hidden md:flex justify-center">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-bold text-slate-600 hover:text-slate-900 transition-colors tracking-tight relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-primary to-cyan transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_12px_rgba(91,127,255,0.6)]" />
              </a>
            ))}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="w-[200px] hidden md:flex justify-end items-center gap-6">
          <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-transform hover:scale-110">
            <FaGithub size={22} />
          </a>
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-transform hover:scale-110">
            <FaLinkedin size={22} />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-[20px] bg-slate-900 text-white font-bold hover:bg-primary transition-all duration-300 text-sm shadow-[0_8px_20px_rgba(15,23,42,0.15)] hover:shadow-[0_8px_25px_rgba(91,127,255,0.4)] hover:-translate-y-1"
          >
            Collaborate
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex justify-end md:hidden">
          <button
            className="text-slate-700 hover:text-slate-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-[100px] left-6 right-6 bg-white/95 backdrop-blur-3xl border border-white/80 rounded-[32px] shadow-2xl overflow-hidden z-50"
        >
          <div className="px-8 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black text-slate-800 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black text-gradient-premium mt-4"
            >
              Let's Collaborate
            </a>
            <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer">
                <FaGithub size={28} className="text-slate-400 hover:text-slate-900" />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin size={28} className="text-slate-400 hover:text-slate-900" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
