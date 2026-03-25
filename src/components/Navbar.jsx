import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const location = useLocation();
  const { isDarkTheme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/home",       label: "Home" },
    { path: "/about",      label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects",   label: "Projects" },
    { path: "/skills",     label: "Skills" },
    { path: "/contact",    label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--nav-border)",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="font-bold text-xl tracking-widest transition-colors"
              style={{ color: "var(--accent)", fontFamily: "monospace" }}
            >
              &lt;HI /&gt;
            </Link>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.div key={link.path} whileHover={{ y: -1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={link.path}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={
                    isActive(link.path)
                      ? {
                          color: "var(--accent)",
                          background: "var(--badge-bg)",
                          border: "1px solid var(--badge-border)",
                        }
                      : {
                          color: "var(--text-muted)",
                          border: "1px solid transparent",
                        }
                  }
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-lg transition-all"
              style={{
                border: "1px solid var(--card-border)",
                color: "var(--text-muted)",
              }}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDarkTheme ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden p-2 transition-colors"
            style={{ color: "var(--text-muted)" }}
            onClick={() => setMenuOpen((o) => !o)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--nav-bg)", borderTop: "1px solid var(--nav-border)" }}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                  style={
                    isActive(link.path)
                      ? { color: "var(--accent)", background: "var(--badge-bg)" }
                      : { color: "var(--text-muted)" }
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
