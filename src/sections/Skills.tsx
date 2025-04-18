import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import BlueprintCard from "../components/BlueprintCard";
import SkillBar from "../components/SkillBar";
import { skills } from "../data/skillsData";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <SectionTitle title="Навыки" subtitle="Технические возможности" />

        <div className="grid md:grid-cols-2 gap-8">
          <BlueprintCard title="Технические навыки" className="h-full">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.id}
                  name={skill.name}
                  level={skill.level}
                  delay={index}
                />
              ))}
            </div>
          </BlueprintCard>

          <div>
            <BlueprintCard title="Стек технологий" className="h-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {skills.map((skill, index) => {
                  const IconComponent =
                    LucideIcons[skill.icon as keyof typeof LucideIcons];

                  return (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-blueprint-800 border border-blueprint-600 flex items-center justify-center mb-2">
                        {IconComponent && (
                          <IconComponent
                            className="text-blueprint-300"
                            size={24}
                          />
                        )}
                      </div>
                      <span className="text-blueprint-100 text-sm font-mono text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </BlueprintCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
