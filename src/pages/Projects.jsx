import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Hotel Management System",
      description: "A desktop-based hotel reservation system built in Java. Features include customer registration, room booking, availability tracking, and check-in/check-out flow.",
      technologies: ["Java", "OOP", "Swing"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/yourusername/hotel-management"
    },
    {
      title: "Airline Reservation System",
      description: "A flight reservation platform that allows users to view available routes, select flights, and purchase tickets via a web-based interface.",
      technologies: ["ASP.NET MVC", "HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      link: "https://github.com/yourusername/airline-reservation"
    },
    {
      title: "Weather App with API Integration",
      description: "A real-time weather tracking application that consumes third-party APIs to display current weather conditions by city. Implements JSON parsing and error handling.",
      technologies: ["Python", "Requests", "JSON"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/yourusername/weather-app"
    },
    {
      title: "Game Project (C++)",
      description: "A collection of three CLI-based games: Synonym Match, Movie Guess, and Number Prediction. Developed using object-oriented programming principles.",
      technologies: ["C++", "OOP"],
      image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/yourusername/game-project"
    },
    {
      title: "Pomodoro Productivity App – AquaFocus",
      description: "A gamified mobile productivity app that combines the Pomodoro Technique with team collaboration and real-time synchronization.",
      technologies: ["Flutter", "Dart", "Socket.IO", "Node.js", "REST API", "FastAPI", "MySQL"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/yourusername/aquafocus",
      features: [
        "Designed and implemented all core UI screens in Flutter",
        "Integrated REST API and real-time socket events (Socket.IO)",
        "Built responsive animations (coral reef, marine creatures)",
        "Connected AI microservice for personalized feedback"
      ]
    },
    {
      title: "AI Insight Engine",
      description: "A microservice that processes user session data to generate motivational study tips using AI. It clusters user behavior and dynamically constructs prompts to fetch AI-generated feedback.",
      technologies: ["Python", "FastAPI", "K-Means Clustering", "Gemini API"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/yourusername/ai-insight-engine"
    }
  ];

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white pt-20 px-6 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-purple-600 dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            💼 Projects
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A collection of my work showcasing my skills in software development, 
            from desktop applications to web and mobile solutions.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-purple-600 dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500">
                    {project.title}
                  </h2>
                  <p className="text-gray-900 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.features && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-gray-300">
                        Key Features:
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span className="text-gray-900 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
} 