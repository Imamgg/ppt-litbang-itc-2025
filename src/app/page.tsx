"use client";

import { AnimatePresence, motion } from "framer-motion";
import TeamSection from "@/components/section/TeamSection";
import WebTimelineSection from "@/components/section/WebTimelineSection";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import VelocityScroll from "@/components/registry/magicui/VelocityScroll";
import { IconCloud } from "@/components/registry/magicui/IconCloud";
import { ProkerSection } from "@/components/section/ProkerSection";

const slugs: string[] = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function HomePage() {
  const [isPresent, setIspresent] = useState<boolean>(true);
  const [presentText, setPresentText] = useState<string>("HELLO 👋");
  const texts: string[] = ["WEBSITE 🌐", "LOMBA 🎮", "PENELITIAN 🧪", "WEBSITE 🌐", "LOMBA 🎮", "PENELITIAN 🧪", "LITBANG"];
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

  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <div className="snap-y snap-mandatory">
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
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="snap-start flex flex-col overflow-x-hidden items-center justify-center relative w-full">
        <div className="w-full h-2/3 flex items-end justify-center gap-10 py-24">
          <IconCloud images={images} />
        </div>
        <div className="flex items-end w-full">
          <VelocityScroll texts={["DIVISI", "LITBANG"]} velocity={10} parallaxClassName="w-full" scrollerClassName="w-full" numCopies={30} />
        </div>
      </div>
      <div className="w-full h-screen snap-start flex justify-center items-center">
        <ProkerSection />
      </div>
      <TeamSection />
      <WebTimelineSection />
    </div>
  );
}
