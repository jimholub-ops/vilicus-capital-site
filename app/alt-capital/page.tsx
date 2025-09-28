import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Download, Shield, Handshake, Factory, Sprout, Globe, Link as LinkIcon, Landmark } from "lucide-react";
import { motion } from "framer-motion";

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
      <svg height="22" viewBox="0 0 640 90" aria-label="Vilicus Capital wordmark">
        <text x="0" y="64" fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight="700" fontSize="64" letterSpacing="0.5">
          Vilicus <tspan fill="#0C7C59">Capital</tspan>
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
            <a href="#what" className="text-sm hover:opacity-80">What we invest in</a>
            <a href="#how" className="text-sm hover:opacity-80">Investment strategy</a>
            <a href="#focus" className="text-sm hover:opacity-80">Sectors of focus</a>
            <a href="#principles" className="text-sm hover:opacity-80">Investment principles</a>
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
              Financing a regenerative, employee‑owned real‑economy
            </motion.h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              We acquire and recapitalize essential businesses—especially across the food system—and transition them to employee ownership under purpose‑trust governance. We align operating cash flows and land stewardship with long‑term, compounding value.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="/overview.pdf" target="_blank" rel="noreferrer">
                  <Download className="h-5 w-5 mr-2"/>
                  Download overview
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <a href="#what">Learn more</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/>Purpose‑trust governance</div>
              <div className="flex items-center gap-2"><Handshake className="h-4 w-4"/>Employee ownership</div>
              <div className="flex items-center gap-2"><Landmark className="h-4 w-4"/>Cash‑flow underwriting</div>
            </div>
          </div>
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle>Operators and workers at the center</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3"><Sprout className="mt-1 h-5 w-5"/> Structure acquisitions for employee ownership via a purpose‑trust‑anchored holdco.</li>
                  <li className="flex items-start gap-3"><Factory className="mt-1 h-5 w-5"/> Pair operating companies with aligned farmland management, processing, and logistics.</li>
                  <li className="flex items-start gap-3"><Globe className="mt-1 h-5 w-5"/> Underwrite with disciplined cash‑flow metrics and plain‑English impact KPIs alongside returns.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="what" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: <Handshake className="h-6 w-6"/>, title: "Acquire, recapitalize, convert", body: "We acquire and recapitalize resilient food‑system and other real‑economy businesses, converting them to employee ownership with a purpose‑trust backbone."},
            {icon: <Factory className="h-6 w-6"/>, title: "Integrate supply nodes & services", body: "Link processing, logistics, and distribution with regional producers to shorten and stabilize supply chains."},
            {icon: <Globe className="h-6 w-6"/>, title: "Align land & stewardship", body: "Use leases and contracts to reward regenerative practice and long‑term value creation."},
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
            <h2 className="text-2xl font-bold">Investment strategy</h2>
            <ol className="mt-4 space-y-4 text-slate-700 list-decimal list-inside">
              <li><strong>Target essential nodes.</strong> Owner‑ready businesses in processing, logistics, and local distribution.</li>
              <li><strong>Structure for dignity & durability.</strong> Purpose‑trust + employee ownership; cash flows service debt while building worker equity.</li>
              <li><strong>Operational lift.</strong> Shared services, quality systems, and training to raise margins and resilience.</li>
              <li><strong>Land alignment.</strong> Leases/contracts that reward stewardship and long‑term value creation.</li>
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
        <h2 className="text-2xl font-bold">Sectors of focus</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {title: "Regional processing & light manufacturing", items: ["Wash/pack", "Cut & prep", "Ingredient & grain milling"]},
            {title: "Cold chain & logistics", items: ["Refrigerated storage", "Route density", "Last‑mile distribution"]},
            {title: "Community retail & institutional channels", items: ["Community grocery", "Institutional buyers", "CSA/DSD models"]},
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
        <h2 className="text-2xl font-bold">Plain‑English investment principles</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {title: "Back owner‑ready teams", body: "We back capable operators and teams; structures follow the people, not the other way around."},
            {title: "Cash‑flow discipline", body: "Acquisitions pencil with conservative debt service; growth pays its own way."},
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
            <p className="mt-2 text-slate-600 max-w-prose">Operators, owners, investors, and community partners—let’s talk. Use the form or email us directly.</p>
            <a href="mailto:hello@vilicuscapital.com" className="mt-3 inline-flex items-center gap-2 text-slate-700 hover:opacity-80"><Mail className="h-4 w-4"/>hello@vilicuscapital.com</a>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Contact form</CardTitle>
            </CardHeader>
            <CardContent>
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
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Vilicus Capital. All rights reserved.</p>
          <div className="text-sm text-slate-500">Built on purpose‑trust + employee ownership.</div>
        </div>
      </footer>
    </div>
  );
}
