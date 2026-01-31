# 🎮 PlayStation Evolution Timeline

<div align="center">

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.x-black?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![CSS Modules](https://img.shields.io/badge/CSS%20Modules-Scoped%20Styling-000000?style=flat-square&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)
[![Intersection Observer](https://img.shields.io/badge/Intersection%20Observer-Viewport%20API-FF6F00?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
[![ESLint](https://img.shields.io/badge/ESLint-Code%20Quality-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[Live Demo](https://playstation-evolution-timeline-no41ss34b.vercel.app/)
 • [Features](#-features) • [Architecture](#-architecture) • [Getting Started](#-getting-started)

</div>

---

# 🇺🇸 English Version

## 🎯 Overview

PlayStation Evolution Timeline is a performance-focused frontend architecture project designed to demonstrate:

- Scroll-based state orchestration
- Intersection Observer optimization
- Modular component scalability
- Framer Motion animation patterns
- Responsive UI engineering
- Type-safe data modeling

This project avoids traditional scroll listeners and instead relies on a central viewport trigger strategy using the Intersection Observer API.

---

## 🎯 Purpose

This project was built as part of a professional frontend portfolio to demonstrate:

- Advanced scroll orchestration
- Clean component architecture
- Performance-first rendering strategy
- Production deployment workflow
- Modern TypeScript-driven development

---

## ✨ Features

- Scroll-driven active section detection
- Central viewport trigger (rootMargin: -50%)
- Animated numeric counters
- Sidebar with active marker animation
- Adaptive mobile labels (PS1 → PS5 Pro)
- Modular architecture
- Strict TypeScript interfaces
- Responsive layout across all breakpoints
- Clean separation between data and UI

---

## 🧠 Scroll Optimization Strategy

Instead of using window scroll listeners, the project uses:

```
Intersection Observer
rootMargin: "-50%"
```

### Why this matters

Performance  
Stable 60 FPS with minimal main-thread workload.

Precision  
The active state changes exactly when a section crosses the center of the viewport, creating intuitive timeline navigation.

This approach eliminates layout thrashing and unnecessary re-renders.

---

## 🏗 Architecture

### Folder Structure

```
src/
├── assets/
│   ├── consoles/
│   ├── logo/
│   └── audio/
│
├── components/
│   ├── BackgroundAudio.tsx
│   ├── ConsoleSection.tsx
│   ├── Footer.tsx
│   ├── HeroIntro.tsx
│   ├── Loader.tsx
│   ├── Scene3D.tsx
│   ├── ScrollProgress.tsx
│   ├── SideTimeline.tsx
│   └── StatsAnimated.tsx
│
├── data/
│   └── consoles.ts
│
├── hooks/
│   ├── useActiveSection.ts
│   └── useScrollAnimation.ts
│
├── styles/
│   ├── consoles.module.css
│   ├── footer.module.css
│   ├── hero.css
│   ├── loader.css
│   ├── mobileMenu.module.css
│   └── ...
│
├── App.tsx
└── main.tsx

```

---

## 🧩 Core Components

### ConsoleSection

Responsible for rendering each console era with:

- Image
- Description
- Release year
- Sales data
- Animated transitions
- Dynamic styling (retro → modern → futuristic)

```tsx
interface ConsoleSectionProps {
  data: ConsoleData
  index: number
  isActive: boolean
}
```

---

### SideTimeline

Handles:

- Active section highlighting
- Layout animation of marker
- Responsive label adaptation
- Scroll navigation

---

### useActiveSection Hook

Encapsulates Intersection Observer logic.

```ts
const activeId = useActiveSection(ids)
```

Detects when a section crosses the center of the screen.

---

### StatsAnimated

Animated numeric counter using Framer Motion:

- Triggers only when visible
- Smooth incremental animation
- Hardware-accelerated transitions

---

## 🎬 Animation System

Implemented with Framer Motion:

- Fade and slide-in transitions
- Parallax intro effects
- Animated sidebar marker
- Counter animations
- Hover effects

All animations are optimized to avoid layout recalculation.

---

## 📱 Responsive Strategy

### Desktop
Full console names displayed.

### Below 768px
Sidebar switches to compact labels:

PS1  
PS2  
PSP  
PS3  
PS Vita  
PS4  
PS4 Pro  
PS5  
PS5 Pro  

Prevents layout breaking and ensures visual balance.

---

## ⚙️ Technology Stack

| Layer | Technology | Purpose |
|-------|------------|----------|
| Framework | React 18 | UI architecture |
| Language | TypeScript | Type safety |
| Build Tool | Vite | Fast bundling |
| Styling | CSS Modules | Scoped styling |
| Animation | Framer Motion | Motion system |
| Scroll Detection | Intersection Observer API | Section activation |

---

## 🚀 Getting Started

### Requirements

Node.js ≥ 18  
npm ≥ 9  

### Installation

```bash
git clone https://github.com/DevYuriVieira/playstation-evolution-timeline.git
cd playstation-evolution-timeline
npm install
npm run dev
```

Runs at:

```
http://localhost:5173
```

---

## 🏗 Build

```bash
npm run build
npm run preview
```

---

## 🌍 Deployment

The project is deployed on Vercel and fully optimized for static hosting.

Live Production URL:
https://playstation-evolution-timeline-no41ss34b.vercel.app/

Zero-config deployment via Vite build output.
Automatic CI/CD on every push to main branch.

---

## 👨‍💻 Author

Yuri Vieira  
FullStack Developer  

GitHub  
https://github.com/DevYuriVieira  

LinkedIn  
https://www.linkedin.com/in/yuri-vieira-615131188/  

---

## 📄 License

MIT License

---

# 🇧🇷 Versão em Português

## 🎯 Visão Geral

PlayStation Evolution Timeline é um projeto frontend focado em arquitetura moderna e otimização de performance.

Demonstra:

- Detecção de seção baseada em Intersection Observer
- Arquitetura modular escalável
- Animações com Framer Motion
- Tipagem forte com TypeScript
- Responsividade avançada
- Separação clara entre camada de dados e UI

---

## 🚀 Scroll Otimizado (Gatilho Central)

Utilizamos a API Intersection Observer com:

```
rootMargin: "-50%"
```

Benefícios:

Performance estável  
Baixo consumo de CPU  
Mudança de estado precisa quando a seção cruza o centro da tela  

---

## 🏗 Estrutura do Projeto

```
src/
├── assets/
│   ├── consoles/
│   ├── logo/
│   └── audio/
│
├── components/
│   ├── BackgroundAudio.tsx
│   ├── ConsoleSection.tsx
│   ├── Footer.tsx
│   ├── HeroIntro.tsx
│   ├── Loader.tsx
│   ├── Scene3D.tsx
│   ├── ScrollProgress.tsx
│   ├── SideTimeline.tsx
│   └── StatsAnimated.tsx
│
├── data/
│   └── consoles.ts
│
├── hooks/
│   ├── useActiveSection.ts
│   └── useScrollAnimation.ts
│
├── styles/
│   ├── consoles.module.css
│   ├── footer.module.css
│   ├── hero.css
│   ├── loader.css
│   ├── mobileMenu.module.css
│   └── ...
│
├── App.tsx
└── main.tsx

```

Arquitetura organizada para escalabilidade e manutenção profissional.

---

## 🎬 Sistema de Animação

- Transições suaves
- Entrada com fade e slide
- Contadores animados
- Sidebar com marcador dinâmico
- Efeitos de hover

Tudo utilizando Framer Motion de forma performática.

---

## 📱 Responsividade

Desktop com nomes completos.

Abaixo de 768px:

PS1  
PS2  
PSP  
PS3  
PS Vita  
PS4  
PS4 Pro  
PS5  
PS5 Pro  

Garantindo estabilidade visual em qualquer tela.

---

## ⚙️ Stack Tecnológica

React 18  
TypeScript 5  
Vite 5  
Framer Motion  
CSS Modules  
Intersection Observer API  
ESLint  

---

## 🚀 Instalação

```bash
npm install
npm run dev
```

---

## 📄 Licença

MIT License

---

<div align="center">

Developed with precision by Yuri Vieira

</div>

