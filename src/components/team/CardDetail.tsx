"use client";

import { Calendar, Code, Github, Mail, MapPin, Phone, User } from "lucide-react";
import DecryptedText from "../Text/DecryptedText";
import Link from "next/link";
import { Flex } from "@radix-ui/themes";
import SplitText from "../Text/SplitText";
import { motion } from "framer-motion";

type CardDetailProps = {
  name: string;
  role: string;
  email: string;
  github: string;
  location: string;
  phone: string;
  joinDate: string;
  skills: React.ReactNode[];
};

const MotionUser = motion(User);
const MotionGithub = motion(Github);
const MotionMail = motion(Mail);
const MotionPhone = motion(Phone);
const MotionMapPin = motion(MapPin);
const MotionCalendar = motion(Calendar);
const MotionCode = motion(Code);

const CardDetail: React.FC<CardDetailProps> = ({ name, role, email, github, location, phone, joinDate, skills }) => {
  const teamDetails: string[] = [name, email, github, location, phone, joinDate];

  const labelsDetails: string[] = ["Full Name", "Email", "Github", "Location", "Phone", "Join Date"];

  const iconsDetails: React.ReactNode[] = [
    <MotionUser key={1} className="w-5 h-5 mr-3" />,
    <MotionMail key={3} className="w-5 h-5 mr-3" />,
    <MotionGithub key={2} className="w-5 h-5 mr-3" />,
    <MotionPhone key={4} className="w-5 h-5 mr-3" />,
    <MotionMapPin key={5} className="w-5 h-5 mr-3" />,
    <MotionCalendar key={6} className="w-5 h-5 mr-3" />,
  ];

  return (
    <motion.div className="flex-grow rounded-2xl overflow-hidden w-[50rem] relative">
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
                  <p>
                    <DecryptedText text={detail} speed={100} maxIterations={20} animateOn="view" revealDirection="start" sequential />
                  </p>
                </motion.div>
              </motion.div>
            ))}

            <motion.div className="flex items-center text-zinc-400">
              <MotionCode className="w-5 h-5 mr-3" />
              <motion.div>
                <p className="text-sm text-zinc-500">Skills</p>
                <Flex gap="1" className="flex-wrap">
                  {skills.map((skill, index) => (
                    <Flex gap="1" align="center" key={index} className="p-2">
                      {skill}
                    </Flex>
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
