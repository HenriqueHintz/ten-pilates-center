<div align="center">
  <img src="public/favicon.svg" alt="Ten Pilates Center Logo" width="80" />

  # Ten Pilates Center
  **A Premium Pilates Studio Experience — Motion-Driven Landing Page**  
  *Experiência Premium em Pilates — Landing Page Dinâmica e Conversiva*

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

</div>

<br />

## 🎯 About / Sobre

**English:**  
Ten Pilates Center is a professional, high-conversion landing page designed for a premium Pilates studio located in Florianópolis, SC. Built with real frontend modern technologies—React 19, Vite, Tailwind CSS v4, and Framer Motion—it features a highly immersive cinematic aesthetic. The layout leverages dynamic video backgrounds, micro-interactions, and a sophisticated color palette (Navy and Orange accents) to communicate elegance, wellness, and professionalism. The core value prop is simple: turn visitors into high-value studio leads.

**Português:**  
Ten Pilates Center é uma landing page focada em alta conversão e estética premium para um estúdio de Pilates localizado em Florianópolis, SC. Desenvolvida com a stack frontend mais moderna do mercado (React 19, Vite, Tailwind CSS v4 e Framer Motion), ela oferece uma experiência cinematográfica e imersiva. A interface utiliza vídeos dinâmicos, micro-interações fluidas e uma paleta de cores sofisticada (fundo Navy e detalhes em Laranja) para comunicar elegância, bem-estar e serviço de alto padrão. O principal objetivo de negócio é direto e claro: transformar visitantes da página em potenciais clientes (leads) qualificados para o estúdio.

---

## 🛠 Tech Stack & Architecture

| Technology | Purpose |
| :--- | :--- |
| **Vite** | Blazing fast build tool and development server. |
| **React 19** | Component-based UI library rendering the core frontend architecture. |
| **TypeScript** | Strict static typing for resilient and robust code execution. |
| **Tailwind CSS v4** | Utility-first CSS framework for rapid UI styling, avoiding CSS bloat. |
| **Motion** | Fluid, physics-based viewport animations and scroll reveals. |
| **Lucide React** | Clean, highly scalable SVG iconography set. |

---

## 🚀 Key Features / Principais Funcionalidades

- **Cinematic Hero Video Integration:** Uses immersive video playback and typography to hook users instantly.
- **Scroll-Aware Animations:** Sections progressively reveal based on viewport intersection via `motion/react` ensuring constant user engagement.
- **Granular Media Control:** Custom video players within `ModalityCards` strictly handling mobile/desktop autoplay logic with initial frame presentation (`preload="auto"`).
- **Fully Responsive Matrix:** Tailored CSS Grid and Flexbox layouts guaranteeing pixel-perfect views on Retina Desktops to dense mobile screens.
- **Conversion-Optimized CTA:** Strategic WhatsApp direct routing mapping user flow straight into the sales funnel funnel.

---

## 💻 Running Locally / Rodando Localmente

To run this project on your machine, clone the repository and execute the following:

```bash
# 1. Clone the repository
git clone https://github.com/HenriqueHintz/ten-pilates-center.git

# 2. Enter the directory
cd ten-pilates-center

# 3. Install dependencies
npm install

# 4. Start the frontend development server
npm run dev
```

> **Note:** The server will by default run on `http://localhost:3000`.

---

## 📁 System Architecture / Estrutura do Sistema

```text
├── src/
│   ├── components/
│   │   └── ui/           # Headless & Reusable Core UI Components (Buttons, Containers)
│   ├── sections/         # Big Page Blocks (Hero, About, PremiumBenefitsSection)
│   ├── App.tsx           # Main Application Container & Route Handling
│   └── index.css         # Global Styles & Tailwind Configuration Imports
├── public/               # Static assets & images
├── package.json          # Dependency Manifest
└── vite.config.ts        # Vite Bundler Settings
```

---

## 📈 Status

**Production-Ready:** This repository serves as the stable, production-ready frontend client for the Ten Pilates business ecosystem.

---

## 👨‍💻 Author

**Henrique Hintz**
- GitHub: [@HenriqueHintz](https://github.com/HenriqueHintz)
