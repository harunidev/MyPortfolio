import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <div className="backdrop-blur-lg bg-gray-800/30 rounded-2xl p-10 shadow-xl border border-gray-700/50">
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-3 bg-clip-text text-purple-600 dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500">
            <span role="img" aria-label="About">💬</span> About Me
          </h1>
          <p className="text-gray-900 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
          I am a passionate Computer Engineering student with strong motivation in developing real-world applications. My focus lies in mobile and backend development, and I am currently improving my skills through hands-on projects. Recently, I developed a Flutter-based Pomodoro productivity app, where I designed a responsive UI, implemented custom timer logic, and managed state efficiently using Flutter’s native tools.
          I enjoy solving problems, learning modern technologies, and building clean, scalable software. I aim to contribute to innovative teams and continuously grow as a developer.
          </p>
        </div>
      </div>
    </motion.main>
  );
}