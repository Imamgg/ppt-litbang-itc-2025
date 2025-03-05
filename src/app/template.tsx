"use client";

import { animatePageIn } from "@/utils/Animations";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div className="z-50">
      <motion.div id="banner-1" className="min-h-screen bg-white border-x-2 border-black fixed top-0 left-0 w-1/4 flex justify-center items-center text-6xl z-50">
        <motion.span
          whileInView={{
            rotateZ: 360,
            transition: {
              delay: 0.1,
              duration: 0.75,
            },
          }}
        >
          🌐
        </motion.span>
      </motion.div>
      <motion.div id="banner-2" className="min-h-screen bg-white border-x-2 border-black fixed top-0 left-1/4 w-1/4 flex justify-center items-center text-6xl z-50">
        <motion.span
          whileInView={{
            y: [50, -50, 0],
            opacity: [0, 1, 1],
            scale: [0.5, 1.5, 1],
            transition: {
              delay: 0.3,
              duration: 0.75,
            },
          }}
        >
          🎮
        </motion.span>
      </motion.div>
      <motion.div id="banner-3" className="min-h-screen bg-white border-x-2 border-black fixed top-0 left-2/4 w-1/4 flex justify-center items-center text-6xl z-50">
        <motion.span
          whileInView={{
            rotateY: [90, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.5,
              duration: 0.75,
            },
          }}
        >
          💻
        </motion.span>
      </motion.div>
      <motion.div id="banner-4" className="min-h-screen bg-white border-x-2 border-black fixed top-0 left-3/4 w-1/4 flex justify-center items-center text-6xl z-50">
        <motion.span
          whileInView={{
            rotateZ: 360,
            transition: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              duration: 0.75,
            },
          }}
        >
          🧪
        </motion.span>
      </motion.div>
      {children}
    </div>
  );
}
