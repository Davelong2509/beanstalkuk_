"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HoverMotion({
  children,
  className,
  lift = 5,
  scale = 1.01,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        shouldReduceMotion ? undefined : { y: -lift, scale }
      }
      whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
