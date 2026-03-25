import React from "react";
import { motion } from "framer-motion";

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(249,115,22,0.2)",
  backdropFilter: "blur(12px)",
};

const skillCategories = [
  {
    name: "Programming Languages",
    icon: "fas fa-code",
    skills: [
      { name: "C# / .NET",   details: "Backend services, REST APIs, Clean Architecture, CQRS" },
      { name: "Java",         details: "Spring Boot, microservices, enterprise applications" },
      { name: "Python",       details: "FastAPI, automation scripting, data pipelines, AI agents" },
      { name: "Flutter / Dart", details: "Cross-platform mobile development, Android Studio" },
    ],
  },
  {
    name: "RPA & Automation",
    icon: "fas fa-robot",
    skills: [
      { name: "ZOZI360 RPA",       details: "Enterprise workflow automation, SAP integration, production deployments" },
      { name: "uiPath",             details: "Robotic process automation, attended/unattended bots" },
      { name: "N8N Automation",     details: "Low-code workflow automation, API integrations, event-driven flows" },
      { name: "Spring Boot",        details: "REST microservices, scheduled jobs, JPA, Hibernate" },
    ],
  },
  {
    name: "Databases",
    icon: "fas fa-database",
    skills: [
      { name: "MSSQL",      details: "Query optimization, stored procedures, schema design" },
      { name: "PostgreSQL", details: "Integration with .NET, CQRS read models, performance tuning" },
      { name: "MySQL",      details: "Web application backends, relational data modeling" },
      { name: "Oracle DB",  details: "Enterprise data integration, mail processing pipelines" },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: "fas fa-tools",
    skills: [
      { name: "Docker",          details: "Containerization, multi-stage builds, production deployments" },
      { name: "Git",             details: "Version control, branching strategies, code reviews" },
      { name: "Application Insights", details: "Structured logging, real-time telemetry, monitoring" },
      { name: "Android Studio",  details: "Mobile development environment, debugging, profiling" },
    ],
  },
];

export default function Skills() {
  return (
    <motion.main
      className="min-h-screen text-white relative z-10 pt-24 pb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-2 block"
            style={{ color: "#fb923c" }}
          >
            Expertise
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Skills</h1>
          <div className="mt-3 h-0.5 w-16" style={{ background: "linear-gradient(90deg, #f97316, transparent)" }} />
          <p className="mt-4 text-gray-400 max-w-xl">
            Technical skills across backend development, RPA automation, and production systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-7"
              style={cardStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.1 }}
              whileHover={{ borderColor: "rgba(249,115,22,0.38)" }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(249,115,22,0.12)",
                    border: "1px solid rgba(249,115,22,0.25)",
                  }}
                >
                  <i className={`${category.icon} text-orange-400`}></i>
                </div>
                <h2 className="text-base font-semibold text-white">{category.name}</h2>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#f97316" }}
                      />
                      <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                    </div>
                    <p className="text-xs text-gray-500 pl-3.5 leading-relaxed">{skill.details}</p>
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
