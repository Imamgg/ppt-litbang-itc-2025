"use client";

import { MotionProps, motion } from "framer-motion";

interface DynamicCurvedArrowProps extends MotionProps {
  length?: number;
  color?: string;
  width?: number;
  direction?: "left" | "right";
  curvature?: number;
  className?: string;
}

export default function DynamicCurvedArrow({ length = 100, color = "currentColor", width = 3, direction = "right", curvature = 0.5, className = "", ...props }: DynamicCurvedArrowProps) {
  // Calculate control points based on length and curvature
  const curveHeight = length * curvature;
  const arrowHeadSize = Math.min(length * 0.2, 20);

  // Calculate the angle of the curve at the end point
  const endPointAngle = Math.atan2(curveHeight, length / 2);
  const arrowAngle = -endPointAngle;

  // Calculate the points for the arrowhead
  const arrowTip = length;
  const arrowLeft = {
    x: arrowTip - arrowHeadSize * Math.cos(arrowAngle - Math.PI / 6),
    y: arrowHeadSize * Math.sin(arrowAngle - Math.PI / 6),
  };
  const arrowRight = {
    x: arrowTip - arrowHeadSize * Math.cos(arrowAngle + Math.PI / 6),
    y: arrowHeadSize * Math.sin(arrowAngle + Math.PI / 6),
  };

  // SVG path for the arrow
  const arrowPath = `M0,0 Q${length / 2},${-curveHeight} ${length},0 M${arrowLeft.x},${arrowLeft.y} L${length},0 L${arrowRight.x},${arrowRight.y}`;

  return (
    <motion.svg width={length + 10} height={curveHeight * 2 + 10} viewBox={`-5 ${-curveHeight - 5} ${length + 10} ${curveHeight * 2 + 10}`} className={className}>
      <g transform={direction === "left" ? `translate(${length}, 0) scale(-1, 1)` : undefined}>
        <motion.path d={arrowPath} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" {...props} />
      </g>
    </motion.svg>
  );
}
