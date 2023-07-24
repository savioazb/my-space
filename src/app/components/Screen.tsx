'use client'
import CardProfile from "./CardProfile";
import { motion } from "framer-motion";

export default function Screen() {
  return (
    <motion.div
      initial={{ opacity: 0.5, perspective: 1200}}
      whileInView={{ opacity: 1 }}
    >
      <motion.div 
        className="relative bg-[#0B0B0B] px-32 py-16 border border-black rounded-3xl shadow-[-136px_112px_100px_-137px_#4545456e,94px_-50px_100px_-110px_#424242ba]"
        initial={{rotateX:45, scale:0.8}}
        whileInView={{ rotateX:0, scale: 1 }}
        transition={{duration:2}}
      >
        <div className="absolute top-8 left-8 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
        </div>
        <CardProfile />
      </motion.div>
    </motion.div>
  );
}