"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  position: {
    left: string;
    top: string;
    rotate: number;
  };
  decorationType: "squares" | "circles" | "lines";
  delay: number;
}

const Card = ({ title, subtitle, position, decorationType, delay }: CardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        left: position.left,
        top: position.top,
        rotate: `${position.rotate}deg`,
        transformOrigin: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[380px] h-[420px] rounded-[32px] overflow-hidden backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl">
        {/* Decorative elements */}
        <motion.div className={cn("absolute top-4 left-4 flex gap-2 transition-all duration-1000")}>
          {decorationType === "lines" && (
            <>
              <motion.div animate={isHovered ? { y: 100 } : { y: 0 }} className="w-20 h-16 rounded-2xl border border-white/10 bg-white/5" />
              <motion.div animate={isHovered ? { y: 35 } : { y: 0 }} className="w-20 h-32 rounded-2xl border border-white/10 bg-white/5" />
              <motion.div animate={isHovered ? { y: 85 } : { y: 0 }} className="w-20 h-20 rounded-2xl border border-white/10 bg-white/5" />
              <motion.div animate={isHovered ? { y: 100 } : { y: 0 }} className="w-20 h-16 rounded-2xl border border-white/10 bg-white/5" />
            </>
          )}
          {decorationType === "circles" && (
            <motion.div animate={isHovered ? { rotateZ: 45 } : { rotateZ: 0 }}>
              {Array.from({ length: 10 }).map((_, index) => {
                const angle = (index / 10) * 2 * Math.PI;

                const x = 160 * Math.cos(angle);
                const y = 160 * Math.sin(angle);

                return (
                  <motion.div
                    key={index}
                    className="absolute rounded-full"
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      x: -60 / 2,
                      y: -60 / 2,
                    }}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: x,
                      y: y,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      scale: {
                        duration: 0.3,
                        type: "spring",
                      },
                    }}
                  />
                );
              })}
            </motion.div>
          )}
          {decorationType === "squares" && (
            <>
              <div>
                <motion.div
                  animate={
                    isHovered
                      ? {
                          scale: [1.2, 1],
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 50,
                          },
                        }
                      : {}
                  }
                  className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 mb-2"
                />
                <motion.div
                  animate={
                    isHovered
                      ? {
                          scale: [1.2, 1],
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 50,
                            delay: 0.1,
                          },
                        }
                      : {}
                  }
                  className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5"
                />
              </div>
              <div>
                <motion.div
                  animate={
                    isHovered
                      ? {
                          scale: [1.2, 1],
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 50,
                            delay: 0.2,
                          },
                        }
                      : {}
                  }
                  className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 mb-2"
                />
                <motion.div
                  animate={
                    isHovered
                      ? {
                          scale: [1.2, 1],
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 50,
                            delay: 0.3,
                          },
                        }
                      : {}
                  }
                  className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5"
                />
              </div>
            </>
          )}
        </motion.div>

        {/* Content */}
        <div className="absolute bottom-8 left-8">
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-400 text-sm max-w-[200px]">{subtitle ? subtitle : ""}</p>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      </div>
    </motion.div>
  );
};

export default function DaftarWeb() {
  const cards = [
    {
      title: "Website UKMFT-ITC",
      subtitle: "Website UKMFT-ITC interaktif, responsive dan modern",
      position: { left: "15%", top: "15%", rotate: -5 },
      decorationType: "lines" as const,
      delay: 0,
    },
    {
      title: "Web Tecnotaiment",
      subtitle: "Website web tecnotaiment interaktif, responsive dan modern",
      position: { left: "40%", top: "25%", rotate: 0 },
      decorationType: "circles" as const,
      delay: 200,
    },
    {
      title: "E-Commerce",
      subtitle: "Website e-commerce interaktif, responsive dan modern",
      position: { left: "65%", top: "15%", rotate: 5 },
      decorationType: "squares" as const,
      delay: 400,
    },
  ];

  return (
    <div className="relative w-full h-screen snap-start">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
