import { motion } from "framer-motion";
import "../styles/hero.css";

export default function HeroIntro() {
  return (
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hero-logo-container"
      >
        <img 
          src="https://pngimg.com/d/sony_playstation_PNG17532.png" 
          alt="PlayStation Logo"
          className="hero-logo"
        />
        <h1 className="hero-title">EVOLUTION</h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
        className="hero-subtitle"
      >
        30 YEARS OF GAMING EXCELLENCE
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.3 }}
        className="hero-years"
      >
        1994 → 2024
      </motion.p>
    </section>
  );
}
