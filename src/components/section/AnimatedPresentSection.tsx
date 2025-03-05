"use client";

import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const SpringTransition = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  repeat: Infinity,
};

const AnimatedPresentSection: React.FC = () => {
  const [isPresent, setIspresent] = useState<boolean>(true);
  const texts: string[] = ["Hello", "WEBSITE", "LOMBA", "PENELITIAN", "WEBSITE", "LOMBA", "PENELITIAN", "LITBANG"];
  const emojis: any[] = ["👋", "🌐", "🎮", "🧪", "🌐", "🎮", "🧪", null];
  const emojisAnimation = [
    (emoji: string) => (
      <motion.span
        whileInView={{
          rotate: [0, 12, -12],
          transition: {
            duration: 0.3,
            ...SpringTransition,
          },
        }}
      >
        {emoji}
      </motion.span>
    ),
    (emoji: string) => (
      <motion.span
        whileInView={{
          y: [5, 0, -5],
          rotateZ: [0, 360, 0],
          transition: {
            duration: 0.3,
            ...SpringTransition,
          },
        }}
      >
        {emoji}
      </motion.span>
    ),
    (emoji: string) => (
      <motion.span
        whileInView={{
          y: [5, 0, -5],
          x: [0, -10, 10],
          transition: {
            duration: 0.3,
            ...SpringTransition,
          },
        }}
      >
        {emoji}
      </motion.span>
    ),
    (emoji: string) => (
      <motion.span
        whileInView={{
          y: [5, 0, -5],
          rotateZ: [0, 360, 0],
          transition: {
            duration: 0.3,
            ...SpringTransition,
          },
        }}
      >
        {emoji}
      </motion.span>
    ),
    (emoji: string) => (
      <motion.span
        whileInView={{
          y: [5, 0, -5],
          rotateZ: [0, 360, 0],
          transition: {
            duration: 0.3,
            ...SpringTransition,
          },
        }}
      >
        {emoji}
      </motion.span>
    ),
    (emoji: string) => (
      <motion.span
        whileInView={{
          y: [5, 0, -5],
          x: [0, -10, 10],
          transition: {
            duration: 0.3,
            ...SpringTransition,
          },
        }}
      >
        {emoji}
      </motion.span>
    ),
    (emoji: string) => (
      <motion.span
        whileInView={{
          y: [5, 0, -5],
          rotateZ: [0, 360, 0],
          transition: {
            duration: 0.3,
            ...SpringTransition,
          },
        }}
      >
        {emoji}
      </motion.span>
    ),
    (emoji: string) => null,
  ];
  const [presentText, setPresentText] = useState<string>("");
  const [presentEmoji, setPresentEmoji] = useState(null);
  const setText = (text: string) => {
    setPresentText(text);
  };

  const setEmoji = (emoji: any) => {
    setPresentEmoji(emoji);
  };

  useIsomorphicLayoutEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < texts.length) {
        setText(texts[i]);
        setEmoji(emojisAnimation[i](emojis[i]));
        i++;
      } else {
        setIspresent(false);
      }
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <AnimatePresence>
      {isPresent && (
        <motion.div className="snap-start w-full h-screen flex justify-center items-center">
          <motion.h1
            key="present"
            exit={{
              y: -500,
              transition: {
                duration: 1.7,
                type: "spring",
                damping: 15,
                stiffness: 100,
              },
            }}
            className="list-item text-3xl"
          >
            {presentText}
            {presentEmoji}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedPresentSection;
