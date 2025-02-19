"use client";

import LanyardCard from "@/components/3D/LanyardCard";
import CardDetail from "@/components/team/CardDetail";
import { Box, Flex } from "@radix-ui/themes";
import { useInView } from "framer-motion";
import { useRef } from "react";


type TeamProps = {
  team: {
    name: string;
    role: string;
    email: string;
    github: string;
    location: string;
    phone: string;
    skills: {
      name: string;
      icon: React.ReactNode;
    }[];
    gltf: string;
  };
};

const Team: React.FC<TeamProps> = ({ team }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  return (
    <Flex ref={containerRef} align="center" className="min-h-screen snap-start">
      <Box className="w-1/2">{isInView && <LanyardCard gltf={team.gltf} />}</Box>
      <Flex direction="column" className="w-1/2">
        <CardDetail {...team} />
      </Flex>
    </Flex>
  );
};

export default Team;
