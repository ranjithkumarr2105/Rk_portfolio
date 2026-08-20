import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { CheckCircle2, Zap, Layout, BrainCircuit, Activity, LineChart } from 'lucide-react';

const icons = [
  <Activity size={24} className="text-primary" />,
  <Layout size={24} className="text-secondary" />,
  <Zap size={24} className="text-accent2" />,
  <BrainCircuit size={24} className="text-accent1" />,
  <LineChart size={24} className="text-accent3" />,
  <CheckCircle2 size={24} className="text-white" />
];

const WhyWorkWithMe = () => {
  const { whyWorkWithMe } = portfolioData;

  return (
    <section id="why-me" className="py-32 w-full relative z-10 overflow-hidden">
      {/* Distinct Section Aurora */}
      <div className="absolute inset-0 aurora-why-me opacity-50 mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4">The Engineering Mindset</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Why work <br />
              <span className="text-gradient">with me.</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              I focus on delivering software that is robust, scalable, and built for production. Here is what I bring to the table when joining an engineering team.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMe.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 group hover-glow transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                {icons[idx % icons.length]}
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:bg-white/10 transition-colors">
                {icons[idx % icons.length]}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
