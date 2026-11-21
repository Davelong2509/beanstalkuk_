
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ImageReveal({
  children,
  className,
  delay = 0,
  duration = 0.9,
  radius = "rounded-2xl"
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0.92,
              scale: 1.035,
              y: 12
            }
      }
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.15
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={cn(
        "relative isolate block w-full overflow-hidden",
        radius,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
