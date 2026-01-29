import { motion, useScroll, useTransform } from "framer-motion";
import type { ConsoleData } from "../data/consoles";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/consoles.module.css";

interface Props {
  consoleData: ConsoleData;
}

export default function ConsoleSection({ consoleData }: Props) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const containerRef = useRef<HTMLElement | null>(null);
  const [salesCount, setSalesCount] = useState(0);

  // Scroll progress baseado na section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Blur apenas no final (saída)
  const blurValue = useTransform(scrollYProgress, [0, 0.6, 1], [2, 0, 8]);
  const blurFilter = useTransform(blurValue, (v) => `blur(${v}px)`);

  // Contador animado
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = consoleData.sales / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= consoleData.sales) {
        setSalesCount(consoleData.sales);
        clearInterval(counter);
      } else {
        setSalesCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isVisible, consoleData.sales]);

  return (
    <motion.section
      id={consoleData.id}
      ref={(node: HTMLElement | null) => {
        if (ref && 'current' in ref) ref.current = node as HTMLDivElement | null;
        containerRef.current = node as HTMLDivElement | null;
      }}
      className={styles.consoleSection}
      style={{
        background: consoleData.background,
        filter: blurFilter,
      }}
    >
      <div className={styles.lightSweep}></div>

      <div className={styles.consoleContent}>
        <motion.img
          src={consoleData.image}
          alt={consoleData.name}
          style={{ y: imageY, maxWidth: consoleData.imageSize ? `${consoleData.imageSize}px` : "550px" }}
          className={`${styles.consoleImage} ${
            consoleData.era === "retro"
              ? styles.retroEffect
              : consoleData.era === "future"
              ? styles.futureEffect
              : ""
          }`}
        />

        <motion.div
          className={styles.consoleInfo}
          style={{ y: textY }}
        >
          <h1
            className={styles.consoleTitle}
            style={{ color: consoleData.themeColor }}
          >
            {consoleData.name}
          </h1>

          <div className={styles.consoleYear}>
            {consoleData.year}
          </div>

          <div className={styles.consoleSales}>
            {salesCount}M Units Sold
          </div>

          <p className={styles.consoleDescription}>
            {consoleData.description}
          </p>

          <div className={styles.consoleSpecs}>
            <div><strong>CPU:</strong> {consoleData.specs.cpu}</div>
            <div><strong>GPU:</strong> {consoleData.specs.gpu}</div>
            <div><strong>RAM:</strong> {consoleData.specs.ram}</div>

            {consoleData.specs.storage && (
              <div><strong>Storage:</strong> {consoleData.specs.storage}</div>
            )}

            {consoleData.specs.media && (
              <div><strong>Media:</strong> {consoleData.specs.media}</div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}







