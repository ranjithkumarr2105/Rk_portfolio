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
      {/* Floating Glass Navbar */}
      <div className={`w-full max-w-7xl rounded-full flex items-center justify-between px-8 py-4 transition-all duration-500 ${
        isScrolled ? 'bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.05)]' : 'bg-transparent border-transparent'
      }`}>
        
        {/* Left: Logo */}
        <div className="w-[240px] flex justify-start">
          <a href="#" className="text-2xl font-black tracking-tighter text-gray-900 group flex items-center gap-1">
            RK<span className="text-primary group-hover:text-tertiary transition-colors">.</span>
          </a>
        </div>

        {/* Center: Desktop Nav (Perfectly Centered) */}
        <div className="flex-1 hidden md:flex justify-center">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-semibold text-gray-600 hover:text-gray-900 transition-colors tracking-tight relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(79,70,229,0.5)]" />
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Social / Resume / CTA */}
        <div className="w-[240px] hidden md:flex justify-end items-center gap-5">
          <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-transform hover:scale-110">
            <FaGithub size={20} />
          </a>
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-transform hover:scale-110">
            <FaLinkedin size={20} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-[14px] font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-gray-900 text-white font-bold hover:bg-primary transition-all duration-300 text-sm shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.3)] hover:-translate-y-0.5"
          >
            Collaborate
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex justify-end md:hidden">
          <button
            className="text-gray-700 hover:text-gray-900 p-2"
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
          className="md:hidden absolute top-[100px] left-6 right-6 bg-white/95 backdrop-blur-3xl border border-gray-200 rounded-[32px] shadow-2xl overflow-hidden z-50"
        >
          <div className="px-8 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold text-gray-800 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-bold text-gray-800 hover:text-primary transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2"
            >
              Let's Collaborate
            </a>
            <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer">
                <FaGithub size={28} className="text-gray-400 hover:text-gray-900" />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin size={28} className="text-gray-400 hover:text-gray-900" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
