import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import FallingSakura from "./components/FallingSakura";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-light-gray via-light-white to-light-gray-dark dark:from-dark-navy dark:via-dark-navy-light dark:to-dark-navy transition-all duration-500 relative overflow-hidden">
          {/* Modern Background Pattern */}
          <div className="absolute inset-0 opacity-25 dark:opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-light-orange/8 to-transparent dark:from-transparent dark:via-dark-blue/10 dark:to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light-orange/15 dark:bg-dark-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-light-orange/15 dark:bg-dark-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-light-orange/12 dark:bg-dark-blue/15 rounded-full blur-3xl"></div>
            <div className="absolute top-3/4 left-1/6 w-64 h-64 bg-light-orange/18 dark:bg-dark-blue/25 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/6 right-1/6 w-72 h-72 bg-light-orange/12 dark:bg-dark-blue/20 rounded-full blur-3xl"></div>
          </div>
          
          <FallingSakura />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}
