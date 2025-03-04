"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/Animations";

interface Props {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button className="text-xl text-white hover:text-white" onClick={handleClick}>
      {label}
    </button>
  );
};

export default TransitionLink;
