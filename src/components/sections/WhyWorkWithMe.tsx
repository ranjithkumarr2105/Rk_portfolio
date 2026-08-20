import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { CheckCircle2, Zap, Layout, BrainCircuit, Activity, LineChart } from 'lucide-react';

const icons = [
  <Activity size={24} className="text-primary" />,
  <Layout size={24} className="text-secondary" />,
  <Zap size={24} className="text-orange" />,
  <BrainCircuit size={24} className="text-emerald" />,
  <LineChart size={24} className="text-cyan" />,
  <CheckCircle2 size={24} className="text-tertiary" />
];

const WhyWorkWithMe = () => {
  const { whyWorkWithMe } = portfolioData;

  return (
    <section id="why-me" className="py-[120px] w-full relative z-10 overflow-hidden">
      
      {/* Section Identity Lights */}
      <div className="section-light light-why-me-1" />
      <div className="section-light light-why-me-2" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-6">The Engineering Mindset</h2>
            <h3 className="heading-section">
              Why work <br />
              <span className="text-gradient">with me.</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <p className="text-gray-600 text-xl leading-relaxed font-light max-w-[600px]">
              I focus on delivering software that is robust, scalable, and built for production. Here is what I bring to the table when joining an engineering team.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyWorkWithMe.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="premium-glass-card p-10 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity transform group-hover:scale-110 duration-500 text-gray-900 pointer-events-none">
                {icons[idx % icons.length]}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-shadow">
                {icons[idx % icons.length]}
              </div>
              <h4 className="heading-card mb-4">{item.title}</h4>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
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
