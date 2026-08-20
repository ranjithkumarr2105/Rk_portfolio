
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-background pt-16 pb-8 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300 hover-glow"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300 hover-glow"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300 hover-glow"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-gray-500 text-sm mb-6 text-center">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
