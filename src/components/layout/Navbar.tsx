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
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className={`absolute inset-0 transition-opacity duration-500 ${isScrolled ? 'glass opacity-100' : 'opacity-0'}`} />
      
      <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
        <a href="#" className="text-2xl font-black tracking-tighter text-white group flex items-center gap-1">
          RK<span className="text-primary group-hover:text-secondary transition-colors">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-white/[0.03] px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social / CTA */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4">
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={18} />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={18} />
            </a>
          </div>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 text-sm"
          >
            Collaborate
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass border-t border-white/5 mt-3 absolute w-full"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-primary"
            >
              Let's Collaborate
            </a>
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer">
                <FaGithub size={24} className="text-gray-400 hover:text-white" />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin size={24} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
