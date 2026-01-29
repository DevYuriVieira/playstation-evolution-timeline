import { useState } from "react";
import { consoles } from "./data/consoles";
import styles from "./styles/mobileMenu.module.css";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <button
        className={styles.floatingButton}
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {open && (
        <div className={styles.overlay}>
          <div className={styles.menu}>
            {consoles.map((console) => (
              <div
                key={console.id}
                onClick={() => scrollToSection(console.id)}
                className={styles.menuItem}
              >
                {console.name}
              </div>
            ))}
            <button
              className={styles.close}
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
