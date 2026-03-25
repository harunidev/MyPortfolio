import React from "react";
import { motion } from "framer-motion";

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(249,115,22,0.2)",
  backdropFilter: "blur(12px)",
};

const contactItems = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "harunisikd@gmail.com",
    href: "mailto:harunisikd@gmail.com",
  },
  {
    icon: "fab fa-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/harunisik001",
    href: "https://linkedin.com/in/harunisik001",
  },
  {
    icon: "fab fa-github",
    label: "GitHub",
    value: "github.com/harunidev",
    href: "https://github.com/harunidev",
  },
  {
    icon: "fas fa-phone",
    label: "Phone",
    value: "+90 538 600 42 55",
    href: "tel:+905386004255",
  },
  {
    icon: "fas fa-globe",
    label: "Portfolio",
    value: "harunidev.github.io/MyPortfolio",
    href: "https://harunidev.github.io/MyPortfolio/",
  },
];

export default function Contact() {
  return (
    <motion.main
      className="min-h-screen text-white relative z-10 pt-24 pb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 max-w-2xl">

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
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact</h1>
          <div className="mt-3 h-0.5 w-16" style={{ background: "linear-gradient(90deg, #f97316, transparent)" }} />
          <p className="mt-4 text-gray-400">
            Open to new opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-2xl p-5 group transition-all block"
              style={cardStyle}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
              whileHover={{
                borderColor: "rgba(249,115,22,0.45)",
                background: "rgba(249,115,22,0.06)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid rgba(249,115,22,0.25)",
                }}
              >
                <i className={`${item.icon} text-orange-400`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-500 text-xs mb-0.5">{item.label}</p>
                <p className="text-gray-200 text-sm font-medium truncate group-hover:text-orange-300 transition-colors">
                  {item.value}
                </p>
              </div>
              <svg
                className="w-4 h-4 text-gray-600 group-hover:text-orange-400 transition-colors flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="mt-10 text-center text-gray-600 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Based in Istanbul, Turkey · Available for remote work
        </motion.p>

      </div>
    </motion.main>
  );
}
