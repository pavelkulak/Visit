import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-blueprint-700">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-blueprint-300 font-mono text-sm mb-4 md:mb-0">
            &copy; {currentYear} Павел Кулаков. Все права защищены.
          </p>

          <p className="text-blueprint-300 font-mono text-sm flex items-center">
            Сделано с <Heart size={14} className="mx-1 text-blueprint-500" /> в
            России
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
