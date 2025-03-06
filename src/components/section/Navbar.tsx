"use client";

import { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [prev, setPrev] = useState(0);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPrev(latest);
    if (latest > prev) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  useIsomorphicLayoutEffect(() => {
    if (pathname === "/thanks") {
      setIsScroll(true);
    }
  }, []);

  return (
    <nav
      className={`w-full p-5 flex flex-row place-items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScroll ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1 className="text-3xl tracking-tight font-bold text-white">Litbang25</h1>
      <div className="flex gap-5">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/website" label="Website" />
        <TransitionLink href="/perlombaan" label="Perlombaan" />
        <TransitionLink href="/fasilitator" label="Fasilitator" />
        <TransitionLink href="/penelitian" label="Penelitian" />
      </div>
    </nav>
  );
};

export default Navbar;
