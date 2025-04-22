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

        <div className="flex justify-center items-center max-w-md mx-auto">
          <BlueprintCard title="Местоположение" className="h-full w-full">
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
                <Send className="text-blueprint-300 mr-3 mt-1" size={18} />
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
