"use client";

import TeamSection from "@/components/team/TeamSection";
import { cn } from "@/lib/utils";
import { Container } from "@radix-ui/themes";
import { FaVuejs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBun, SiDart, SiFlutter, SiJavascript, SiLaravel, SiNestjs, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";

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
    },
  ];

  return (
    <div>
      <Container className="min-h-screen"></Container>
      {teams.map((team, index) => (
        <TeamSection team={team} key={index} />
      ))}
    </div>
  );
}
