import React from "react";
import { motion } from "framer-motion";

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(249,115,22,0.2)",
  backdropFilter: "blur(12px)",
};

const experiences = [
  {
    role: "Backend Developer & RPA Developer",
    company: "QSoft Innovative Technologies",
    period: "November 2025 – Present",
    type: "Full-time",
    tags: ["C# / .NET", "ZOZI360 RPA", "REST API", "Oracle DB", "Docker"],
    highlights: [
      "Developing backend services with C# and .NET for the Zozi 360 RPA platform",
      "Implementing REST API integrations with JSON parsing and data mapping",
      "Building automated mail processing workflows integrated with Oracle databases",
      "Contributing to analytics cache architecture and Docker containerization",
      "Managing production deployments, scheduler configurations, and runtime logging",
    ],
  },
  {
    role: "Robotic Processes Developer & Backend Intern",
    company: "SAYA Holding",
    period: "July 2025 – October 2025",
    type: "Internship · 4 months",
    tags: ["ZOZI360 RPA", "SAP Integration", "C#", "MSSQL", "AI Services"],
    highlights: [
      "Contributed to RPA automation and backend projects using the Zozi 360 RPA platform",
      "Implemented SAP data integration and financial reconciliation processes",
      "Built C# chatbot systems with AI services integration for WhatsApp and MS Teams",
      "Utilized Microsoft SQL Server for database management, query optimization, and data validation",
    ],
  },
];

export default function Experience() {
  return (
    <motion.main
      className="min-h-screen text-white relative z-10 pt-24 pb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 max-w-3xl">

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
            Career
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Experience</h1>
          <div className="mt-3 h-0.5 w-16" style={{ background: "linear-gradient(90deg, #f97316, transparent)" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, #f97316, rgba(249,115,22,0.05))" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-14"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3 top-6 w-4 h-4 rounded-full -translate-x-1/2 flex items-center justify-center"
                  style={{
                    background: "#f97316",
                    boxShadow: "0 0 12px rgba(249,115,22,0.5)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-warm-bg" />
                </div>

                <div className="rounded-2xl p-7" style={cardStyle}>
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-white">{exp.role}</h2>
                      <p className="text-orange-400 text-sm font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span className="text-gray-400 text-xs">{exp.period}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(249,115,22,0.1)",
                          border: "1px solid rgba(249,115,22,0.25)",
                          color: "#fdba74",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#f97316" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs text-gray-400"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(249,115,22,0.15)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* References */}
        <motion.div
          className="mt-12 rounded-2xl p-7"
          style={cardStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-lg font-semibold text-orange-400 mb-4">References</h2>
          <div className="space-y-4">
            {[
              { name: "Hakan Cem TOPAL", title: "Information Technology Director", company: "Saya Holding" },
              { name: "Akhan Akbulut", title: "Head of Computer Engineering Department", company: "Istanbul Kultur University" },
            ].map((ref) => (
              <div key={ref.name} className="flex items-center gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-orange-400 flex-shrink-0"
                  style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.25)" }}
                >
                  {ref.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{ref.name}</p>
                  <p className="text-gray-500 text-xs">{ref.title} · {ref.company}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.main>
  );
}
