import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { CheckCircle2, Zap, Layout, BrainCircuit, Activity, LineChart } from 'lucide-react';

const icons = [
  <Activity size={24} className="text-primary" />,
  <Layout size={24} className="text-accent" />,
  <Zap size={24} className="text-orange" />,
  <BrainCircuit size={24} className="text-emerald" />,
  <LineChart size={24} className="text-cyan" />,
  <CheckCircle2 size={24} className="text-purple" />
];

const WhyWorkWithMe = () => {
  const { whyWorkWithMe } = portfolioData;

  return (
    <section id="why-me" className="py-[120px] w-full relative z-10 overflow-hidden border-t border-white/40">
      
      {/* Ambient Section Glows */}
      <div className="ambient-glow glow-why-me" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-[55%]"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-gradient-accent mb-6">The Engineering Mindset</h2>
            <h3 className="text-section-title">
              Why work <br />
              <span className="text-gradient-premium">with me.</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-[45%]"
          >
            <p className="text-slate-600 text-[20px] leading-[1.6] font-medium max-w-[600px]">
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
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card p-10 group relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity transform group-hover:scale-110 duration-500 text-slate-900 pointer-events-none">
                {icons[idx % icons.length]}
              </div>
              <div className="w-16 h-16 rounded-[20px] bg-white border border-slate-200 flex items-center justify-center mb-8 shadow-[0_4px_10px_rgba(0,0,0,0.05)] group-hover:scale-110 transition-transform duration-300">
                {icons[idx % icons.length]}
              </div>
              <h4 className="text-[24px] font-bold leading-tight text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-600 text-[18px] leading-[1.6] font-medium">
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
