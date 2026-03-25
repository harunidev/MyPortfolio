import React from "react";
import { motion } from "framer-motion";

const skillTags = [
  "C# / .NET", "Java", "Python", "RPA – uiPath / ZOZI360",
  "N8N Automation", "Spring Boot", "REST API", "Oracle DB",
  "MSSQL / PostgreSQL", "Docker", "SAP Integration", "Flutter / Dart",
];

function Card({ children, delay = 0, hover = true }) {
  return (
    <motion.div
      className="rounded-2xl p-8 mb-6"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={hover ? { y: -4, borderColor: "var(--card-border-hover)", boxShadow: "0 8px 30px color-mix(in srgb, var(--accent) 10%, transparent)" } : {}}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <span className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color: "var(--accent)" }}>
      {children}
    </span>
  );
}

export default function About() {
  return (
    <motion.main
      className="min-h-screen relative z-10 pt-24 pb-16"
      style={{ color: "var(--text-primary)" }}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Header */}
        <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <SectionLabel>Who I am</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text-primary)" }}>About Me</h1>
          <div className="mt-3 h-0.5 w-16" style={{ background: "var(--divider-gradient)" }} />
        </motion.div>

        {/* Summary */}
        <Card delay={0.2}>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Software &amp; RPA Developer with hands-on production experience in C#/.NET, Java, and Python.
            Specialized in enterprise automation, REST API integrations, and ERP data workflows including
            SAP and Nebim V3. Experienced in building scalable backend services, automated mail processing
            pipelines, Oracle database integrations, and Docker containerization across real production
            environments.
          </p>
        </Card>

        {/* Education */}
        <Card delay={0.3}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--accent)" }}>Education</h2>
          <div className="flex items-start gap-4">
            <motion.div
              className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
              style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className="fas fa-graduation-cap" style={{ color: "var(--accent)" }}></i>
            </motion.div>
            <div>
              <p className="font-medium" style={{ color: "var(--text-primary)" }}>Bachelor's, Computer Engineering</p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>Istanbul Kultur University · 2022 – 2026</p>
              <p className="text-sm mt-2" style={{ color: "var(--text-faint)" }}>
                Capstone: RAG Pipeline Evaluation – Python, FAISS, HuggingFace. Designed and benchmarked
                three RAG architectures (DPR+ColBERT, BGE M3, Jina v3) analyzing retrieval accuracy,
                generation quality, latency, and safety metrics.
              </p>
            </div>
          </div>
        </Card>

        {/* Certifications */}
        <Card delay={0.35}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--accent)" }}>Certifications</h2>
          <ul className="space-y-2">
            {[
              { label: "Machine Learning",       issuer: "Global AI Hub · Akbank" },
              { label: "Deep Learning",           issuer: "Global AI Hub · Akbank" },
              { label: "Python",                  issuer: "Udemy" },
              { label: "Java",                    issuer: "Udemy" },
              { label: "Leadership (Liderlik)",   issuer: "IEEE" },
            ].map((cert) => (
              <motion.li key={cert.label} className="flex items-center gap-3" whileHover={{ x: 4 }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {cert.label}{" "}
                  <span style={{ color: "var(--text-faint)" }}>— {cert.issuer}</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </Card>

        {/* Skills */}
        <Card delay={0.4}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--accent)" }}>Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skillTags.map((tag) => (
              <motion.span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-sm"
                style={{
                  background: "var(--tag-bg)",
                  border: "1px solid var(--tag-border)",
                  color: "var(--text-muted)",
                }}
                whileHover={{ scale: 1.06, color: "var(--accent)", borderColor: "var(--accent)" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </Card>

      </div>
    </motion.main>
  );
}
