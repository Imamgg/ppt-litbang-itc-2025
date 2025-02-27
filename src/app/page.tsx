"use client";

import PixelCard from "@/components/ui/PixelCard";
import { Flex } from "@radix-ui/themes";
import Lottie from "lottie-react";
import technology from "../components/lottie/technology.json";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../components/Text/TypewriterEffect";
import BounceCards from "@/components/ui/BounceCards";
import TeamSection from "@/components/section/TeamSection";
import Jumbotron from "@/components/section/Jumbotron";
import WebTimelineSection from "@/components/section/WebTimelineSection";
import Proker from "@/components/section/Proker";


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

  const images = ["https://picsum.photos/400/400?grayscale", "https://picsum.photos/500/500?grayscale", "https://picsum.photos/600/600?grayscale", "https://picsum.photos/700/700?grayscale", "https://picsum.photos/300/300?grayscale"];

  const transformStyles = ["rotate(5deg) translate(-150px)", "rotate(0deg) translate(-70px)", "rotate(-5deg)", "rotate(5deg) translate(70px)", "rotate(-5deg) translate(150px)"];

  return (
    <div className="snap-y snap-mandatory">
      <Jumbotron />
      {/* <Flex className="w-full h-screen snap-start px-20" align="center" justify="between">
        <TypewriterEffect words={words} cursorClassName="bg-[#6894b9]" />
        <motion.div className="w-1/3" initial={{ opacity: 0, scale: 0.5, translateY: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, scale: 1, translateY: 0 }}>
          <Lottie animationData={technology} loop={true}></Lottie>
        </motion.div>
      </Flex>
      <Flex className="w-full h-screen snap-start">
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={false}
        />
      </Flex> */}
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
