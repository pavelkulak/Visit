import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-blueprint-700">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-blueprint-300 font-mono text-sm mb-4 md:mb-0">
            &copy; {currentYear} Павел Кулаков.
          </p>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
