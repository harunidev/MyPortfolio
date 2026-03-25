import React from "react";
import { motion } from "framer-motion";

const contactItems = [
  { icon: "fas fa-envelope",  label: "Email",     value: "harunisikd@gmail.com",          href: "mailto:harunisikd@gmail.com"              },
  { icon: "fab fa-linkedin",  label: "LinkedIn",  value: "linkedin.com/in/harunisik001",   href: "https://linkedin.com/in/harunisik001"      },
  { icon: "fab fa-github",    label: "GitHub",    value: "github.com/harunidev",           href: "https://github.com/harunidev"              },
  { icon: "fas fa-phone",     label: "Phone",     value: "+90 538 600 42 55",              href: "tel:+905386004255"                         },
  { icon: "fas fa-globe",     label: "Portfolio", value: "harunidev.github.io/MyPortfolio",href: "https://harunidev.github.io/MyPortfolio/"  },
];

export default function Contact() {
  return (
    <motion.main
      className="min-h-screen relative z-10 pt-24 pb-16"
      style={{ color: "var(--text-primary)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 max-w-2xl">

        {/* Header */}
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <span className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color: "var(--accent)" }}>
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text-primary)" }}>Contact</h1>
          <div className="mt-3 h-0.5 w-16" style={{ background: "var(--divider-gradient)" }} />
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
            Open to new opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>

        {/* Contact items */}
        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-2xl p-5 group transition-all block"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                backdropFilter: "blur(12px)",
                textDecoration: "none",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
              whileHover={{
                x: 6,
                borderColor: "var(--card-border-hover)",
                background: "var(--badge-bg)",
                boxShadow: "0 4px 20px color-mix(in srgb, var(--accent) 10%, transparent)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--icon-bg)", border: "1px solid var(--icon-border)" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <i className={`${item.icon}`} style={{ color: "var(--accent)" }}></i>
              </motion.div>
              <div className="flex-1 min-w-0">
                <p className="text-xs mb-0.5" style={{ color: "var(--text-faint)" }}>{item.label}</p>
                <p className="text-sm font-medium truncate" style={{ color: "var(--text-muted)" }}>{item.value}</p>
              </div>
              <svg
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--text-faint)" }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center text-xs"
          style={{ color: "var(--text-faint)" }}
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
