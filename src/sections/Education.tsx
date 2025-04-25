import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import BlueprintCard from "../components/BlueprintCard";
import { education } from "../data/educationData";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <SectionTitle title="Образование" subtitle="Академический опыт" />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8 last:mb-0"
            >
              <BlueprintCard title={edu.institution} delay={index}>
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <h3 className="text-blueprint-200 font-mono text-lg">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-blueprint-300 text-sm font-mono">
                    <Calendar size={14} className="mr-1" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-blueprint-100">{edu.description}</p>
                )}
              </BlueprintCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
