import { motion } from "framer-motion";
import { Project } from "@/types/resume";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

interface PortfolioProps {
  data: {
    projects: Project[];
  };
}

export default function Portfolio({ data }: PortfolioProps) {
  return (
    <section
      id="portfolio"
      className="py-20 bg-primary relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-cover bg-fixed opacity-10"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-bold text-accent mb-8 text-center relative inline-block">
            Portfolio
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/30 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:bg-secondary/50 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Parallax Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>

                <img
                  src={`/images/${project.image}`}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-lg mb-4 transition-transform duration-500 hover:scale-110"
                />

                <h3 className="text-2xl font-semibold text-text mb-2 flex items-center gap-2">
                  <FaCode className="text-accent" /> {project.title}
                </h3>
                <p className="text-lg text-textMuted mb-2">
                  {project.category}
                </p>

                <div className="flex justify-end">
                  <FaExternalLinkAlt className="text-textMuted hover:text-accent transition duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
