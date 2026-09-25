# Rader AI — Enterprise AI Observability & Radar Intelligence Website

A high-performance, dark-mode cyberpunk/enterprise web application built for **Rader AI** (autonomous AI observability, signal intelligence, and neural drift interception platform).

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
The optimized production bundle will be built in the `dist/` directory.

---

## 🧭 Project Architecture & Structure

```
ai startup/
├── index.html               # Main HTML entry with typography & favicon
├── package.json             # React 18, Vite, Tailwind CSS, Lucide React
├── vite.config.js           # Vite development and build settings
├── tailwind.config.js       # Custom radar-green/cyan color tokens & animations
├── postcss.config.js        # PostCSS configuration
├── src/
│   ├── main.jsx             # React application DOM mount
│   ├── index.css            # Tailwind base + custom scanlines and glows
│   ├── App.jsx              # Application root orchestrating all sections & modal
│   └── components/
│       ├── Navbar.jsx          # Sticky nav with live node indicator & mobile menu
│       ├── Hero.jsx            # High-conversion hero with CLI installer snippet
│       ├── RadarCanvas.jsx     # 60fps HTML5 Canvas realistic sweep HUD
│       ├── InteractiveDemo.jsx # Sandbox cockpit with injection trigger & live logs
│       ├── Features.jsx        # Bento grid displaying 6 core capabilities
│       ├── Architecture.jsx    # 4-stage data pipeline with interactive deep-dive
│       ├── CodeShowcase.jsx    # Multi-language SDK tabs (Python, TS, cURL, Go)
│       ├── Pricing.jsx         # Tiered pricing matrix with monthly/annual switch
│       ├── Testimonials.jsx    # Enterprise social proof, logos & SOC2/HIPAA badges
│       ├── DemoModal.jsx       # Interactive lead capture & instant API key generator
│       └── Footer.jsx          # Multi-column footer with newsletter & status pill
```

---

## ✨ Features Included

- **60 FPS Real-time Radar Sweep**: HTML5 Canvas rendering of concentric range rings, rotating sweep beam, and real-time blips with fading tails.
- **Interactive Anomaly Sandbox**: Allows users to click "Inject Attack Vector", testing real-time alert triggers and automated failover mitigation logs.
- **Dynamic Pricing Calculator**: Annual vs. Monthly switch with instant price calculations and savings badges.
- **Interactive Lead Capture & Provisioning Modal**: Validates user details and simulates instant production API key issuance.
- **Developer Quickstart**: Tabbed code samples in Python, TypeScript/Node.js, cURL, and Go with 1-click clipboard copying.
- **Mobile Responsive**: Full mobile menu, adaptive grid layouts, and high accessibility.
