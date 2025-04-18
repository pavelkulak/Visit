import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const GearScroll: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001,
  });

  const rotateRange = useTransform(smoothProgress, [0, 1], [0, 720]);

  return (
    <>
      <motion.img
        src="/gears/middle-big-gear.svg"
        className="fixed rounded-full transform-gpu will-change-transform origin-center bg-transparent hidden md:block h-[100px] w-[100px] top-[93px] left-[85px]"
        style={{ rotate: rotateRange }}
        alt="Middle big gear"
      />
      <motion.img
        src="/gears/top-left-gear.svg"
        className="fixed rounded-full transform-gpu will-change-transform origin-center bg-transparent hidden md:block h-[80px] w-[80px] top-[65px] left-[22px]"
        style={{ rotate: rotateRange }}
        alt="Top left gear"
      />
      <motion.img
        src="/gears/middle-small-gear.svg"
        className="fixed rounded-full transform-gpu will-change-transform origin-center bg-transparent hidden md:block h-[40px] w-[40px] top-[123px] left-[115px]"
        style={{ rotate: rotateRange }}
        alt="Middle small gear"
      />
      <motion.img
        src="/gears/bottom-right-gear.svg"
        className="fixed rounded-full transform-gpu will-change-transform origin-center bg-transparent hidden md:block h-[200px] w-[200px] top-[83px] left-[62px]"
        style={{ rotate: rotateRange }}
        alt="Bottom right gear"
      />
    </>
  );
};

export default GearScroll;
