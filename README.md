<div align="center">

# 🧘 Ten Pilates Center

**Landing Page Premium — Noir Essence Design System**

Uma landing page de alta conversão para o **Ten Pilates Center**, estúdio de Pilates localizado na Trindade, Florianópolis - SC. Projetada com foco em performance, estética premium e experiência mobile-first.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## ✨ Features

- **Design System Noir Essence** — Paleta sofisticada Navy (`#1A1A2E`), Orange (`#C45A2D`), Sand (`#FAF8F5`) e Stone (`#EDE9E3`)
- **Animações Premium** — Micro-interações com Framer Motion, ícones SVG animados com física de mola
- **Mobile-First** — Layout 100% responsivo, menu hambúrguer com scroll lock, carrossel touch-friendly
- **SEO Otimizado** — Semântica HTML5, meta tags, heading hierarchy, performance otimizada
- **Integração WhatsApp** — CTAs conectados diretamente ao WhatsApp do estúdio
- **Tipografia Premium** — Google Fonts (Inter + Playfair Display) com renderização otimizada

## 🏗️ Arquitetura

```
src/
├── components/
│   ├── ui/              # Design System (Button, Container, Section)
│   ├── Navbar.tsx        # Navegação responsiva com scroll detection
│   └── FloatingWhatsApp.tsx  # Botões flutuantes (WhatsApp + Scroll-to-top)
├── sections/
│   ├── Hero.tsx          # Seção principal com CTAs
│   ├── About.tsx         # Sobre o estúdio
│   ├── PremiumBenefitsSection.tsx  # Benefícios com ícones animados
│   ├── VideoSection.tsx  # VSL com formato TikTok (mobile)
│   ├── InstagramSection.tsx  # Feed do Instagram com carrossel
│   ├── FAQ.tsx           # Perguntas frequentes (accordion)
│   ├── Location.tsx      # Mapa e localização
│   ├── FinalCTA.tsx      # Call-to-action final
│   └── Footer.tsx        # Rodapé com links e assinatura
├── App.tsx               # Composição principal
├── index.css             # Design tokens e variáveis globais
└── main.tsx              # Entry point
```

## 🚀 Como Rodar

**Pré-requisitos:** [Node.js](https://nodejs.org/) (v18+)

```bash
# 1. Clone o repositório
git clone https://github.com/HenriqueHintz/ten-pilates-center.git

# 2. Acesse a pasta
cd ten-pilates-center

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
```

O app estará disponível em `http://localhost:3000`

## 🎨 Design System

| Token | Cor | Uso |
|-------|-----|-----|
| `brand-navy` | `#1A1A2E` | Textos principais, fundos escuros |
| `brand-orange` | `#C45A2D` | Destaques, CTAs, interações |
| `brand-sand` | `#FAF8F5` | Background principal |
| `brand-stone` | `#EDE9E3` | Seções alternadas |

## 📱 Responsividade

- **Mobile** (< 640px) — Layout vertical, carrossel com navegação touch, vídeo formato TikTok (3:4)
- **Tablet** (640px - 1024px) — Layout adaptado com grids flexíveis
- **Desktop** (> 1024px) — Layout completo com hover effects e animações expandidas

## 🛠️ Tech Stack

| Tecnologia | Versão | Função |
|-----------|--------|--------|
| React | 19 | UI Library |
| Vite | 6 | Build Tool |
| TailwindCSS | 4 | Styling |
| Framer Motion | 11 | Animações |
| Lucide React | — | Ícones |
| TypeScript | 5 | Type Safety |

---

<div align="center">

**Desenvolvido por [@henriquehtz](https://www.instagram.com/henriquehtz/)**

</div>
