import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Criar observer para detectar qual seção está visível
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Ativa quando a seção está no centro
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    // Observar todas as seções com ID
    const sections = document.querySelectorAll("[id]");
    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return activeId;
}
