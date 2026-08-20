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
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent3 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Persistent Animated Aurora Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-[-50%] mesh-bg opacity-40 mix-blend-screen" />
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center w-full">
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
