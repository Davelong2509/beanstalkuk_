"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const directions = {
  up: { x: 0, y: 26 },
  down: { x: 0, y: -26 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 }
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.75,
  once = true,
  amount = 0.18,
  className,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
