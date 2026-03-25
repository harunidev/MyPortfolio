import React from "react";
import { motion } from "framer-motion";

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(249,115,22,0.2)",
  backdropFilter: "blur(12px)",
};

const skillTags = [
  "C# / .NET", "Java", "Python", "RPA – uiPath / ZOZI360",
  "N8N Automation", "Spring Boot", "REST API", "Oracle DB",
  "MSSQL / PostgreSQL", "Docker", "SAP Integration", "Flutter / Dart",
];

export default function About() {
  return (
    <motion.main
      className="min-h-screen text-white relative z-10 pt-24 pb-16"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Section header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-2 block"
            style={{ color: "#fb923c" }}
          >
            Who I am
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
          <div className="mt-3 h-0.5 w-16" style={{ background: "linear-gradient(90deg, #f97316, transparent)" }} />
        </motion.div>

        {/* Summary card */}
        <motion.div
          className="rounded-2xl p-8 mb-8"
          style={cardStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-300 text-base leading-relaxed">
            Software &amp; RPA Developer with hands-on production experience in C#/.NET, Java, and Python.
            Specialized in enterprise automation, REST API integrations, and ERP data workflows including
            SAP and Nebim V3. Experienced in building scalable backend services, automated mail processing
            pipelines, Oracle database integrations, and Docker containerization across real production
            environments.
          </p>
        </motion.div>

        {/* Education card */}
        <motion.div
          className="rounded-2xl p-8 mb-8"
          style={cardStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-semibold text-orange-400 mb-4">Education</h2>
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
              style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.25)" }}
            >
              <i className="fas fa-graduation-cap text-orange-400"></i>
            </div>
            <div>
              <p className="text-white font-medium">Bachelor's, Computer Engineering</p>
              <p className="text-gray-400 text-sm">Istanbul Kultur University · 2022 – 2026</p>
              <p className="text-gray-500 text-sm mt-2">
                Capstone: RAG Pipeline Evaluation – Python, FAISS, HuggingFace. Designed and benchmarked
                three RAG architectures (DPR+ColBERT, BGE M3, Jina v3) analyzing retrieval accuracy,
                generation quality, latency, and safety metrics.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications card */}
        <motion.div
          className="rounded-2xl p-8 mb-8"
          style={cardStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <h2 className="text-lg font-semibold text-orange-400 mb-4">Certifications</h2>
          <ul className="space-y-2">
            {[
              { label: "Machine Learning", issuer: "Global AI Hub · Akbank" },
              { label: "Deep Learning", issuer: "Global AI Hub · Akbank" },
              { label: "Python", issuer: "Udemy" },
              { label: "Java", issuer: "Udemy" },
              { label: "Leadership (Liderlik)", issuer: "IEEE" },
            ].map((cert) => (
              <li key={cert.label} className="flex items-center gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#f97316" }}
                />
                <span className="text-gray-300 text-sm">
                  {cert.label}{" "}
                  <span className="text-gray-500">— {cert.issuer}</span>
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills tags */}
        <motion.div
          className="rounded-2xl p-8"
          style={cardStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold text-orange-400 mb-4">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-sm text-gray-300"
                style={{
                  background: "rgba(249,115,22,0.08)",
                  border: "1px solid rgba(249,115,22,0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.main>
  );
}
