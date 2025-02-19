"use client";

import Hyperspeed from "@/components/background/HyperSpeed";
import TeamSection from "@/components/team/TeamSection";
import BlurText from "@/components/Text/BlurText";
import PixelCard from "@/components/ui/PixelCard";
import { cn } from "@/lib/utils";
import { Flex, Section } from "@radix-ui/themes";
import { FaPython, FaVuejs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBun, SiCss3, SiDart, SiFlutter, SiHtml5, SiJavascript, SiLaravel, SiNestjs, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import Lottie from "lottie-react";
import technology from "../components/lottie/technology.json"
import { motion } from "framer-motion";
import { TypewriterEffect } from "../components/Text/TypewriterEffect";
import BounceCards from "@/components/ui/BounceCards";

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
  ]

  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale"
  ];
  
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  return (
    <div className="snap-y snap-mandatory">
      <Section className="w-full h-screen overflow-hidden relative snap-start">
        <Flex direction="column" align="center" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <BlurText delay={50} animateBy="letters" className="text-[5em] font-semibold text-white text-center" text="We Are Litbang" />
          <BlurText animateBy="letters" delay={200} className="text-[5em] font-semibold text-white text-center" text="UKM-FT ITC 2025" />
        </Flex>
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </Section>
      <Flex className="w-full h-screen snap-start px-20" align="center" justify="between">
        <TypewriterEffect words={words} cursorClassName="bg-[#6894b9]" />
        <motion.div
          className="w-1/3"
          initial={{ opacity: 0, scale: 0.5, translateY: 100}}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}>
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
      </Flex>
      {teams.map((team, index) =>
        <TeamSection team={team} key={index} />
      )}
      <Flex className="w-full h-screen snap-start p-4">
        <PixelCard variant="pink" className="w-full h-full" speed={100} colors="white">
          // your card content (use position: absolute)
        </PixelCard>
      </Flex>
    </div>
  );
}

