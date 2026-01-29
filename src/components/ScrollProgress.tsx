import { motion, useScroll } from "framer-motion";
import "../styles/scroll-progress.css";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
      }}
      className="scroll-progress"
    />
  );
}
