import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Download, Shield, Sprout, Leaf, Landmark, Tractor, Trees, Ruler, MapPin, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

function VilicusLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vilicus leaf">
        <defs>
          <linearGradient id="vig2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0C7C59"/>
            <stop offset="100%" stopColor="#79C99E"/>
          </linearGradient>
        </defs>
        <circle cx="18" cy="46" r="5" fill="#0C7C59" />
        <path d="M18 46C26 34 34 24 46 18" stroke="url(#vig2)" strokeWidth="4" strokeLinecap="round"/>
        <path d="M46 18c8 2 12 7 12 14 0 10-10 18-26 18 6-8 9-20 14-32z" fill="url(#vig2)"/>
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
            <a href="#why" className="text-sm hover:opacity-80">Why farmland</a>
            <a href="#strategy" className="text-sm hover:opacity-80">Strategy</a>
            <a href="#stewardship" className="text-sm hover:opacity-80">Stewardship metrics</a>
            <a href="#pipeline" className="text-sm hover:opacity-80">Pipeline</a>
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
              Regenerative farmland as a durable, cash‑flowing real asset
            </motion.h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              We invest in and manage working farmland to lock in stewardship outcomes and reliable cash flows. Our model pairs land holdings with owner‑ready operating businesses—so value created on the ground circulates locally and compounds over time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="/overview.pdf" target="_blank" rel="noreferrer">
                  <Download className="h-5 w-5 mr-2"/>
                  Download overview
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <a href="#why">Learn more</a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Landmark className="h-4 w-4"/>Cash‑flow underwriting</div>
              <div className="flex items-center gap-2"><Leaf className="h-4 w-4"/>Regenerative practice</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/>Purpose‑trust + EO</div>
            </div>
          </div>
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle>Farmland investment pillars</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3"><Tractor className="mt-1 h-5 w-5"/> Buy well: productive soils, credible water, logistics proximity, and operator fit.</li>
                  <li className="flex items-start gap-3"><Ruler className="mt-1 h-5 w-5"/> Structure leases for outcomes: soil health, rotation, grazing, drainage/irrigation, and reporting.</li>
                  <li className="flex items-start gap-3"><Trees className="mt-1 h-5 w-5"/> Improve & hold: incremental capex (tiling, fencing, pollinator borders) tied to yield‑quality gains.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: <Sprout className="h-6 w-6"/>, title: "Real utility, low correlation", body: "Food demand is persistent; managed right, farmland can provide durable yield with lower volatility."},
            {icon: <Landmark className="h-6 w-6"/>, title: "Cash yields + embedded upside", body: "Base rent and profit‑share structures capture operational upside without sacrificing discipline."},
            {icon: <Leaf className="h-6 w-6"/>, title: "Stewardship creates alpha", body: "Drainage, organic matter, and biodiversity improvements compound agronomic and financial performance."},
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

      <section id="strategy" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">Strategy: land + operators, programmatically</h2>
            <ol className="mt-4 space-y-4 text-slate-700 list-decimal list-inside">
              <li><strong>Target geographies.</strong> Contiguous parcels in drivable clusters; access to buyers and infrastructure.</li>
              <li><strong>Partner with operators.</strong> Owner‑ready farm managers with track records; transition pathways into shared ownership.</li>
              <li><strong>Lease‑design.</strong> Base + variable rent; KPIs for soil, water, and biodiversity; capital improvement plans.</li>
              <li><strong>Integrate with supply nodes.</strong> Align with wash/pack, cold chain, and local distribution to increase route density and price realization.</li>
            </ol>
            <p className="mt-4 text-slate-600 text-sm">Vilicus Capital operates within the broader Vilicus Federated ecosystem of purpose‑trust and employee‑owned operating companies.</p>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Parcelization & lease‑to‑own</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><Ruler className="mt-1 h-5 w-5"/> Flexible parcel units for matching capital to operator capacity and risk.</li>
                <li className="flex items-start gap-3"><Sprout className="mt-1 h-5 w-5"/> Earn‑in options for operators tied to tenure, KPIs, and profit‑share thresholds.</li>
                <li className="flex items-start gap-3"><Tractor className="mt-1 h-5 w-5"/> Standardized diligence and templates to accelerate repeatable acquisitions.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="stewardship" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Plain‑English stewardship metrics</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {title: "Soil health", body: "Organic matter %, compaction scores, residue cover, and aggregate stability."},
            {title: "Water & drainage", body: "Tile/drainage effectiveness, irrigation efficiency, runoff minimization."},
            {title: "Biodiversity", body: "Hedgerows, pollinator borders, intercropping, and rotational diversity."},
            {title: "Operator well‑being", body: "Tenure pathways, safety, wages/earnings, and team stability."},
          ].map((p, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader><CardTitle className="text-lg">{p.title}</CardTitle></CardHeader>
              <CardContent className="text-slate-600">{p.body}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="pipeline" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Acquisition pipeline (illustrative)</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {title: "Upper Midwest cluster", items: ["1,200 acres row + forage", "Drainage & fencing capex", "Operator earn‑in, 5 yrs"]},
            {title: "Tennessee basin", items: ["600 acres mixed veg", "Shared wash/pack alignment", "CSA/DSD route density"]},
            {title: "Great Lakes corridor", items: ["800 acres grains + grazing", "Soil OM ↑ target 0.3%/yr", "Institutional off‑take"]},
          ].map((b, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle>{b.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-700 space-y-2">
                  {b.items.map((it, j) => <li key={j} className="flex items-center gap-2"><MapPin className="h-4 w-4"/>{it}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-500">For detail on current opportunities, see the Overview or contact us for a confidential conversation.</p>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="mt-2 text-slate-600 max-w-prose">Operators, landowners, and investors—let’s talk. Use the form or email us directly.</p>
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
                <textarea name="message" placeholder="Tell us a bit about your land or operation…" className="w-full rounded-lg border p-3 min-h-[120px]" required />
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
          <div className="text-sm text-slate-500">Part of the Vilicus Federated ecosystem.</div>
        </div>
      </footer>
    </div>
  );
}
