"use client";

import { motion, AnimatePresence } from "framer-motion";
export const Animate = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: delay }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);
