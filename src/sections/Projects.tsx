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
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BlueprintCard title={project.title} delay={index}>
                <p className="text-blueprint-100 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blueprint-800 border border-blueprint-600 rounded text-xs font-mono text-blueprint-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blueprint-300 hover:text-blueprint-200 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  {project.web && (
                    <a
                      href={project.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blueprint-300 hover:text-blueprint-200 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
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
