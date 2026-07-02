"use client";

import { motion } from "framer-motion";

export function WilowLogo({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-5 -10 110 135"
        className="w-full h-full"
      >
        {/* Glow filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="eye-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Eyes — animated glow */}
        <motion.circle
          cx="41"
          cy="37"
          r="3"
          fill="#00ff88"
          filter="url(#eye-glow)"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="59"
          cy="37"
          r="3"
          fill="#00ff88"
          filter="url(#eye-glow)"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Body */}
        <path
          d="m43 37c0 2.668-4 2.668-4 0s4-2.668 4 0"
          fill="none"
          stroke="#00ff88"
          strokeWidth="1.5"
          filter="url(#glow)"
        />
        <path
          d="m61 37c0 2.668-4 2.668-4 0s4-2.668 4 0"
          fill="none"
          stroke="#00ff88"
          strokeWidth="1.5"
          filter="url(#glow)"
        />
        <path
          d="m60 54c4.6484 0 9-1.8516 12.238-5.2188 3.2383-3.3594 4.9219-7.7812 4.75-12.441-0.33984-9.0117-8.1719-16.34-17.461-16.34h-19.07c-9.2812 0-17.109 7.3281-17.461 16.34-0.17969 4.6602 1.5117 9.0781 4.75 12.441 3.2383 3.3594 7.5898 5.2188 12.238 5.2188h8v13h-10.191c-3.0508 0-5.8906 1.5195-7.5781 4.0586l-3.8906 5.8281c-0.30078 0.44141-0.39844 0.98047-0.30078 1.5 0.10937 0.51953 0.41016 0.98047 0.85156 1.2695 0.44141 0.30078 0.96875 0.39844 1.5 0.30078 0.51953-0.10156 0.98047-0.41016 1.2695-0.85156l3.8906-5.8281c0.94922-1.4297 2.5391-2.2812 4.25-2.2812h24.391c1.7109 0 3.3008 0.85156 4.25 2.2812l3.8906 5.8281c0.30078 0.44141 0.75 0.75 1.2695 0.85156 0.51953 0.10156 1.0586 0 1.5-0.30078 0.44141-0.30078 0.75-0.75 0.85156-1.2695s0-1.0586-0.30078-1.5l-3.8906-5.8281c-1.6914-2.5391-4.5312-4.0586-7.5781-4.0586h-10.191v-13zm-20-4c-7.1719 0-13-5.8281-13-13s5.8281-13 13-13h20c7.1719 0 13 5.8281 13 13s-5.8281 13-13 13z"
          fill="none"
          stroke="#00ff88"
          strokeWidth="2"
          filter="url(#glow)"
        />
      </svg>
    </motion.div>
  );
}
