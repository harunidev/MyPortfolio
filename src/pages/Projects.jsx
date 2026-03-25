import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// GitHub repositories — public ones have links, private ones do not
const projects = [
  // ─── PUBLIC ────────────────────────────────────────────────────────────────
  {
    name: "FleetTrack360",
    lang: "C#",
    langColor: "#178600",
    description: "Fleet & vehicle tracking system built with C#. Manages real-time vehicle data, route monitoring, and reporting with a clean backend architecture.",
    tags: ["C#", ".NET", "Fleet Tracking", "Backend"],
    isPrivate: false,
    link: "https://github.com/harunidev/FleetTrack360",
    stars: 1,
  },
  {
    name: "inventory-order-management-api",
    lang: "Java",
    langColor: "#b07219",
    description: "RESTful API for inventory and order management. Handles product stock, order lifecycle, and reporting with Spring Boot.",
    tags: ["Java", "Spring Boot", "REST API", "Inventory"],
    isPrivate: false,
    link: "https://github.com/harunidev/inventory-order-management-api",
    stars: 0,
  },
  {
    name: "AI-Agent",
    lang: "Python",
    langColor: "#3572A5",
    description: "Modular AI agent system built in Python. Implements autonomous task execution with tool-calling capabilities and multi-step reasoning pipelines.",
    tags: ["Python", "AI Agents", "LLM", "Automation"],
    isPrivate: false,
    link: "https://github.com/harunidev/AI-Agent",
    stars: 0,
  },
  {
    name: "JavaEvent-DrivenRuleEngine",
    lang: "Java",
    langColor: "#b07219",
    description: "Event-driven rule engine in Java that processes business logic through configurable rule sets, event listeners, and dynamic condition evaluation.",
    tags: ["Java", "Rule Engine", "Event-Driven", "Backend"],
    isPrivate: false,
    link: "https://github.com/harunidev/JavaEvent-DrivenRuleEngine",
    stars: 0,
  },
  {
    name: "AirlineReservationSystem-with-ASPNET",
    lang: "ASP.NET",
    langColor: "#512bd4",
    description: "Full-featured airline reservation system built with ASP.NET. Covers flight search, seat booking, passenger management, and booking confirmation.",
    tags: ["ASP.NET", "HTML", "C#", "Web App"],
    isPrivate: false,
    link: "https://github.com/harunidev/AirlineReservationSystem-with-ASPNET",
    stars: 1,
  },
  {
    name: "HotelManagementSystem",
    lang: "Java",
    langColor: "#b07219",
    description: "Hotel management system in Java covering room reservations, check-in/out workflows, guest records, and billing operations.",
    tags: ["Java", "Hotel Management", "Desktop App"],
    isPrivate: false,
    link: "https://github.com/harunidev/HotelManagementSystem",
    stars: 1,
  },
  {
    name: "JwtAuthTutorial",
    lang: "C#",
    langColor: "#178600",
    description: "Complete JWT authentication implementation in C#/.NET. Covers token generation, validation, refresh tokens, and role-based access control.",
    tags: ["C#", ".NET", "JWT", "Authentication"],
    isPrivate: false,
    link: "https://github.com/harunidev/JwtAuthTutorial",
    stars: 1,
  },
  {
    name: "Chess",
    lang: "JavaScript",
    langColor: "#f1e05a",
    description: "Fully playable chess game running in the browser. Implements all chess rules including castling, en passant, check/checkmate detection.",
    tags: ["JavaScript", "Game", "Frontend"],
    isPrivate: false,
    link: "https://github.com/harunidev/Chess",
    stars: 0,
  },
  {
    name: "ARCore",
    lang: "Kotlin",
    langColor: "#A97BFF",
    description: "Android Augmented Reality app using Google ARCore. Renders 3D objects in real-world space through the device camera.",
    tags: ["Kotlin", "Android", "ARCore", "Mobile"],
    isPrivate: false,
    link: "https://github.com/harunidev/ARCore",
    stars: 0,
  },
  {
    name: "Neuro-Flow",
    lang: "Python",
    langColor: "#3572A5",
    description: "AI/automation flow orchestration tool built in Python. Designed for chaining AI model calls, data transformations, and automated pipeline execution.",
    tags: ["Python", "AI", "Automation", "Pipeline"],
    isPrivate: false,
    link: "https://github.com/harunidev/Neuro-Flow",
    stars: 0,
  },

  // ─── PRIVATE ───────────────────────────────────────────────────────────────
  {
    name: "HumanisTwiser",
    lang: "C#",
    langColor: "#178600",
    description: "Professional data integration platform developed at QSoft for Humanis HR. Synchronizes SaaS data (SAP SuccessFactors, Workday, Personio, Azure AD) via dynamic runtime JSON mapping.",
    tags: ["C#", ".NET", "CQRS", "HR Integration", "Clean Architecture"],
    isPrivate: true,
    stars: 0,
  },
  {
    name: "FinancialTransactionProcessingSystem",
    lang: "C#",
    langColor: "#178600",
    description: "Enterprise financial transaction processing system with validation pipelines, audit logging, and reconciliation workflows built in C#.",
    tags: ["C#", ".NET", "Finance", "Backend"],
    isPrivate: true,
    stars: 0,
  },
  {
    name: "BankFraud",
    lang: "Java",
    langColor: "#b07219",
    description: "Bank fraud detection system using machine learning techniques and rule-based pattern analysis to identify suspicious financial transactions.",
    tags: ["Java", "Machine Learning", "Fraud Detection", "Finance"],
    isPrivate: true,
    stars: 0,
  },
  {
    name: "PDFTools",
    lang: "Dart",
    langColor: "#00B4AB",
    description: "Flutter mobile application for PDF management. Supports PDF viewing, editing annotations, merging, splitting, and sharing documents.",
    tags: ["Dart", "Flutter", "Mobile", "PDF"],
    isPrivate: true,
    stars: 0,
  },
  {
    name: "RoomMate",
    lang: "TypeScript",
    langColor: "#3178c6",
    description: "Roommate matching web application. Users create profiles, set preferences, and get matched with compatible roommates using a scoring algorithm.",
    tags: ["TypeScript", "Web App", "Matching Algorithm"],
    isPrivate: true,
    stars: 0,
  },
  {
    name: "WebProjectWithGrafana",
    lang: "TypeScript",
    langColor: "#3178c6",
    description: "Full-stack web project with integrated Grafana monitoring dashboards. Tracks application metrics, performance KPIs, and operational health in real time.",
    tags: ["TypeScript", "Grafana", "Monitoring", "DevOps"],
    isPrivate: true,
    stars: 0,
  },
];

