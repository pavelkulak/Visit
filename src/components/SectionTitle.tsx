import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-blueprint font-bold text-white uppercase tracking-widest">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-blueprint-200 font-mono text-sm">{subtitle}</p>
      )}
      <div className="mt-2 mx-auto w-20 h-0.5 bg-blueprint-300"></div>
    </motion.div>
  );
};

export default SectionTitle;
