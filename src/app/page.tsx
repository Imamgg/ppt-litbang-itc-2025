"use client";

import TeamSection from "@/components/section/TeamSection";
import VelocityScroll from "@/components/registry/magicui/VelocityScroll";
import { IconCloud } from "@/components/registry/magicui/IconCloud";
import { ProkerSection } from "@/components/section/ProkerSection";
import AnimatedPresentSection from "@/components/section/AnimatedPresentSection";
import DivisiSection from "@/components/section/DivisiSection";
import FlowingMenu from "@/components/ui/FlowingMenu";

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
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <div className="snap-y snap-mandatory">
      <AnimatedPresentSection />
      <div className="snap-start flex flex-col overflow-x-hidden items-center justify-center relative w-full">
        <div className="w-full h-2/3 flex items-end justify-center gap-10 py-24">
          <IconCloud images={images} />
        </div>
        <div className="flex items-end w-full relative">
          <VelocityScroll texts={["DIVISI", "LITBANG"]} velocity={10} parallaxClassName="w-full" scrollerClassName="w-full" numCopies={30} />
          <div className="w-full h-5 bg-gradient-to-b from-black/50 to-black absolute bottom-0 left-0 right-0"></div>
        </div>
      </div>
      <DivisiSection />
      <div className="w-full h-screen snap-start flex justify-center items-center">
        <ProkerSection />
      </div>
      <TeamSection />
      <div className="snap-start" style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center" }}>
        <FlowingMenu items={items} />
      </div>
    </div>
  );
}

const items = [
  { link: '/website', text: 'Website', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/perlombaan', text: 'Perlombaan', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/fasilitator', text: 'Fasilitator', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/penelitian', text: 'Penelitian', image: 'https://picsum.photos/600/400?random=4' }
];
