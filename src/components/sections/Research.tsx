
import { motion } from 'framer-motion';
import { BookOpen, Presentation } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Research = () => {
  const { research } = portfolioData;

  return (
    <section id="research" className="py-24 w-full relative z-10 bg-black/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Research & <span className="text-gradient">Analysis</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {research.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card p-8 group hover-glow transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500 transform translate-x-10 -translate-y-10" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">{item.title}</h3>
                
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-wider border border-primary/20">
                    {item.event}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Presentation size={12} /> {item.category}
                  </span>
                </div>

                <ul className="flex flex-col gap-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-gray-300 text-sm leading-relaxed flex gap-2">
                      <span className="text-secondary mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
