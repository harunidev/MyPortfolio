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
Hello! I'm Harun Işık, a Computer Engineering student at Istanbul Kültür University and a passionate developer specialized in Java backend development, automation systems, and real-time mobile applications. I am currently working as a Java Developer Intern at Saya Holding, where I actively contribute to backend architecture and robotic process automation (RPA) initiatives.

Over the past few years, I've built a solid technical foundation through academic studies, internships, and project-based work. I enjoy turning complex ideas into clean, efficient, and scalable solutions. Whether it's designing RESTful APIs using Spring Boot, building mobile apps with Flutter, or implementing real-time socket-based systems, I strive to build tools that are both functional and user-focused.

One of my most impactful experiences has been co-leading the AquaFocus project — a gamified Pomodoro productivity app developed with Flutter and powered by real-time synchronization using Socket.IO. In this project, I was responsible for designing and implementing the entire mobile UI, integrating AI-powered feedback systems, and ensuring seamless communication between frontend and backend services. The system also incorporated AI microservices using Python and FastAPI, which analyzed user session data and delivered personalized productivity advice.

Beyond my technical skills, I'm a highly adaptive team player who thrives in collaborative environments. I value clear communication, documentation, and continuous learning. I also have experience working with agile methodologies, version control (Git), and modern dev tools such as Postman, MySQL Workbench, and Android Studio.

My long-term goal is to become a well-rounded backend engineer with a strong focus on automation, system scalability, and developer experience. I am constantly looking for opportunities to grow—both technically and professionally—by contributing to innovative, real-world projects.
          </p>
        </div>
      </div>
    </motion.main>
  );
}