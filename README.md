<div align="center">
  <h1>🚀 Leonardo Cavalheiro - US Internship Portfolio</h1>
  <p>A high-performance, interactive 3D web portfolio designed for Software Engineering Internship applications in the US market.</p>
</div>

---

## 📖 Overview

This portfolio is built to showcase my backend and software architecture skills, while maintaining an immersive and optimized frontend experience. It features a 3D animated drone rendered with WebGL (Three.js), tied to the user's scroll position (GSAP) to create a "storytelling" experience as recruiters navigate through the site.

The site is designed with a **"Less is More"** philosophy, focusing strictly on verifiable projects (Lab 3D, PatchPilot), core tech stacks, and performance optimization.

## 🛠️ Technology Stack

- **Structure:** HTML5, CSS3 (Custom properties, CSS Grid/Flexbox)
- **3D Graphics:** [Three.js](https://threejs.org/) (WebGL)
- **Animations:** [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- **Icons:** [Lucide Icons](https://lucide.dev/) & [Devicon](https://devicon.dev/)
- **State/Logic:** Vanilla JavaScript (ES6+)

## ✨ Key Features & Optimizations

1. **Performance-First 3D Rendering:** 
   - Uses the `Page Visibility API` to pause WebGL rendering (`requestAnimationFrame`) when the browser tab is inactive, saving battery and GPU usage.
   - Dynamic `PixelRatio` capping aiming to maintain good performance on high-DPI mobile devices (like modern iPhones) without thermal throttling.
2. **Scroll-Driven Storytelling:** 
   - GSAP timeline scrubs the 3D drone's position and rotation based on the scroll progress, creating an interactive journey.
3. **Internationalization (i18n):** 
   - Client-side language toggle (EN/PT) with state persistence via `localStorage`.
4. **Modern UI/UX:** 
   - Glassmorphism, noise overlays, and CSS scroll-snap implemented without heavy frontend frameworks (React/Vue), proving raw web capabilities.

## 🚀 Running Locally

Because this project uses ES6 Modules (for Three.js), it must be run via a local HTTP server (not by opening the file directly).

1. **Clone the repo:**
   ```bash
   git clone https://github.com/LeonardoGarbuio/portfolio_EUA.git
   cd portfolio_EUA/site_2.0
   ```
2. **Start a local server:**
   You can use `npx`:
   ```bash
   npx serve .
   ```
   *Or using Python:*
   ```bash
   python -m http.server 3000
   ```
3. **Open in browser:**
   Navigate to `http://localhost:3000`

## 📞 Contact

- **Email:** leonardogarbuiocavalheiro@gmail.com
- **LinkedIn:** [Leonardo Garbuio Cavalheiro](https://www.linkedin.com/in/leonardo-garbuio-cavalheiro-207b70327/)
- **GitHub:** [LeonardoGarbuio](https://github.com/LeonardoGarbuio)
