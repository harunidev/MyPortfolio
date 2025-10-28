import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: "fas fa-code",
      color: "#3B82F6",
      skills: [
        { name: "Java", details: "Object-oriented programming, Spring Boot framework" },
        { name: "Python", details: "FastAPI, data analysis, automation scripting" },
        { name: "C#", details: "Backend development, API integration, .NET framework" },
        { name: "Dart", details: "Flutter mobile development, cross-platform applications" },
      ]
    },
    {
      name: "RPA & Automation",
      icon: "fas fa-robot",
      color: "#10B981",
      skills: [
        { name: "RPA", details: "uiPath, ZOZI360 workflow automation" },
        { name: "N8N Automation", details: "Workflow automation, API integrations" },
        { name: "Spring Boot", details: "Microservices, REST APIs, enterprise applications" },
      ]
    },
    {
      name: "Database & Development Tools",
      icon: "fas fa-database",
      color: "#F59E0B",
      skills: [
        { name: "SQL", details: "MSSQL, MySQL, PostgreSQL database management" },
        { name: "Flutter", details: "Mobile app development, UI/UX design" },
        { name: "Android Studio", details: "Mobile development environment, debugging" },
        { name: "Docker", details: "Containerization, deployment automation" }
      ]
    },
  ];

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-light-gray via-light-white to-light-gray-dark dark:from-dark-navy dark:via-dark-navy-light dark:to-dark-navy text-light-black dark:text-white transition-colors duration-300 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-light-orange dark:text-transparent dark:bg-gradient-to-r dark:from-dark-blue-lighter dark:to-dark-blue-light">
            Skills & Expertise
          </h1>
          <p className="text-light-black-light dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg bg-light-gray-dark/80 dark:bg-dark-navy/30 rounded-2xl p-8 shadow-xl border border-light-orange/30 dark:border-dark-blue/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <i
                    className={`${category.icon} text-2xl`}
                    style={{ color: category.color }}
                  ></i>
                </div>
                <h2 className="text-2xl font-semibold text-light-orange dark:text-white">{category.name}</h2>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">{skill.name}</h3>
                    </div>
                    <p className="text-light-black dark:text-gray-400 text-sm">{skill.details}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
} 
