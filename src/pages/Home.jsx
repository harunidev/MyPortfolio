import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/harunidev",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/harunisik001",
      icon: "fab fa-linkedin",
    },
    {
      name: "Email",
      url: "mailto:harunisikd@gmail.com",
      icon: "fas fa-envelope",
    },
  ];

  const tags = ["C# / .NET", "Java", "Python", "RPA", "Docker", "REST API"];

  return (
    <motion.main
      className="min-h-screen text-white relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-[85vh]">

          {/* Badge */}
          <motion.div
            className="mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(249,115,22,0.1)",
              border: "1px solid rgba(249,115,22,0.3)",
              color: "#fb923c",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            Software &amp; RPA Developer
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-center"
            style={{ color: "#f1f0ee", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Harun{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f97316, #fb923c, #fdba74)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Işık
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-2xl text-center mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Hands-on production experience in C#/.NET, Java &amp; Python.
            Specialized in enterprise automation, REST API integrations, and
            ERP data workflows including SAP and Nebim V3.
          </motion.p>

          {/* Tech tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-sm text-gray-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(249,115,22,0.15)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-5 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl text-gray-400 transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(249,115,22,0.2)",
                }}
                whileHover={{
                  scale: 1.1,
                  color: "#fb923c",
                  borderColor: "rgba(249,115,22,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`${link.icon} text-lg`}></i>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={() => navigate("/projects")}
              className="px-8 py-3.5 rounded-xl font-semibold text-sm text-white"
              style={{
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                boxShadow: "0 0 24px rgba(249,115,22,0.25)",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(249,115,22,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => navigate("/contact")}
              className="px-8 py-3.5 rounded-xl font-semibold text-sm text-gray-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(249,115,22,0.3)",
              }}
              whileHover={{
                scale: 1.04,
                background: "rgba(249,115,22,0.1)",
                borderColor: "rgba(249,115,22,0.5)",
                color: "#fb923c",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-gray-600 text-xs tracking-widest uppercase">scroll</span>
            <motion.div
              className="w-0.5 h-6 rounded-full"
              style={{ background: "rgba(249,115,22,0.4)" }}
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

        </div>
      </div>
    </motion.main>
  );
}
