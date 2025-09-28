import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Download, Leaf, Shield, Handshake, Factory, Sprout, Globe, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Vilicus Federated – Single-file preview site + inline logo
 * -----------------------------------------------------------
 * • TailwindCSS for styling (no extra imports needed in this preview)
 * • shadcn/ui components for Buttons, Cards, Inputs
 * • lucide-react icons
 * • Framer Motion micro-animations
 *
 * Notes for production (Next.js 14 app router):
 * 1) Put /public/favicon.ico and /public/og.png in your project; use the metadata in app/layout.tsx.
 * 2) Replace the Formspree placeholder with your real endpoint.
 * 3) Place your real Overview file at /public/overview.pdf (the button points there).
 * 4) Export the <VilicusLogo /> SVG to /public/logo.svg if you want an external asset as well.
 */

function VilicusLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vilicus leaf">
        <defs>
          <linearGradient id="vig" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0C7C59"/>
            <stop offset="100%" stopColor="#79C99E"/>
          </linearGradient>
        </defs>
        <circle cx="18" cy="46" r="5" fill="#0C7C59" />
        <path d="M18 46C26 34 34 24 46 18" stroke="url(#vig)" strokeWidth="4" strokeLinecap="round"/>
        <path d="M46 18c8 2 12 7 12 14 0 10-10 18-26 18 6-8 9-20 14-32z" fill="url(#vig)"/>
      </svg>
      <svg height="22" viewBox="0 0 640 90" aria-label="Vilicus Federated wordmark">
        <text x="0" y="64" fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight="700" fontSize="64" letterSpacing="0.5">
          Vilicus <tspan fill="#0C7C59">Federated</tspan>
        </text>
      </svg>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f6fbf8] to-white text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/40 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <VilicusLogo />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#what" className="text-sm hover:opacity-80">What we do</a>
            <a href="#how" className="text-sm hover:opacity-80">How it works</a>
            <a href="#focus" className="text-sm hover:opacity-80">Focus areas</a>
            <a href="#principles" className="text-sm hover:opacity-80">Principles</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="rounded-2xl">
              <a href="/overview.pdf" target="_blank" rel="noreferrer">
                <Download className="h-4 w-4 mr-2"/>
                Download overview
              </a>
            </Button>
            <Button asChild className="rounded-2xl">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Building a regenerative, employee‑owned food system
            </motion.h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              We acquire and steward essential food‑supply chain businesses, transition them to employee ownership, and align farmland management with long‑term community and ecological health.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="/overview.pdf" target="_blank" rel="noreferrer">
                  <Download className="h-5 w-5 mr-2"/>
                  Download overview
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <a href="#what">
                  Learn more
                </a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/>Purpose‑trust governance</div>
              <div className="flex items-center gap-2"><Handshake className="h-4 w-4"/>Employee ownership</div>
              <div className="flex items-center gap-2"><Leaf className="h-4 w-4"/>Regenerative outcomes</div>
            </div>
          </div>
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle>Owner‑operators at the center</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3"><Sprout className="mt-1 h-5 w-5"/> Transition supply‑chain firms to employee ownership through a federated holdco.</li>
                  <li className="flex items-start gap-3"><Factory className="mt-1 h-5 w-5"/> Pair operating companies with aligned farmland management and local processing.</li>
                  <li className="flex items-start gap-3"><Globe className="mt-1 h-5 w-5"/> Measure outcomes with pragmatic, plain‑English impact metrics alongside returns.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="what" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: <Handshake className="h-6 w-6"/>, title: "Acquire & convert", body: "We acquire resilient food‑supply businesses and convert them to employee ownership with a purpose‑trust backbone."},
            {icon: <Factory className="h-6 w-6"/>, title: "Integrate supply nodes", body: "Link processing, logistics, and distribution with regional producers to shorten and stabilize supply chains."},
            {icon: <Leaf className="h-6 w-6"/>, title: "Steward land", body: "Align farmland management and leases with regenerative practices that improve soils and livelihoods."},
          ].map((c, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-3">
                {c.icon}
                <CardTitle className="text-lg">{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">{c.body}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">How it works</h2>
            <ol className="mt-4 space-y-4 text-slate-700 list-decimal list-inside">
              <li><strong>Target essential nodes.</strong> Owner‑ready businesses in processing, logistics, and local distribution.</li>
              <li><strong>Structure for dignity.</strong> Purpose‑trust + employee ownership; cash flows service debt while building worker equity.</li>
              <li><strong>Operational lift.</strong> Shared services, quality systems, and training to raise margins and resilience.</li>
              <li><strong>Land alignment.</strong> Farmland leases/contracts that reward stewardship and long‑term value creation.</li>
            </ol>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Download the one‑pager</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">A crisp overview for investors, partners, and owner‑operators.</p>
              <div className="mt-4">
                <Button asChild className="rounded-2xl">
                  <a href="/overview.pdf" target="_blank" rel="noreferrer"><Download className="h-4 w-4 mr-2"/>Overview (PDF)</a>
                </Button>
              </div>
              <p className="mt-2 text-xs text-slate-500">Place your real file at <code className="px-1 py-0.5 bg-slate-100 rounded">/public/overview.pdf</code> in production.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="focus" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Focus areas</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {title: "Regional processing", items: ["Wash/pack", "Cut & prep", "Light manufacturing"]},
            {title: "Cold chain & logistics", items: ["Refrigerated storage", "Route density", "Last‑mile distribution"]},
            {title: "Retail & wholesale", items: ["Community grocery", "Institutional buyers", "CSA/DSD models"]},
          ].map((b, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle>{b.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-700 space-y-2">
                  {b.items.map((it, j) => <li key={j} className="flex items-center gap-2"><LinkIcon className="h-4 w-4"/>{it}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="principles" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Plain‑English principles</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {title: "Owner‑ready first", body: "We back capable operators and teams; structures follow the people, not the other way around."},
            {title: "Cash flow discipline", body: "Acquisitions pencil with conservative debt service; growth pays its own way."},
            {title: "Local keeps value local", body: "Shorter chains, better margins, stronger communities."},
            {title: "Stewardship is ROI", body: "Regenerative land practice is not charity—it underwrites long‑term returns."},
          ].map((p, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader><CardTitle className="text-lg">{p.title}</CardTitle></CardHeader>
              <CardContent className="text-slate-600">{p.body}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="mt-2 text-slate-600 max-w-prose">Owner‑operators, investors, and community partners—let’s talk. Use the form or email us directly.</p>
            <a href="mailto:hello@vilicusfederated.com" className="mt-3 inline-flex items-center gap-2 text-slate-700 hover:opacity-80"><Mail className="h-4 w-4"/>hello@vilicusfederated.com</a>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Contact form</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Replace action with your Formspree endpoint */}
              <form action="https://formspree.io/f/xyzabcd" method="POST" className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Input name="firstName" placeholder="First name" required />
                  <Input name="lastName" placeholder="Last name" required />
                </div>
                <Input type="email" name="email" placeholder="Email" required />
                <Input name="company" placeholder="Company / Org" />
                <textarea name="message" placeholder="Tell us a bit about yourself…" className="w-full rounded-lg border p-3 min-h-[120px]" required />
                <Button type="submit" className="rounded-2xl w-full">Send</Button>
                <p className="text-xs text-slate-500">Using Formspree. Replace the endpoint with your own.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <VilicusLogo className="h-6" />
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Vilicus Federated. All rights reserved.</p>
          <div className="text-sm text-slate-500">Built on purpose‑trust + employee ownership.</div>
        </div>
      </footer>
    </div>
  );
}
