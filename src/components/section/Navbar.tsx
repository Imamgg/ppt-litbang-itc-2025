"use client";

import { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";

const Navbar: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full p-5 flex flex-row place-items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScroll ? "backdrop-blur-sm bg-black/30" : "bg-transparent"
      }`}
    >
      <h1 className="text-3xl tracking-tight font-bold text-white">Litbang</h1>
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
