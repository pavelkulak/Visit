import React from "react";
import { motion } from "framer-motion";
import { Code, Laptop, Sparkles } from "lucide-react";
import BlueprintCard from "../components/BlueprintCard";
import SectionTitle from "../components/SectionTitle";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <SectionTitle title="Обо мне" subtitle="Технические характеристики" />

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BlueprintCard title="Обо мне" className="h-full">
              <p className="text-blueprint-100 mb-4">
                Привет! Меня зовут Павел, я frontend-разработчик из Саратова.
                Специализируюсь на создании исключительных цифровых продуктов с
                фокусом на адаптивный дизайн и чистый код.
              </p>
              <p className="text-blueprint-100 mb-4">
              Первоначально строил карьеру в археологии — участвовал в раскопках 
              и научных проектах. Однако всё изменилось, когда мне предложили создать 
              сайт для одной из компаний. Этот опыт вдохновил меня на переход в IT. 
              С тех пор я последовательно развиваюсь в веб-разработке, проходя буткемпы, 
              онлайн-курсы и реализуя проекты на практике.
              </p>
              <p className="text-blueprint-100">
                В настоящее время я работаю стажёром-разработчиком в Apex Nova
                Tech, где участвую в создании современных веб-приложений с
                использованием React, TypeScript и других передовых технологий.
              </p>
            </BlueprintCard>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <BlueprintCard title="Технический фокус" delay={1}>
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-blueprint-300">
                  <Code size={20} />
                </div>
                <div>
                  <h3 className="text-white font-mono text-lg mb-2">
                    Чистый код
                  </h3>
                  <p className="text-blueprint-100 text-sm">
                    Пишу чистый, поддерживаемый и хорошо документированный код,
                    следуя лучшим практикам и отраслевым стандартам.
                  </p>
                </div>
              </div>
            </BlueprintCard>

            <BlueprintCard title="Адаптивный дизайн" delay={2}>
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-blueprint-300">
                  <Laptop size={20} />
                </div>
                <div>
                  <h3 className="text-white font-mono text-lg mb-2">
                    Pixel Perfect
                  </h3>
                  <p className="text-blueprint-100 text-sm">
                    Создаю адаптивные макеты, которые безупречно работают на
                    всех устройствах и размерах экранов.
                  </p>
                </div>
              </div>
            </BlueprintCard>

            <BlueprintCard title="Инновации" delay={3}>
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-blueprint-300">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="text-white font-mono text-lg mb-2">
                    Современный подход
                  </h3>
                  <p className="text-blueprint-100 text-sm">
                    Постоянно изучаю и внедряю новые технологии и подходы для
                    создания лучшего пользовательского опыта.
                  </p>
                </div>
              </div>
            </BlueprintCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
