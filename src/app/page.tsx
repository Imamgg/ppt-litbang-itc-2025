"use client";

import LanyardCard from "@/components/3D/LanyardCard";
import CardDetail from "@/components/team/CardDetail";
import { cn } from "@/lib/utils";
import { Box, Flex } from "@radix-ui/themes";
import { FaVuejs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBun, SiDart, SiFlutter, SiJavascript, SiLaravel, SiNestjs, SiNextdotjs, SiNextui, SiReact, SiTypescript } from "react-icons/si";

export default function HomePage() {
  const baseStyleIcon = "w-5 h-5 mr-3 cursor-pointer";

  const teams = [
    {
      name: "Ahmad Mufid Risqi",
      role: "Sekertaris Divisi Litbang",
      email: "risqimufid50@gmail.com",
      github: "https://github.com/Mufid-031",
      location: "Indonesia, East Java, Bangkalan",
      phone: "0877-1556-7904",
      joinDate: "2025-01-01",
      skills: [
        <SiTypescript className={cn(baseStyleIcon, "hover:text-blue-600")} key={1} />,
        <SiJavascript className={cn(baseStyleIcon, "hover:text-yellow-400")} key={2} />,
        <SiReact className={cn(baseStyleIcon, "hover:text-blue-500")} key={3} />,
        <SiNextdotjs className={cn(baseStyleIcon, "hover:text-slate-300")} key={4} />,
        <FaVuejs className={cn(baseStyleIcon, "hover:text-green-400")} key={5} />,
        <IoLogoNodejs className={cn(baseStyleIcon, "hover:text-green-600")} key={6} />,
        <SiBun className={cn(baseStyleIcon, "hover:text-yellow-500")} key={7} />,
        <RiTailwindCssFill className={cn(baseStyleIcon, "hover:text-sky-400")} key={8} />,
        <SiNestjs className={cn(baseStyleIcon, "hover:text-purple-500")} key={9} />,
        <SiLaravel className={cn(baseStyleIcon, "hover:text-red-500")} key={10} />,
        <SiDart className={cn(baseStyleIcon, "hover:text-blue-500")} key={11} />,
        <SiFlutter className={cn(baseStyleIcon, "hover:text-blue-200")} key={12} />,
      ]
    },
  ];

  return (
    <div>
      <Flex align="center">
        <Box className="w-1/2">
          <LanyardCard />
        </Box>
        <Flex direction="column" className="w-1/2">
          {teams.map((team, index) => (
            <CardDetail key={index} {...team} />
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
