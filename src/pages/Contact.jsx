import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "harunisikd@gmail.com",
      boxClass: "bg-blue-500/20",
      iconClass: "text-blue-500"
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "github.com/harunidev",
      isLink: true,
      boxClass: "bg-purple-500/20",
      iconClass: "text-purple-500"
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+90 538 600 42 55",
      boxClass: "bg-green-500/20",
      iconClass: "text-green-500"
    }
  ];

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Contact Me
          </h1>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto backdrop-blur-lg bg-gray-800/30 rounded-2xl p-8 shadow-xl border border-gray-700/50"
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
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  {info.isLink ? (
                    <a
                      href={`https://${info.value}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white">{info.value}</p>
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
