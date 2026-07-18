"use client";

import { motion } from "framer-motion";

const componentMap = {
  div: motion.div,
  article: motion.article,
  section: motion.section,
  details: motion.details,
};

export function MotionReveal({
  as = "div",
  children,
  className = "",
  initial = { opacity: 0, y: 18 },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.4 },
  viewport = { once: true, amount: 0.2 },
  ...props
}) {
  const Component = componentMap[as] || motion.div;

  return (
    <Component
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
