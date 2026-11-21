"use client";

import { cn } from "@/lib/utils";
import Reveal from "@/components/motion/Reveal";

export default function SplitReveal({
  left,
  right,
  reverse = false,
  gap = "gap-10 lg:gap-16",
  className,
  leftClassName,
  rightClassName
}) {
  return (
    <div
      className={cn(
        "grid items-center lg:grid-cols-2",
        gap,
        className
      )}
    >
      <Reveal
        direction={reverse ? "right" : "left"}
        className={cn(reverse && "lg:order-2", leftClassName)}
      >
        {left}
      </Reveal>
      <Reveal
        direction={reverse ? "left" : "right"}
        delay={0.12}
        className={cn(reverse && "lg:order-1", rightClassName)}
      >
        {right}
      </Reveal>
    </div>
  );
}
