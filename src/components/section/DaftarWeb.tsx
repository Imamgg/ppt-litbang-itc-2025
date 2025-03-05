"use client";

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
  decorationType: "squares" | "circles";
  delay: number;
}

const Card = ({ title, subtitle, position, decorationType, delay }: CardProps) => {
  const [isVisible, setIsVisible] = useState(false);

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
    >
      <div className="w-[380px] h-[420px] rounded-[32px] overflow-hidden backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl">
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 flex gap-2">
          {decorationType === "squares" ? (
            <>
              <div className="w-8 h-8 rounded-2xl border border-white/10 bg-white/5" />
              <div className="w-8 h-8 rounded-2xl border border-white/10 bg-white/5" />
              <div className="w-8 h-8 rounded-2xl border border-white/10 bg-white/5" />
              <div className="w-8 h-8 rounded-2xl border border-white/10 bg-white/5" />
            </>
          ) : (
            <>
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5" />
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5" />
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5" />
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5" />
            </>
          )}
        </div>

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
      subtitle: "Mental Model to Understand Flexbox",
      position: { left: "15%", top: "15%", rotate: -5 },
      decorationType: "squares" as const,
      delay: 0,
    },
    {
      title: "Web Tecnotaiment",
      subtitle: "Understanding Next.js Data Fetching",
      position: { left: "40%", top: "25%", rotate: 0 },
      decorationType: "circles" as const,
      delay: 200,
    },
    {
      title: "E-Commerce",
      subtitle: "Thoughts and mental models about front-end development.",
      position: { left: "65%", top: "15%", rotate: 5 },
      decorationType: "squares" as const,
      delay: 400,
    },
  ];

  return (
    <div className="relative w-full h-screen">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
