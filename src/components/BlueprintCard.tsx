import React from "react";
import { motion } from "framer-motion";

interface BlueprintCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const BlueprintCard: React.FC<BlueprintCardProps> = ({
  title,
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className={`blueprint-card relative p-5 border border-blueprint-300 rounded-md bg-blueprint-900/50 backdrop-blur-sm ${className}`}
    >
      <div className="absolute -top-3 left-4 bg-blueprint-800 px-2 py-0.5 border border-blueprint-300 rounded text-xs font-mono uppercase tracking-wider text-blueprint-100">
        {title}
      </div>
      <div className="pt-2">{children}</div>
    </motion.div>
  );
};

export default BlueprintCard;
