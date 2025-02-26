"use client";

// import PixelCard from "@/components/ui/PixelCard";
import { Flex } from "@radix-ui/themes";
import Lottie from "lottie-react";
import technology from "../components/lottie/technology.json";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../components/Text/TypewriterEffect";
import TeamSection from "@/components/section/TeamSection";
import Jumbotron from "@/components/section/Jumbotron";
import WebTimelineSection from "@/components/section/WebTimelineSection";
import Proker from "@/components/section/Proker";
import { Suspense } from "react";

export default function HomePage() {
  const words = [
    {
      text: "Rancangan",
    },
    {
      text: "Kerja",
    },
    {
      text: "Divisi",
      className: "text-[#6894b9] dark:text-[#6894b9]",
    },
    {
      text: "Litbang",
      className: "text-[#6894b9] dark:text-[#6894b9]",
    },
    {
      text: "2025",
    },
  ];

  return (
    <div className="snap-y snap-mandatory">
      <Suspense fallback={<>Loading ...</>}>
        <Jumbotron />
      </Suspense>
      <Flex className="w-full h-screen snap-start px-20" align="center" justify="between">
        <TypewriterEffect words={words} cursorClassName="bg-[#6894b9]" />
        <motion.div className="w-1/3" initial={{ opacity: 0, scale: 0.5, translateY: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, scale: 1, translateY: 0 }}>
          <Lottie animationData={technology} loop={true}></Lottie>
        </motion.div>
      </Flex>
      {/* <IntroductionSection /> */}
      <TeamSection />
      {/* <Flex className="w-full h-screen snap-start p-4">
        <PixelCard variant="pink" className="w-full h-full" speed={100} colors="white">
          hover
        </PixelCard>
      </Flex> */}
      <WebTimelineSection />
      <Proker />
    </div>
  );
}
