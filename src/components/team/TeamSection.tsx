"use client";

import LanyardCard from "@/components/3D/LanyardCard";
import CardDetail from "@/components/team/CardDetail";
import { Box, Flex } from "@radix-ui/themes";
import { useInView } from "framer-motion";
import { useRef } from "react";


type TeamSectionProps = {
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
  };
};

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  return (
    <Flex ref={containerRef} align="center" className="py-20 bg-white">
      <Box className="w-1/2">{isInView && <LanyardCard />}</Box>
      <Flex direction="column" className="w-1/2">
        <CardDetail {...team} />
      </Flex>
    </Flex>
  );
};

export default TeamSection;
