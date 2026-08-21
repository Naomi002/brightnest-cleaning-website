# BrightNest Cleaning — Responsive Service Business Website

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-10b981?style=for-the-badge&logo=github)](https://nabilanawrosenaomi.github.io/brightnest-cleaning-website/)
[![React 18](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite 6](https://img.shields.io/badge/Vite-6-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

A modern, conversion-focused, responsive business website built for a residential and small office cleaning service. Designed with a mobile-first layout, accessible UI primitives, smooth section navigation, structured SEO metadata, and an interactive quote request workflow.

🔗 **Live Demo URL**: [https://nabilanawrosenaomi.github.io/brightnest-cleaning-website/](https://nabilanawrosenaomi.github.io/brightnest-cleaning-website/)

> **Portfolio Disclaimer**: BrightNest Cleaning is a fictional portfolio project created to demonstrate frontend web development, responsive UI implementation, and conversion-focused user experience design. The quote request form is frontend-only; in a production deployment, this form can be integrated with any CRM, email service (e.g. Resend, SendGrid), or booking management backend.

---

## Responsive Layout Previews

| Desktop View (1440px) | Tablet View (768px) | Mobile View (390px) |
| :--- | :--- | :--- |
| ![Desktop View](./public/screenshots/brightnest-desktop.png) | ![Tablet View](./public/screenshots/brightnest-tablet.png) | ![Mobile View](./public/screenshots/brightnest-mobile.png) |

---

## Business & Client Value Highlights

* **Conversion-Driven Funnel**: Prominent call-to-action triggers in the header, hero, service cards, and sticky navigation funnel prospective clients directly into the quote request workflow.
* **Interactive Service Selection**: Clicking "Request Quote For This" on any service card automatically scrolls to the quote form and pre-selects the corresponding service in the controlled React form state.
* **Smart Validation & Date Restrictions**: Real-time frontend validation prevents submission of empty fields, invalid emails/phones, or past dates with clear inline error messaging.
* **Search Engine & Local SEO Ready**: Pre-configured with Open Graph social metadata, Twitter Cards, and valid `Schema.org` `CleaningService` / `LocalBusiness` JSON-LD structured data.
* **Accessibility Polish (WCAG Compliant)**: Full keyboard navigation support, high-contrast focus rings (`focus-visible`), touch targets $\ge 44\text{px}$, and valid ARIA associations (`aria-controls`, `aria-labelledby`, `aria-expanded`).
* **Clean & Extensible React Architecture**: Built with modular components, unified Tailwind design tokens, and strict TypeScript types with zero `any` usage.

---

## Tech Stack

* **React 18** — Component-driven UI library
* **TypeScript 5** — Type-safe compilation and strict typing
* **Vite 6** — Modern, high-performance frontend build tool
* **Tailwind CSS v3** — Utility-first styling framework with PostCSS & Autoprefixer
* **Lucide React** — Crisp SVG icon system

---

## Local Installation & Setup

1. **Clone or navigate to the project directory**:
   ```bash
   cd local-business-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Verify TypeScript compilation**:
   ```bash
   npx tsc --noEmit
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Preview the production build locally**:
   ```bash
   npm run preview
   ```
