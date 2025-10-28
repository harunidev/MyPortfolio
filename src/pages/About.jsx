import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-light-gray via-light-white to-light-gray-dark dark:from-dark-navy dark:via-dark-navy-light dark:to-dark-navy text-light-black dark:text-white transition-colors duration-300 flex items-center justify-center relative z-10"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <div className="backdrop-blur-lg bg-light-gray-dark/80 dark:bg-dark-navy/30 rounded-2xl p-10 shadow-xl border border-light-orange/30 dark:border-dark-blue/50">
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-3 bg-clip-text text-light-orange dark:text-transparent dark:bg-gradient-to-r dark:from-dark-blue-lighter dark:to-dark-blue-light">
            <span role="img" aria-label="About">💬</span> About Me
          </h1>
          <p className="text-light-black dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
          I am an enthusiastic and dedicated candidate eager to contribute as a RPA Developer and Backend Engineer with a strong foundation in programming and a passion for automation. I am excited about the opportunity to join your innovative team. I am committed to leveraging my skills to enhance operational efficiency and support backend processes, while continuously learning and growing within a dynamic environment. Together, we can drive impactful solutions and achieve remarkable results.
          </p>
        </div>
      </div>
    </motion.main>
  );
}