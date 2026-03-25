"use client";

import type { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

export const staggerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

type MotionInViewProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  distance?: number;
};

export function MotionInView({
  children,
  delay = 0,
  distance = 24,
  variants,
  transition,
  ...props
}: MotionInViewProps) {
  const shouldReduceMotion = useReducedMotion();

  const localVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: distance },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease,
            delay,
            ...transition,
          },
        },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants ?? localVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function MotionStagger({
  children,
  variants,
  ...props
}: MotionStaggerProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={shouldReduceMotion ? undefined : (variants ?? staggerVariants)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function MotionStaggerItem({
  children,
  variants,
  ...props
}: MotionStaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : (variants ?? itemVariants)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
