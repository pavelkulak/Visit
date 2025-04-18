import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import BlueprintCard from "../components/BlueprintCard";
import { projects } from "../data/projectsData";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <SectionTitle title="Проекты" subtitle="Мои разработки" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BlueprintCard title={`Проект ${project.id}`} className="h-full">
                <h3 className="text-white font-mono text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-blueprint-100 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-blueprint-800 border border-blueprint-600 rounded text-xs font-mono text-blueprint-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 mt-auto pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blueprint-300 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  <a
                    href={project.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueprint-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </BlueprintCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
