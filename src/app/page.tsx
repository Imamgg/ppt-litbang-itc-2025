"use client";

import { AnimatePresence, motion } from "framer-motion";
import TeamSection from "@/components/section/TeamSection";
import WebTimelineSection from "@/components/section/WebTimelineSection";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

export default function HomePage() {
  const [isPresent, setIspresent] = useState<boolean>(true);
  const [presentText, setPresentText] = useState<string>("HELLO");
  const texts = ["WEBSITE", "LOMBA", "PENELITIAN", "PENGEMBANGAN", "WEBSITE", "LOMBA", "PENELITIAN", "PENGEMBANGAN", "LITBANG"];
  const setText = (text: string) => {
    setPresentText(text);
  };

  useIsomorphicLayoutEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < texts.length) {
        setText(texts[i]);
        i++;
      } else {
        setIspresent(false);
      }
    }, 150);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory">
      <AnimatePresence>
        {isPresent && (
          <motion.div className="snap-start w-full h-screen flex justify-center items-center">
            <motion.h1
              key="present"
              exit={{
                y: "100%",
                transition: {
                  duration: 2,
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                },
              }}
              className="list-item text-3xl"
            >
              {presentText}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <TeamSection />
      <WebTimelineSection />
    </div>
  );
}
