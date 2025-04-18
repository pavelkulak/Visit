import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-mono text-blueprint-100">{name}</span>
        <span className="text-xs font-mono text-blueprint-300">{level}%</span>
      </div>
      <div className="h-2 bg-blueprint-800 border border-blueprint-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay * 0.1 + 0.3 }}
          className="h-full bg-blueprint-300"
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;