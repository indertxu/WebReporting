import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, href, primary = true, className = "" }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 100) {
      setOffset({ x: dx * 0.3, y: dy * 0.3 });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const base = "font-semibold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap inline-flex items-center gap-2";
  const variant = primary
    ? "bg-ink text-white hover:bg-indigo shadow-lg shadow-indigo/20"
    : "bg-white text-ink border border-gray-200 hover:border-indigo hover:text-indigo";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`${base} ${variant} ${className}`}
    >
      {children}
    </motion.a>
  );
}