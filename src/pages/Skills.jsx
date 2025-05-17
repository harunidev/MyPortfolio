import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      name: "Backend Development",
      icon: "fas fa-server",
      color: "#3B82F6",
      skills: [
        { name: "Java", level: 5, details: "Spring Boot, Hibernate, JPA" },
        { name: "Python", level: 4, details: "Django, Flask, FastAPI" },
        { name: "C/C++", level: 4, details: "OOP, Data Structures, Algorithms" },
        { name: "Node.js", level: 4, details: "Express.js, REST APIs" },

      ]
    },
    {
      name: "Frontend Development",
      icon: "fas fa-code",
      color: "#10B981",
      skills: [
        { name: "Flutter", level: 4, details: "Dart, Flutter, Flutter Web" },
        { name: "ASP.Net MVC", level: 5, details: "C#, ASP.Net MVC, Entity Framework" },
        { name: "HTML/CSS", level: 5, details: "Tailwind CSS, SASS" },
        { name: "UI/UX", level: 4, details: "Responsive Design, Material UI" },
        { name: "JavaScript", level: 5, details: "ES6+, TypeScript, React" },
      ]
    },
    {
      name: "DevOps & Tools",
      icon: "fas fa-tools",
      color: "#F59E0B",
      skills: [
        { name: "Git", level: 5, details: "GitHub, GitLab, CI/CD" },
        { name: "Docker", level: 4, details: "Containerization, Docker Compose" },
        { name: "AWS", level: 3, details: "EC2, S3, Lambda" },
        { name: "Linux", level: 4, details: "Ubuntu, Shell Scripting" }
      ]
    },
    {
      name: "Database Management",
      icon: "fas fa-tools",
      color: "#F59E0B",
      skills: [
        { name: "MySQL", level: 5, details: "MySQL, PostgreSQL, Oracle" },
        { name: "MongoDB", level: 4, details: "MongoDB, NoSQL" },
        { name: "Firebase", level: 3, details: "Firebase, Realtime Database" },
        { name: "MS SQL", level: 5, details: "MSSQL, SQL Server, SQL" }
      ]
    },
  ];

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-purple-600 dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500">
            Skills & Expertise
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg bg-gray-800/30 rounded-2xl p-8 shadow-xl border border-gray-700/50"
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
                <h2 className="text-2xl font-semibold text-purple-600 dark:text-white">{category.name}</h2>
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
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < skill.level
                                ? "bg-blue-500"
                                : "bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-900 dark:text-gray-400 text-sm">{skill.details}</p>
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
