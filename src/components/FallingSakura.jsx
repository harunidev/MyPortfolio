import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function FallingSakura() {
  const [petals, setPetals] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Create initial petals immediately
    const createInitialPetals = () => {
      const initialPetals = [];
      for (let i = 0; i < 50; i++) {
        initialPetals.push({
          id: `sakura-${i}-${Date.now()}-${Math.random()}`,
          x: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 8 + Math.random() * 4,
          size: Math.random() * 6 + 3,
          rotation: Math.random() * 360,
          drift: (Math.random() - 0.5) * 120,
          opacity: Math.random() * 0.6 + 0.4,
        });
      }
      setPetals(initialPetals);
    };

    // Start immediately
    createInitialPetals();

    // Add new petals continuously
    const addNewPetals = () => {
      const newPetals = [];
      for (let i = 0; i < 8; i++) {
        newPetals.push({
          id: `sakura-new-${Date.now()}-${i}-${Math.random()}`,
          x: Math.random() * 100,
          delay: 0,
          duration: 8 + Math.random() * 4,
          size: Math.random() * 6 + 3,
          rotation: Math.random() * 360,
          drift: (Math.random() - 0.5) * 120,
          opacity: Math.random() * 0.6 + 0.4,
        });
      }
      setPetals(prev => [...prev.slice(-40), ...newPetals]);
    };

    // Add new petals every 0.8 seconds
    intervalRef.current = setInterval(addNewPetals, 800);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-40px',
          }}
          initial={{ 
            y: 0, 
            x: 0,
            opacity: petal.opacity,
            rotate: petal.rotation,
            scale: 1
          }}
          animate={{ 
            y: window.innerHeight + 60, 
            x: petal.drift,
            opacity: [0, petal.opacity, petal.opacity, 0],
            rotate: petal.rotation + 1080,
            scale: [0.8, 1, 1, 0.6]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0,
            repeatType: "loop"
          }}
        >
          {/* Sakura petal shape */}
          <div
            className="relative"
            style={{
              width: `${petal.size * 2}px`,
              height: `${petal.size}px`,
            }}
          >
            {/* Main petal body */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #ffb3d9 0%, #ff8cc8 50%, #ff66b3 100%)',
                opacity: 0.8,
                filter: 'drop-shadow(0 2px 4px rgba(255, 102, 179, 0.3))',
                transform: 'rotate(45deg)',
              }}
            />
            {/* Petal highlight */}
            <div
              className="absolute top-1 left-1 w-1/3 h-1/3 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #ffb3d9 100%)',
                opacity: 0.6,
              }}
            />
            {/* Petal center */}
            <div
              className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{
                background: '#ff4d94',
                opacity: 0.7,
              }}
            />
          </div>
        </motion.div>
      ))}
      
      {/* Additional floating petals for atmosphere */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`floating-sakura-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ 
            scale: 1,
            opacity: 0.3,
            rotate: 0 
          }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0],
            rotate: [0, 360],
            y: [0, -30, 0],
            x: [0, (Math.random() - 0.5) * 20, 0]
          }}
          transition={{
            duration: 6,
            delay: Math.random() * 8,
            repeat: Infinity,
            repeatDelay: Math.random() * 12 + 6,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <div
            className="relative"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #ffb3d9 0%, #ff8cc8 100%)',
                opacity: 0.6,
                filter: 'drop-shadow(0 1px 2px rgba(255, 102, 179, 0.4))',
                transform: 'rotate(45deg)',
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
