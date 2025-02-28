"use client";

import { AnimatePresence, motion } from "framer-motion";
import TeamSection from "@/components/section/TeamSection";
import WebTimelineSection from "@/components/section/WebTimelineSection";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { BoxReveal } from "@/registry/magicui/BoxReveal";
import { VelocityScroll } from "@/registry/magicui/VelocityScroll";
import { IconCloud } from "@/registry/magicui/IconCloud";

const slugs = [
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
      <div className="snap-start flex flex-col overflow-x-hidden items-center justify-center relative px-10">
        <div className="w-full h-2/3 flex items-end justify-center gap-10 py-32">
          {/* <div>
            <BoxReveal boxColor="#5046e6" duration={0.5}>
              <h1 className="text-6xl font-bold">RANCANGAN KERJA</h1>
            </BoxReveal>
            <BoxReveal boxColor="#5046e6" duration={0.5}>
              <h1 className="text-6xl font-bold">DIVISI LITBANG</h1>
            </BoxReveal>
            <BoxReveal boxColor="#5046e6" duration={0.5}>
              <h1 className="text-6xl font-bold">UKM-FT ITC 2025</h1>
            </BoxReveal>
          </div> */}
          <IconCloud images={images} />
        </div>
        <div className="flex items-end">
          <VelocityScroll baseVelocity={-2}>LITBANG</VelocityScroll>
        </div>
      </div>
      <TeamSection />
      <WebTimelineSection />
    </div>
  );
}
