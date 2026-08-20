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
    { name: 'Featured Project', href: '#featured' },
    { name: 'Projects', href: '#freelance' },
    { name: 'About', href: '#about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 relative z-10 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="w-[200px] flex justify-start">
          <a href="#" className="text-2xl font-black tracking-tighter text-gray-900 group flex items-center gap-1">
            RK<span className="text-primary group-hover:text-secondary transition-colors">.</span>
          </a>
        </div>

        {/* Center: Desktop Nav (Mathematically Centered) */}
        <div className="flex-1 hidden md:flex justify-center">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Social / CTA */}
        <div className="w-[200px] hidden md:flex justify-end items-center gap-6">
          <div className="flex gap-4">
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-gray-900 text-white font-semibold hover:bg-primary transition-colors duration-300 text-sm shadow-md"
          >
            Collaborate
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="w-1/3 flex justify-end md:hidden">
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 mt-4 absolute w-full left-0 right-0 shadow-xl"
        >
          <div className="container mx-auto px-8 py-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
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
            <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer">
                <FaGithub size={24} className="text-gray-500 hover:text-gray-900" />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin size={24} className="text-gray-500 hover:text-gray-900" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
