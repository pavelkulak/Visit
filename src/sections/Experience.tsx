import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import BlueprintCard from "../components/BlueprintCard";
import { experiences } from "../data/experienceData";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <SectionTitle title="Опыт" subtitle="Профессиональный путь" />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8 last:mb-0"
            >
              <BlueprintCard title={exp.company} delay={index}>
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <h3 className="text-blueprint-200 font-mono text-lg">
                    {exp.position}
                  </h3>
                  <div className="flex items-center text-blueprint-300 text-sm font-mono">
                    <Calendar size={14} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-blueprint-100 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blueprint-800 border border-blueprint-600 rounded text-xs font-mono text-blueprint-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </BlueprintCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
