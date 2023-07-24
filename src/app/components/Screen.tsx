"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

export default function Screen({ children }: ScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0.5, perspective: 1200 }}
      whileInView={{ opacity: 1 }}
    >
      <motion.div
        className="relative rounded-3xl border border-black bg-[#0B0B0B] px-10 py-16 shadow-[-136px_112px_100px_-137px_#4545456e,94px_-50px_100px_-110px_#424242ba]"
        initial={{ rotateX: 45, scale: 0.8 }}
        whileInView={{ rotateX: 0, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute left-8 top-8 flex gap-2">
          <div className="h-2 w-2 rounded-full bg-gray-800"></div>
          <div className="h-2 w-2 rounded-full bg-gray-800"></div>
          <div className="h-2 w-2 rounded-full bg-gray-800"></div>
        </div>
        <div className="relative flex h-80 items-center justify-center">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
