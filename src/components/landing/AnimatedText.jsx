simport React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Word-by-word cinematic reveal. Works with any translated string,
 * so it's safe for all 4 languages (splits on spaces at render time).
 *
 * <AnimatedText text={t.hero.title1} delay={0.2} />
 */
export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.05,
  once = true,
  as: Tag = "span",
}) {
  const reduced = useReducedMotion();
  const str = String(text ?? "");
  if (reduced || !str) return <Tag className={className}>{str}</Tag>;

  const words = str.split(" ");

  return (
    <Tag className={className} aria-label={str}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "115%", opacity: 0, rotate: 3 }}
            whileInView={{ y: "0%", opacity: 1, rotate: 0 }}
            viewport={{ once, margin: "-60px" }}
            transition={{
              delay: delay + i * stagger,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}