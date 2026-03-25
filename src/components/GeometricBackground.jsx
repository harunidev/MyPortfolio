import React from "react";
import { motion } from "framer-motion";

const shapes = [
  { type: "hex",     x: "8%",  y: "12%", size: 120, opacity: 0.045, duration: 28, delay: 0  },
  { type: "hex",     x: "88%", y: "8%",  size: 90,  opacity: 0.035, duration: 34, delay: 4  },
  { type: "hex",     x: "75%", y: "72%", size: 140, opacity: 0.04,  duration: 40, delay: 8  },
  { type: "hex",     x: "15%", y: "78%", size: 100, opacity: 0.03,  duration: 32, delay: 2  },
  { type: "tri",     x: "30%", y: "20%", size: 80,  opacity: 0.05,  duration: 24, delay: 6  },
  { type: "tri",     x: "65%", y: "35%", size: 60,  opacity: 0.04,  duration: 30, delay: 10 },
  { type: "tri",     x: "45%", y: "80%", size: 70,  opacity: 0.035, duration: 36, delay: 1  },
  { type: "tri",     x: "90%", y: "55%", size: 55,  opacity: 0.04,  duration: 22, delay: 14 },
  { type: "ring",    x: "50%", y: "50%", size: 300, opacity: 0.025, duration: 60, delay: 0  },
  { type: "ring",    x: "20%", y: "40%", size: 160, opacity: 0.03,  duration: 45, delay: 5  },
  { type: "ring",    x: "80%", y: "30%", size: 200, opacity: 0.02,  duration: 50, delay: 12 },
  { type: "diamond", x: "22%", y: "60%", size: 40,  opacity: 0.06,  duration: 20, delay: 3  },
  { type: "diamond", x: "58%", y: "15%", size: 30,  opacity: 0.07,  duration: 18, delay: 9  },
  { type: "diamond", x: "95%", y: "85%", size: 50,  opacity: 0.05,  duration: 25, delay: 7  },
  { type: "diamond", x: "5%",  y: "50%", size: 35,  opacity: 0.06,  duration: 22, delay: 15 },
  { type: "line",    x: "38%", y: "45%", size: 100, opacity: 0.04,  duration: 35, delay: 11 },
  { type: "line",    x: "70%", y: "60%", size: 80,  opacity: 0.035, duration: 28, delay: 6  },
];

function HexPath({ size }) {
  const r = size / 2;
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${r + r * Math.cos(angle)},${r + r * Math.sin(angle)}`;
  }).join(" ");
  return <polygon points={pts} fill="none" stroke="currentColor" strokeWidth="1.5" />;
}

function TriPath({ size }) {
  return (
    <polygon
      points={`${size / 2},0 ${size},${size} 0,${size}`}
      fill="none" stroke="currentColor" strokeWidth="1.5"
    />
  );
}

function Shape({ type, x, y, size, opacity, duration, delay }) {
  const floatY = type === "ring" ? 8 : 15;
  const floatX = type === "ring" ? 6 : 10;
  return (
    <motion.div
      style={{
        position: "absolute", left: x, top: y,
        color: "var(--shape-color)",
        opacity,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
      animate={{
        y: [0, -floatY, 0, floatY, 0],
        x: [0, floatX, 0, -floatX, 0],
        rotate: type !== "ring" ? [0, 15, 0, -15, 0] : [0, 5, 0, -5, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {type === "hex"     && <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}><HexPath size={size} /></svg>}
      {type === "tri"     && <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}><TriPath size={size} /></svg>}
      {type === "ring"    && (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle cx={size/2} cy={size/2} r={size/2-2} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 10" />
        </svg>
      )}
      {type === "diamond" && (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <polygon points={`${size/2},0 ${size},${size/2} ${size/2},${size} 0,${size/2}`} fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
      {type === "line"    && (
        <svg width={size} height={4} viewBox={`0 0 ${size} 4`}>
          <line x1="0" y1="2" x2={size} y2="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
    </motion.div>
  );
}

export default function GeometricBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* Radial gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background:
          "radial-gradient(ellipse 80% 60% at 20% 20%, color-mix(in srgb, var(--shape-color) 6%, transparent) 0%, transparent 60%), " +
          "radial-gradient(ellipse 70% 70% at 80% 80%, color-mix(in srgb, var(--shape-color) 5%, transparent) 0%, transparent 60%)",
      }} />
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        opacity: 0.55,
      }} />
      {shapes.map((s, i) => <Shape key={i} {...s} />)}
    </div>
  );
}
