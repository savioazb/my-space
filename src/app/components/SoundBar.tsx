'use client'

import { motion, transform } from "framer-motion";

export default function SoundBar() {
  return (
    <svg
      width="13"
      height="18"
      viewBox="0 0 53 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rotate-180"
    >
      <g id="bars">
        <motion.rect
          initial={{
            height: 20,
          }}
          animate={{
            height: 37,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
          id="bar-1"
          x="2"
          y="0"
          width="11"
          height="37"
          rx="5.5"
          fill="black"
        />
        <motion.rect
          initial={{
            height: 30,
          }}
          animate={{
            height: 58,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
          id="bar-2"
          x="21"
          width="11"
          height="58"
          rx="5.5"
          fill="black"
        />
        <motion.rect
          initial={{
            height: 20,
          }}
          animate={{
            height: 47,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
          id="bar-3"
          x="40"
          y="0"
          width="11"
          height="47"
          rx="5.5"
          fill="black"
        />
      </g>
    </svg>
  );
}