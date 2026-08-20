
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 w-full relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left group hover-glow transition-all duration-300 mx-auto w-full"
            >
              <div className="w-20 h-20 shrink-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <Award size={40} />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-green-400">Verified</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm">{cert.details}</p>
                <div className="mt-4 text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  Issuer: {cert.issuer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
