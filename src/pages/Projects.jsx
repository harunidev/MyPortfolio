import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Deduction Project – RPA (Saya Holding, Finance Department)",
      description: "Designed and implemented an RPA workflow on Zizo 360 for the Finance Department to automate deduction record processing. Integrated the workflow with SAP systems to retrieve and validate financial data in real time, ensuring accuracy and consistency across processes. Generated employee-specific Excel reports, connected APIs for user and manager data, and automated email notifications, significantly reducing manual workload and processing time.",
      technologies: ["RPA", "Zizo 360", "SAP Integration", "Excel Automation", "API Integration"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/harunidev"
    },
    {
      title: "AI-Integrated News Automation – RPA (Saya Holding, Humanis)",
      description: "Developed an RPA solution combined with AI to monitor and analyze news content related to Humanis. Automated the extraction of key information and implemented an email system to deliver summarized updates directly to the company.",
      technologies: ["RPA", "AI Integration", "News Monitoring", "Email Automation", "Data Extraction"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/harunidev"
    },
    {
      title: "Automated E-Invoice Process– RPA (Saya Holding, Volt Technology)",
      description: "Developed an end-to-end RPA workflow integrated with SAP to automate invoice validation and reconciliation. Extracted invoice, SAS number, and waybill data directly from SAP screens, performing automated amount and document consistency checks to identify erroneous e-invoices. Generated detailed success and error reports and automatically distributed them to relevant departments. This process significantly improved accuracy, reduced manual verification time, and enhanced overall finance workflow efficiency.",
      technologies: ["RPA", "SAP Integration", "Invoice Automation", "Data Validation", "Report Generation"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/harunidev"
    },
    {
      title: "Teams & WhatsApp Chatbot Integration – C# (Saya, QSoft)",
      description: "I worked on the Teams and WhatsApp chatbot system developed in C#, contributing to backend improvements, feature updates, and API integrations. Although I joined after the system was established, I played an active role in enhancing its stability and adapting it to new business requirements.",
      technologies: ["C#", "Teams Integration", "WhatsApp API", "Backend Development", "API Integration"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/harunidev"
    },
    {
      title: "MultiLang EduAgent – AI Code Analysis Platform – Python (Personal)",
      description: "Developed MultiLang EduAgent, a web-based AI system built with FastAPI and integrated with MSSQL for code storage and query management. The platform analyzes and improves code written in multiple languages (Python, Java, C#, JavaScript, Dart), automatically detects the programming language, identifies syntax or logic errors, and provides clear explanations along with corrected or optimized code suggestions through modular AI agents.",
      technologies: ["Python", "FastAPI", "MSSQL", "AI", "Multi-language Support", "Code Analysis"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/harunidev"
    },
    {
      title: "TaskFlow – Modular Workflow Automation Platform - Java, Spring Boot (Personal)",
      description: "I developed TaskFlow, a modular automation platform using Java (Spring Boot). It lets users create, schedule, and monitor workflow tasks via a dynamic API-driven microservice architecture with modules for user management, scheduling, and notifications. The system uses REST APIs, message queues, PostgreSQL, and a custom rules engine for scalable, automated business logic.",
      technologies: ["Java", "Spring Boot", "REST API", "PostgreSQL", "Microservices", "Message Queues"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://github.com/harunidev"
    }
  ];

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-light-gray via-light-white to-light-gray-dark dark:from-dark-navy dark:via-dark-navy-light dark:to-dark-navy text-light-black dark:text-white pt-20 px-6 transition-colors duration-300 relative z-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-light-orange dark:text-transparent dark:bg-gradient-to-r dark:from-dark-blue-lighter dark:to-dark-blue-light"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            💼 Projects
          </motion.h1>
          <motion.p 
            className="text-light-black-light dark:text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A collection of my professional work showcasing expertise in RPA development, 
            backend engineering, and automation solutions across various industries.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-light-gray-dark/60 dark:bg-dark-navy/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-light-orange/20 dark:hover:shadow-dark-blue/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-light-orange/20 to-light-orange-light/20 dark:from-dark-blue/20 dark:to-dark-blue-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-light-orange dark:text-transparent dark:bg-gradient-to-r dark:from-dark-blue-lighter dark:to-dark-blue-light">
                    {project.title}
                  </h2>
                  <p className="text-light-black dark:text-gray-400 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1.5 bg-light-gray-dark dark:bg-dark-navy-light text-light-black dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.features && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-light-black-light dark:text-gray-300">
                        Key Features:
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-light-orange dark:text-dark-blue-lighter mr-2">•</span>
                            <span className="text-light-black dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3 bg-light-white text-light-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-light-orange/20 dark:hover:shadow-dark-blue/20"
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
