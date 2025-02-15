"use client";

import { Code, Github, Mail, MapPin, Phone, User } from "lucide-react";
import DecryptedText from "../Text/DecryptedText";
import { Flex } from "@radix-ui/themes";
import SplitText from "../Text/SplitText";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { Tooltip } from "radix-ui";
import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

type CardDetailProps = {
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

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const MotionUser = motion(User);
const MotionGithub = motion(Github);
const MotionMail = motion(Mail);
const MotionPhone = motion(Phone);
const MotionMapPin = motion(MapPin);
const MotionCode = motion(Code);

const CardDetail: React.FC<CardDetailProps> = ({ name, role, email, github, location, phone, skills }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const ctrls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    if (!isLoaded) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1500);
    }
  }, [isLoaded]);

  useIsomorphicLayoutEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [isInView]);

  const teamDetails: string[] = [name, email, github, location, phone];
  const labelsDetails: string[] = ["Full Name", "Email", "Github", "Location", "Phone"];
  const iconsDetails: React.ReactNode[] = [
    <MotionUser key={1} className="w-5 h-5 mr-3" />,
    <MotionMail key={3} className="w-5 h-5 mr-3" />,
    <MotionGithub key={2} className="w-5 h-5 mr-3" />,
    <MotionPhone key={4} className="w-5 h-5 mr-3" />,
    <MotionMapPin key={5} className="w-5 h-5 mr-3" />,
  ];

  return (
    <motion.div ref={ref} variants={containerVariants} animate={ctrls} className="flex-grow rounded-2xl overflow-hidden w-[50rem] relative">
      <motion.div className="bg-zinc-900 border-zinc-800">
        <motion.div className="p-8 space-y-6">
          <div className="space-y-2">
            <motion.h1
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1 },
              }}
              className="text-3xl font-semibold tracking-tight text-zinc-100"
            >
              {name}
            </motion.h1>
            <div>
              <SplitText text={role} delay={100} className="text-lg text-orange-400" />
            </div>
          </div>

          <motion.div className="grid gap-6 pt-6 border-t border-zinc-800">
            {teamDetails.map((detail, index) => (
              <motion.div key={index} className="flex items-center text-zinc-400">
                {iconsDetails[index]}
                <motion.div>
                  <p className="text-sm text-zinc-500">{labelsDetails[index]}</p>
                  <p className="cursor-pointer">
                    <DecryptedText text={detail} speed={100} maxIterations={20} animateOn={isLoaded ? "hover" : "view"} revealDirection="start" sequential />
                  </p>
                </motion.div>
              </motion.div>
            ))}

            <motion.div className="flex items-center text-zinc-400">
              <MotionCode className="w-5 h-5 mr-3" />
              <motion.div>
                <p className="text-sm text-zinc-500">Skills</p>
                <Flex gap="3" className="flex-wrap">
                  {skills.map((skill, index) => (
                    <Tooltip.Provider key={index} delayDuration={300}>
                      <Tooltip.Root>
                        <Tooltip.Trigger>{skill.icon}</Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="select-none rounded bg-white px-[15px] py-2.5 text-[15px] leading-none text-violet11 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
                            sideOffset={5}
                          >
                            {skill.name}
                            <Tooltip.Arrow className="fill-white" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>
                  ))}
                </Flex>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardDetail;
