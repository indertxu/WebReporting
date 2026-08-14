import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-0 hidden lg:block"
      animate={{ x: pos.x - 300, y: pos.y - 300 }}
      transition={{ type: "spring", stiffness: 40, damping: 25 }}
      style={{
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(5,150,105,0.05) 0%, rgba(16,185,129,0.03) 40%, transparent 70%)",
      }}
    />
  );
}