import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "harunisikd@gmail.com",
      boxClass: "bg-light-orange/20 dark:bg-dark-blue/20",
      iconClass: "text-light-orange dark:text-dark-blue-lighter"
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "github.com/harunidev",
      isLink: true,
      boxClass: "bg-light-orange-light/20 dark:bg-dark-blue-light/20",
      iconClass: "text-light-orange-light dark:text-dark-blue-light"
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+90 538 600 42 55",
      boxClass: "bg-light-orange-lighter/20 dark:bg-dark-blue-lighter/20",
      iconClass: "text-light-orange-lighter dark:text-dark-blue-lighter"
    }
  ];

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-light-gray via-light-white to-light-gray-dark dark:from-dark-navy dark:via-dark-navy-light dark:to-dark-navy text-light-black dark:text-white transition-colors duration-300 relative z-10"
      initial={{ opacity: 0, rotateY: -15 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-light-orange dark:text-transparent dark:bg-gradient-to-r dark:from-dark-blue-lighter dark:to-dark-blue-light">
            Contact Me
          </h1>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto backdrop-blur-lg bg-light-gray-dark/80 dark:bg-dark-navy/30 rounded-2xl p-8 shadow-xl border border-light-orange/30 dark:border-dark-blue/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${info.boxClass}`}>
                  <i className={`${info.icon} text-xl ${info.iconClass}`}></i>
                </div>
                <div>
                  <p className="text-light-black-light dark:text-gray-400 text-sm">{info.label}</p>
                  {info.isLink ? (
                    <a
                      href={`https://${info.value}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-black dark:text-white hover:text-light-orange dark:hover:text-dark-blue-lighter transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-light-black dark:text-white">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
} 
