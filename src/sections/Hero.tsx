import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="blueprint-grid absolute inset-0 z-0"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-1 border border-blueprint-300 rounded-full bg-blueprint-900/40 backdrop-blur-sm"
          >
            <span className="text-sm font-mono text-blueprint-100">
              Frontend Разработчик
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-blueprint font-bold text-white mb-6 tracking-wider"
          >
            Павел <span className="text-blueprint-300">Кулаков</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-blueprint-100 text-lg mb-10"
          >
            Создаю пользовательские интерфейсы с точностью и увлечением.
            Фокусируюсь на создании отзывчивых, доступных и красивых
            веб-приложений.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blueprint-700 hover:bg-blueprint-600 border border-blueprint-300 rounded-md text-white font-mono transition-colors"
            >
              Мои проекты
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent hover:bg-blueprint-800/50 border border-blueprint-300 rounded-md text-blueprint-100 hover:text-white font-mono transition-colors"
            >
              Связаться со мной
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="https://github.com/pavelkulak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blueprint-300 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/pavelkulakov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blueprint-300 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="/resume/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blueprint-300 hover:text-white transition-colors"
            >
              <FileText size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="text-blueprint-300 hover:text-white transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
