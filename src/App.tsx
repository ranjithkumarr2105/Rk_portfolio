import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WhyWorkWithMe from './components/sections/WhyWorkWithMe';
import About from './components/sections/About';
import HowIBuildSoftware from './components/sections/HowIBuildSoftware';
import FeaturedProject from './components/sections/FeaturedProject';
import FreelanceProjects from './components/sections/FreelanceProjects';
import Contact from './components/sections/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-transparent text-gray-900 selection:bg-primary/30 relative">
      
      {/* Premium Global Mesh Background */}
      <div className="mesh-global" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent3 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <WhyWorkWithMe />
        <About />
        <HowIBuildSoftware />
        <FeaturedProject />
        <FreelanceProjects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
