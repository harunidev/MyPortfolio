import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(249,115,22,0.2)",
  backdropFilter: "blur(12px)",
};

const projects = [
  {
    title: "Deduction Project – RPA",
    org: "Saya Holding · Finance Department",
    period: "2025",
    description:
      "Designed and implemented an RPA workflow on ZOZI 360 to automate deduction record processing for the Finance Department. Integrated with SAP to retrieve and validate financial data in real time. Generated employee-specific Excel reports, connected APIs for user and manager data, and automated email notifications — significantly reducing manual workload.",
    technologies: ["RPA", "ZOZI360", "SAP Integration", "Excel Automation", "API Integration"],
    icon: "fas fa-robot",
    link: "https://github.com/harunidev",
  },
  {
    title: "Twiser – Data Integration Platform",
    org: "QSoft · Humanis",
    period: "December 2025 – Present",
    description:
      "Developed a data integration platform using C# and .NET 6/7 with Clean Architecture and CQRS patterns. Built dynamic mapping systems to transform SaaS data from SAP SuccessFactors, Workday, Personio, Azure AD, and Okta using runtime JSON configurations. Integrated PostgreSQL and MSSQL with FluentValidation and Application Insights for real-time monitoring.",
    technologies: ["C#", ".NET 6/7", "CQRS", "Clean Architecture", "PostgreSQL", "MSSQL", "Application Insights"],
    icon: "fas fa-database",
    link: "https://github.com/harunidev",
  },
  {
    title: "Automated E-Invoice Process – RPA",
    org: "Saya Holding · Volt Technology",
    period: "2025",
    description:
      "End-to-end RPA workflow integrated with SAP to automate invoice validation and reconciliation. Extracted invoice, SAS number, and waybill data directly from SAP screens. Performed automated amount and document consistency checks to identify erroneous e-invoices and automatically distributed success/error reports to relevant departments.",
    technologies: ["RPA", "ZOZI360", "SAP Integration", "Invoice Automation", "Data Validation"],
    icon: "fas fa-file-invoice",
    link: "https://github.com/harunidev",
  },
  {
    title: "Teams & WhatsApp Chatbot Integration",
    org: "Saya Holding · QSoft",
    period: "2025",
    description:
      "Contributed to backend improvements, feature updates, and API integrations for an enterprise C# chatbot system deployed on WhatsApp and Microsoft Teams. Enhanced stability, implemented new business requirements, and adapted AI service integrations for automated communication and employee support.",
    technologies: ["C#", "MS Teams API", "WhatsApp API", "AI Services", "Backend Development"],
    icon: "fas fa-comments",
    link: "https://github.com/harunidev",
  },
  {
    title: "MultiLang EduAgent",
    org: "Personal Project",
    period: "2025",
    description:
      "Web-based AI system built with FastAPI and MSSQL for multi-language code analysis. Automatically detects programming language (Python, Java, C#, JavaScript, Dart), identifies syntax/logic errors, and provides corrected or optimized code suggestions through modular AI agents.",
    technologies: ["Python", "FastAPI", "MSSQL", "AI Agents", "Multi-language"],
    icon: "fas fa-code",
    link: "https://github.com/harunidev",
  },
  {
    title: "SeturBiz HR – Travel Integration",
    org: "QSoft · Humanis",
    period: "November 2024 – February 2025",
    description:
      "SOAP-based integration service in C#/.NET to synchronize employee data between Humanis HR and SeturBiz travel platform. Built database mapping services with FluentValidation, SOAP client with custom envelope generation and retry mechanisms, DryRun mode for safe testing, and configurable filter system for deployment management.",
    technologies: ["C#", ".NET", "SOAP", "FluentValidation", "MSSQL", "HR Integration"],
    icon: "fas fa-plane",
    link: "https://github.com/harunidev",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <motion.main
      className="min-h-screen text-white relative z-10 pt-24 pb-16"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 max-w-4xl">

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
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Projects</h1>
          <div className="mt-3 h-0.5 w-16" style={{ background: "linear-gradient(90deg, #f97316, transparent)" }} />
          <p className="mt-4 text-gray-400 max-w-xl">
            Professional work across enterprise automation, backend services, and AI integrations.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-5">
          {projects.map((project, index) => {
            const isOpen = expanded === index;
            return (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  ...cardStyle,
                  borderColor: isOpen ? "rgba(249,115,22,0.45)" : "rgba(249,115,22,0.2)",
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.07 }}
                whileHover={{ borderColor: "rgba(249,115,22,0.38)" }}
                onClick={() => setExpanded(isOpen ? null : index)}
              >
                {/* Card header */}
                <div className="p-6 flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(249,115,22,0.12)",
                      border: "1px solid rgba(249,115,22,0.25)",
                    }}
                  >
                    <i className={`${project.icon} text-orange-400`}></i>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-base font-bold text-white leading-tight">{project.title}</h2>
                        <p className="text-orange-400 text-sm mt-0.5">{project.org}</p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-gray-500 text-xs hidden sm:block">{project.period}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-500"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>

                    {/* Tech tags always visible */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-xs text-gray-400"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(249,115,22,0.12)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-xs text-gray-600">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 pb-6 pt-0"
                        style={{ borderTop: "1px solid rgba(249,115,22,0.12)" }}
                      >
                        <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-xs text-gray-300"
                              style={{
                                background: "rgba(249,115,22,0.08)",
                                border: "1px solid rgba(249,115,22,0.2)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                        >
                          <i className="fab fa-github"></i>
                          View on GitHub
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.main>
  );
}