const baseStyleIcon = "w-5 h-5 mr-3 cursor-pointer";
const teams = [
  {
    name: "Maulana Ardiansyah",
    role: "Kepala Divisi Litbang",
    email: "ardicakep81@gmail.com",
    github: "https://github.com/maul112",
    location: "Indonesia, East Java, Bangkalan",
    phone: "0852-8032-7300",
    skills: [
      {
        name: "Javascript",
        icon: <SiJavascript className={cn(baseStyleIcon, "hover:text-yellow-400")} key={2} />,
      },
      {
        name: "React",
        icon: <SiReact className={cn(baseStyleIcon, "hover:text-blue-500")} key={3} />,
      },
      {
        name: "NodeJs",
        icon: <IoLogoNodejs className={cn(baseStyleIcon, "hover:text-green-600")} key={6} />,
      },
      {
        name: "TailwindCss",
        icon: <RiTailwindCssFill className={cn(baseStyleIcon, "hover:text-sky-400")} key={8} />,
      },
    ],
    gltf: "/glb/Mufid.glb",
  },
  {
    name: "Ahmad Mufid Risqi",
    role: "Sekertaris Divisi Litbang",
    email: "risqimufid50@gmail.com",
    github: "https://github.com/Mufid-031",
    location: "Indonesia, East Java, Bangkalan",
    phone: "0877-1556-7904",
    skills: [
      {
        name: "Typescript",
        icon: <SiTypescript className={cn(baseStyleIcon, "hover:text-blue-600")} key={1} />,
      },
      {
        name: "Javascript",
        icon: <SiJavascript className={cn(baseStyleIcon, "hover:text-yellow-400")} key={2} />,
      },
      {
        name: "React",
        icon: <SiReact className={cn(baseStyleIcon, "hover:text-blue-500")} key={3} />,
      },
      {
        name: "NextJs",
        icon: <SiNextdotjs className={cn(baseStyleIcon, "hover:text-slate-300")} key={4} />,
      },
      {
        name: "VueJs",
        icon: <FaVuejs className={cn(baseStyleIcon, "hover:text-green-400")} key={5} />,
      },
      {
        name: "NodeJs",
        icon: <IoLogoNodejs className={cn(baseStyleIcon, "hover:text-green-600")} key={6} />,
      },
      {
        name: "BunJs",
        icon: <SiBun className={cn(baseStyleIcon, "hover:text-slate-300")} key={7} />,
      },
      {
        name: "TailwindCss",
        icon: <RiTailwindCssFill className={cn(baseStyleIcon, "hover:text-sky-400")} key={8} />,
      },
      {
        name: "NestJs",
        icon: <SiNestjs className={cn(baseStyleIcon, "hover:text-red-500")} key={9} />,
      },
      {
        name: "Laravel",
        icon: <SiLaravel className={cn(baseStyleIcon, "hover:text-red-500")} key={10} />,
      },
      {
        name: "Dart",
        icon: <SiDart className={cn(baseStyleIcon, "hover:text-blue-500")} key={11} />,
      },
      {
        name: "Flutter",
        icon: <SiFlutter className={cn(baseStyleIcon, "hover:text-blue-400")} key={12} />,
      },
    ],
    gltf: "/glb/Mufid.glb",
  },
  {
    name: "Wildan Haydar Amru",
    role: "Staff Divisi Litbang",
    email: "whaydaramru@gmail.com",
    github: "https://github.com/Nacxht",
    location: "Indonesia, East Java, Sidoarjo",
    phone: "0882-1763-9998",
    skills: [
      {
        name: "Typescript",
        icon: <SiTypescript className={cn(baseStyleIcon, "hover:text-blue-600")} key={1} />,
      },
      {
        name: "Javascript",
        icon: <SiJavascript className={cn(baseStyleIcon, "hover:text-yellow-400")} key={2} />,
      },
      {
        name: "NodeJs",
        icon: <IoLogoNodejs className={cn(baseStyleIcon, "hover:text-green-600")} key={6} />,
      },
      {
        name: "Laravel",
        icon: <SiLaravel className={cn(baseStyleIcon, "hover:text-red-500")} key={10} />,
      },
    ],
    gltf: "/glb/Wildan.glb",
  },
  {
    name: "Imam Syafii",
    role: "Staff Divisi Litbang",
    email: "404imamgg@gmail.com",
    github: "https://github.com/imamgg",
    location: "Indonesia, East Java, Sampang",
    phone: "0853-3535-5129",
    skills: [
      {
        name: "Javascript",
        icon: <SiJavascript className={cn(baseStyleIcon, "hover:text-yellow-400")} key={2} />,
      },
      {
        name: "NodeJs",
        icon: <IoLogoNodejs className={cn(baseStyleIcon, "hover:text-green-600")} key={6} />,
      },
      {
        name: "React",
        icon: <SiReact className={cn(baseStyleIcon, "hover:text-blue-500")} key={3} />,
      },
      {
        name: "NextJs",
        icon: <SiNextdotjs className={cn(baseStyleIcon, "hover:text-slate-300")} key={4} />,
      },
      {
        name: "Laravel",
        icon: <SiLaravel className={cn(baseStyleIcon, "hover:text-red-500")} key={10} />,
      },
      {
        name: "TailwindCss",
        icon: <RiTailwindCssFill className={cn(baseStyleIcon, "hover:text-sky-400")} key={8} />,
      },
    ],
    gltf: "/glb/Imam.glb",
  },
  {
    name: "Muhammad Ainul Fuady",
    role: "Staff Divisi Litbang",
    email: "ainulfuadi1234@gmail.com",
    github: "https://github.com/muhammadainulfuady",
    location: "Indonesia, East Java, Gresik",
    phone: "0858-0840-6486",
    skills: [
      {
        name: "Html",
        icon: <SiHtml5 className={cn(baseStyleIcon, "hover:text-orange-400")} key={2} />,
      },
      {
        name: "Css",
        icon: <SiCss3 className={cn(baseStyleIcon, "hover:text-blue-400")} key={2} />,
      },
      {
        name: "Python",
        icon: <FaPython className={cn(baseStyleIcon, "hover:text-blue-500")} key={6} />,
      },
      {
        name: "Javascript",
        icon: <SiJavascript className={cn(baseStyleIcon, "hover:text-yellow-400")} key={2} />,
      },
      {
        name: "NodeJs",
        icon: <IoLogoNodejs className={cn(baseStyleIcon, "hover:text-green-600")} key={6} />,
      },
    ],
    gltf: "/glb/Fuady.glb",
  },
];