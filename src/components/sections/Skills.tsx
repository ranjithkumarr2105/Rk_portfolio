
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const categories = [
    { title: "Programming", items: skills.programming, color: "from-blue-500/20 to-blue-600/5" },
    { title: "Android Development", items: skills.android, color: "from-green-500/20 to-green-600/5" },
    { title: "Backend Architecture", items: skills.backend, color: "from-purple-500/20 to-purple-600/5" },
    { title: "Frontend & Tools", items: [...skills.frontend, ...skills.tools], color: "from-pink-500/20 to-pink-600/5" }
  ];

  return (
    <section id="skills" className="py-24 w-full relative z-10 bg-black/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="glass-card p-8 group hover-glow transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
