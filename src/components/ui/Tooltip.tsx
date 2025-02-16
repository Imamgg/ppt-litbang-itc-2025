"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { Tooltip as RadixTooltip } from "radix-ui";

type TooltipProps = {
  icon: React.ReactNode;
  content: string;
  delayDuration?: number;
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
  variants?: Variants;
};

const Tooltip: React.FC<TooltipProps> = ({
  icon,
  content,
  delayDuration = 300,
  side = "top",
  className,
  variants,
}) => {
  return (
    <motion.div className="m-1 flex justify-center" variants={variants}>
      <RadixTooltip.Provider delayDuration={delayDuration}>
        <RadixTooltip.Root>
          <RadixTooltip.Trigger>{icon}</RadixTooltip.Trigger>
          <RadixTooltip.Portal>
            <RadixTooltip.Content
              className={cn("select-none rounded px-[13px] py-2.5 text-[15px] leading-none text-violet11 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade", className)}
              sideOffset={5}
              side={side}
            >
              {content}
              <RadixTooltip.Arrow className="fill-orange-400" />
            </RadixTooltip.Content>
          </RadixTooltip.Portal>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    </motion.div>
  );
};

export default Tooltip;