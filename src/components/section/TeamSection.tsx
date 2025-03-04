"use client";

import { cn } from "@/lib/utils";
import { FaPython, FaVuejs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBun, SiCss3, SiDart, SiFlutter, SiHtml5, SiJavascript, SiLaravel, SiNestjs, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import Team from "../team/Team";

const TeamSection: React.FC = () => {
  return (
    <>
      {teams.map((team, index) => (
        <Team team={team} key={index} />
      ))}
    </>
  );
};

export default TeamSection;

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
    gltf: "/glb/Maulana.glb",
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
    gltf: "/glb/Fuad.glb",
  },
];
