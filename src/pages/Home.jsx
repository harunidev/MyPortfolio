// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/harunidev",
      icon: "fab fa-github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/harunisik001",
      icon: "fab fa-linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/harunisik",
      icon: "fab fa-twitter"
    }
  ];

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-light-gray via-light-white to-light-gray-dark dark:from-dark-navy dark:via-dark-navy-light dark:to-dark-navy text-light-black dark:text-white transition-colors duration-300 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-light-orange dark:text-transparent dark:bg-gradient-to-r dark:from-dark-blue-lighter dark:to-dark-blue-light"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Harun Işık
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-light-black-light dark:text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Java Developer | Backend Engineer
            </motion.h2>
            <motion.p 
              className="text-light-black dark:text-gray-400 text-lg max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Passionate about creating efficient and scalable solutions. 
              Specializing in Java development, RPA automation, and backend systems.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex space-x-8 mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-light-black-light dark:text-gray-400 hover:text-light-orange dark:hover:text-dark-blue-lighter transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={() => navigate("/projects")}
              className="px-8 py-4 bg-light-white text-light-black font-semibold rounded-full shadow-lg hover:shadow-light-orange/20 dark:hover:shadow-dark-blue/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-light-black text-light-white font-semibold rounded-full shadow-lg hover:shadow-light-orange/20 dark:hover:shadow-dark-blue/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="w-6 h-10 border-2 border-light-black-light dark:border-gray-600 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-light-black-light dark:bg-gray-600 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
