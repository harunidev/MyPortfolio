import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const socialLinks = [
    { name: "GitHub",   url: "https://github.com/harunidev",          icon: "fab fa-github"   },
    { name: "LinkedIn", url: "https://linkedin.com/in/harunisik001",   icon: "fab fa-linkedin" },
    { name: "Email",    url: "mailto:harunisikd@gmail.com",            icon: "fas fa-envelope" },
  ];

  const tags = ["C# / .NET", "Java", "Python", "RPA", "Docker", "REST API"];

  return (
    <motion.main
      className="min-h-screen relative z-10"
      style={{ color: "var(--text-primary)" }}
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
              background: "var(--badge-bg)",
              border: "1px solid var(--badge-border)",
              color: "var(--badge-color)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            Software &amp; RPA Developer
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-center"
            style={{ letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span style={{ color: "var(--text-primary)" }}>Harun </span>
            <span style={{ background: "var(--accent-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Işık
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl max-w-2xl text-center mb-10 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
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
              <motion.span
                key={tag}
                className="px-3 py-1 rounded-md text-sm"
                style={{
                  background: "var(--tag-bg)",
                  border: "1px solid var(--tag-border)",
                  color: "var(--text-muted)",
                }}
                whileHover={{ scale: 1.08, color: "var(--accent)" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl transition-all"
                style={{
                  background: "var(--icon-bg)",
                  border: "1px solid var(--icon-border)",
                  color: "var(--text-muted)",
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: i % 2 === 0 ? 8 : -8,
                  color: "var(--accent)",
                  borderColor: "var(--accent)",
                }}
                whileTap={{ scale: 0.9 }}
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
                background: "var(--btn-primary-bg)",
                boxShadow: "var(--btn-primary-shadow)",
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => navigate("/contact")}
              className="px-8 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                background: "var(--btn-secondary-bg)",
                border: "1px solid var(--btn-secondary-border)",
                color: "var(--text-muted)",
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
                background: "var(--badge-bg)",
                color: "var(--accent)",
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
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-faint)" }}>scroll</span>
            <motion.div
              className="w-0.5 h-6 rounded-full"
              style={{ background: "var(--scroll-bar)" }}
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

        </div>
      </div>
    </motion.main>
  );
}