const LANG_ICONS = {
  "C#": "fab fa-microsoft",
  "Java": "fab fa-java",
  "Python": "fab fa-python",
  "JavaScript": "fab fa-js",
  "TypeScript": "fab fa-js",
  "Kotlin": "fas fa-mobile-alt",
  "Dart": "fas fa-mobile-alt",
  "ASP.NET": "fab fa-microsoft",
};

export default function Projects() {
  const [filter, setFilter] = useState("all"); // "all" | "public" | "private"
  const [expanded, setExpanded] = useState(null);

  const filtered = projects.filter((p) => {
    if (filter === "public") return !p.isPrivate;
    if (filter === "private") return p.isPrivate;
    return true;
  });

  return (
    <motion.main
      className="min-h-screen relative z-10 pt-24 pb-16"
      style={{ color: "var(--text-primary)" }}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header */}
        <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <span className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color: "var(--accent)" }}>
            GitHub
          </span>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text-primary)" }}>Projects</h1>
          <div className="mt-3 h-0.5 w-16" style={{ background: "var(--divider-gradient)" }} />
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
            {projects.filter(p => !p.isPrivate).length} public · {projects.filter(p => p.isPrivate).length} private
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {["all", "public", "private"].map((f) => (
            <motion.button
              key={f}
              onClick={() => { setFilter(f); setExpanded(null); }}
              className="px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all"
              style={
                filter === f
                  ? { background: "var(--badge-bg)", border: "1px solid var(--badge-border)", color: "var(--accent)" }
                  : { background: "var(--card-bg)", border: "1px solid var(--card-border)", color: "var(--text-muted)" }
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Project cards */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const isOpen = expanded === project.name;
              return (
                <motion.div
                  key={project.name}
                  layout
                  className="rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    background: "var(--card-bg)",
                    border: `1px solid ${isOpen ? "var(--card-border-hover)" : "var(--card-border)"}`,
                    backdropFilter: "blur(12px)",
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ y: -3, borderColor: "var(--card-border-hover)", boxShadow: "0 8px 30px color-mix(in srgb, var(--accent) 8%, transparent)" }}
                  onClick={() => setExpanded(isOpen ? null : project.name)}
                >
                  {/* Card header */}
                  <div className="p-5 flex items-start gap-4">
                    {/* Language icon */}
                    <motion.div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 text-sm"
                      style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)", color: "var(--accent)" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <i className={LANG_ICONS[project.lang] || "fas fa-code"}></i>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{project.name}</h2>
                          {/* Public / Private badge */}
                          {project.isPrivate ? (
                            <span
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
                              style={{ background: "var(--private-bg)", border: "1px solid var(--private-border)", color: "var(--private-color)" }}
                            >
                              <i className="fas fa-lock text-[10px]"></i> Private
                            </span>
                          ) : (
                            <span
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
                              style={{ background: "var(--public-bg)", border: "1px solid var(--public-border)", color: "var(--public-color)" }}
                            >
                              <i className="fas fa-lock-open text-[10px]"></i> Public
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          {/* Language dot */}
                          <div className="hidden sm:flex items-center gap-1">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ background: project.langColor }} />
                            <span className="text-xs" style={{ color: "var(--text-faint)" }}>{project.lang}</span>
                          </div>
                          {/* Stars */}
                          {project.stars > 0 && (
                            <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-faint)" }}>
                              <i className="fas fa-star text-[10px]"></i> {project.stars}
                            </span>
                          )}
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ color: "var(--text-faint)" }}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded text-xs" style={{ background: "var(--tag-bg)", border: "1px solid var(--tag-border)", color: "var(--text-faint)" }}>
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs" style={{ color: "var(--text-faint)" }}>+{project.tags.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0" style={{ borderTop: "1px solid var(--card-border)" }}>
                          <p className="text-sm leading-relaxed mt-4 mb-4" style={{ color: "var(--text-muted)" }}>
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <motion.span
                                key={tag}
                                className="px-2.5 py-1 rounded-md text-xs"
                                style={{ background: "var(--tag-bg)", border: "1px solid var(--tag-border)", color: "var(--text-muted)" }}
                                whileHover={{ scale: 1.06, color: "var(--accent)" }}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                          {!project.isPrivate && (
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 text-sm transition-colors"
                              style={{ color: "var(--accent)" }}
                              whileHover={{ x: 4 }}
                            >
                              <i className="fab fa-github"></i>
                              View on GitHub
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </motion.a>
                          )}
                          {project.isPrivate && (
                            <span className="inline-flex items-center gap-2 text-sm" style={{ color: "var(--text-faint)" }}>
                              <i className="fas fa-lock"></i>
                              This repository is private
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </motion.main>
  );
}
