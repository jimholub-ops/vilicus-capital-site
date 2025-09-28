# Vilicus Capital – Website Pages (Starter Bundle)

This zip contains three React pages you can drop into a Next.js 13/14 **app router** project, plus basic `/public` assets.

## Files
- `app/layout.tsx` – metadata, favicon/OG setup.
- `app/page.tsx` – **Vilicus Capital — Farmland Focus** (default homepage).
- `app/alt-capital/page.tsx` – Vilicus Capital — General Capital (operator-focused).
- `app/alt-federated/page.tsx` – Vilicus Federated — Draft Website + Logo.
- `public/overview.pdf` – placeholder (replace with your real PDF).
- `public/favicon.ico` – placeholder.
- `public/og.png` – placeholder.

## How to use
1. Create (or open) a Next.js **app router** project.
2. Copy the `app/` and `public/` folders into your project (merge/replace as needed).
3. Ensure Tailwind and shadcn/ui are installed (or swap out components for your own).
4. Put your real `public/overview.pdf` file in place.
5. Update emails, links, and Formspree endpoint in the Contact form.

> If you prefer **file-per-variant**, keep `app/page.tsx` as your chosen homepage and leave the others as alt routes (`/alt-capital`, `/alt-federated`).

## Dependencies
- TailwindCSS
- `lucide-react`
- `framer-motion`
- (Optional) `@/components/ui/*` for shadcn/ui buttons, cards, inputs. If you don't use shadcn, replace those with your own components or standard HTML.

---

**Note:** The content mirrors what we built together in ChatGPT Canvas.
