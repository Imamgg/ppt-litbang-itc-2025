"use client";

import DynamicCurvedArrow from "../Arrow/DynamicCurvedArrow";
import { AnimatedSpan, Terminal, TypingAnimation } from "../registry/magicui/Terminal";
import { useAnimation, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

const SvgVariants: Variants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const DivisiSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const ctrls = useAnimation();

  useIsomorphicLayoutEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, isInView]);

  return (
    <div ref={containerRef} className="w-full h-screen snap-start flex gap-20 items-center px-10">
      <div className="w-1/2 relative">
        <DynamicCurvedArrow variants={SvgVariants} animate={ctrls} direction="right" className="absolute -top-32 -right-16 -rotate-45" />
        <span className="text-3xl absolute -top-32 -right-56">Pengertian</span>
        <Terminal>
          {isInView && (
            <>
              <TypingAnimation>&gt; npm i pengertian</TypingAnimation>
              <AnimatedSpan delay={3500} className="text-green-500">
                <span>Litbang bertanggung jawab dalam pengembangan sumber daya manusia (SDM)</span>
              </AnimatedSpan>
              <AnimatedSpan delay={4000} className="text-green-500">
                <span>Melalui penelitian, inovasi, dan pengembangan yang berkelanjutan</span>
              </AnimatedSpan>
              <AnimatedSpan delay={4500} className="text-green-500">
                <span>Untuk Meningkatkan kompetisi dan kolaborasi dalam bidang penelitian</span>
              </AnimatedSpan>
              <AnimatedSpan delay={5000} className="text-green-500">
                <span>pengembangan yang bermanfaat bagi UKMFT-ITC</span>
              </AnimatedSpan>
              <TypingAnimation delay={5500}>Success install pengertian</TypingAnimation>
            </>
          )}
        </Terminal>
      </div>
      <div className="w-1/2 relative">
        <DynamicCurvedArrow variants={SvgVariants} animate={ctrls} direction="right" className="absolute -bottom-32 -left-16 rotate-[130deg]" />
        <span className="text-3xl absolute -bottom-36 -left-36">Rules</span>
        <Terminal>
          {isInView && (
            <>
              <TypingAnimation>&gt; npm i Rules</TypingAnimation>
              <AnimatedSpan delay={3500} className="text-green-500">
                <span>Setiap anggota Litbang minimal dan maksimal 1</span>
              </AnimatedSpan>
              <AnimatedSpan delay={4000} className="text-green-500">
                <span>orang yang dapat mengikuti proker dari divisi lain</span>
              </AnimatedSpan>
              <AnimatedSpan delay={4500} className="text-green-500">
                <span>dari divisi lain (bisa lebih tergantung</span>
              </AnimatedSpan>
              <AnimatedSpan delay={5000} className="text-green-500">
                <span>kondisi kesibukan dari anggota)</span>
              </AnimatedSpan>
              <TypingAnimation delay={5500}>Success install Rules</TypingAnimation>
            </>
          )}
        </Terminal>
      </div>
    </div>
  );
};

export default DivisiSection;
