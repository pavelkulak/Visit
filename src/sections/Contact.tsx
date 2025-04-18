import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, MessageSquare } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import BlueprintCard from "../components/BlueprintCard";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <SectionTitle title="Контакты" subtitle="Связаться со мной" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <BlueprintCard title="Местоположение" className="h-full">
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-blueprint-300 mr-3 mt-1" size={18} />
                <div>
                  <p className="text-white font-mono">Местоположение</p>
                  <p className="text-blueprint-100">Саратов, Россия</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="text-blueprint-300 mr-3 mt-1" size={18} />
                <div>
                  <p className="text-white font-mono">Email</p>
                  <a
                    href="mailto:kulak-pavel@yandex.ru"
                    className="text-blueprint-100 hover:text-white transition-colors"
                  >
                    kulak-pavel@yandex.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="text-blueprint-300 mr-3 mt-1" size={18} />
                <div>
                  <p className="text-white font-mono">Телефон</p>
                  <a
                    href="tel:+71234567890"
                    className="text-blueprint-100 hover:text-white transition-colors"
                  >
                    +7 (919) 827-8448
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Send
                  className="text-blueprint-300 mr-3 mt-1"
                  size={18}
                />
                <div>
                  <p className="text-white font-mono">Telegram</p>
                  <a
                    href="https://t.me/pahsafistov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueprint-100 hover:text-white transition-colors"
                  >
                    @pahsafistov
                  </a>
                </div>
              </li>
            </ul>
          </BlueprintCard>

          <BlueprintCard title="Написать сообщение" className="h-full">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-blueprint-100 font-mono text-sm mb-1"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-blueprint-800 border border-blueprint-600 rounded text-white focus:border-blueprint-300 focus:outline-none focus:ring-1 focus:ring-blueprint-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-blueprint-100 font-mono text-sm mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-blueprint-800 border border-blueprint-600 rounded text-white focus:border-blueprint-300 focus:outline-none focus:ring-1 focus:ring-blueprint-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-blueprint-100 font-mono text-sm mb-1"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-blueprint-800 border border-blueprint-600 rounded text-white focus:border-blueprint-300 focus:outline-none focus:ring-1 focus:ring-blueprint-300"
                  ></textarea>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full flex justify-center items-center px-4 py-2 bg-blueprint-700 hover:bg-blueprint-600 border border-blueprint-300 rounded text-white font-mono transition-colors"
              >
                <Send size={16} className="mr-2" />
                Отправить сообщение
              </motion.button>
            </form>
          </BlueprintCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
