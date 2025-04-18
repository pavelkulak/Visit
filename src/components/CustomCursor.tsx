import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.closest('a') || target.closest('button')) {
        setLinkHovered(true);
      }
    };

    const handleLinkHoverEnd = () => {
      setLinkHovered(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', updatePosition);
    window.addEventListener('mouseleave', () => setHidden(true));
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleLinkHoverStart);
    document.addEventListener('mouseout', handleLinkHoverEnd);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', updatePosition);
      window.removeEventListener('mouseleave', () => setHidden(true));
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleLinkHoverStart);
      document.removeEventListener('mouseout', handleLinkHoverEnd);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 12,
      y: position.y - 12,
      opacity: hidden ? 0 : 0.6,
      scale: clicked ? 0.8 : 1,
    },
    link: {
      x: position.x - 16,
      y: position.y - 16,
      opacity: hidden ? 0 : 0.8,
      scale: 1.2,
    }
  };

  const cursorStyle = linkHovered ? "link" : "default";

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 z-50 pointer-events-none w-6 h-6 bg-blueprint-300 rounded-full mix-blend-difference"
        variants={cursorVariants}
        animate={cursorStyle}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 z-50 pointer-events-none w-8 h-8 border-2 border-blueprint-100 rounded-full opacity-40"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          opacity: hidden ? 0 : 0.4,
          transform: `scale(${clicked ? 1.2 : linkHovered ? 1.4 : 1})`,
          transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
        }}
      />
    </>
  );
};

export default CustomCursor;