// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Top hero with logo (optional) */}
      <div className="mb-10 flex items-center gap-4">
        <Image
          src="/logo.svg" // change to "/logo.png" if that's your file
          alt="Vilicus Capital"
          width={160}
          height={40}
          priority
        />
        <h1 className="text-2xl font-semibold">Vilicus Capital</h1>
      </div>

      <h2 className="text-3xl font-semibold">
        Financing a regenerative, employee-owned real economy.
      </h2>

      <p className="mt-4 max-w-2xl text-neutral-700">
        We back real businesses and workers building resilient regional supply chains.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/overview.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-black bg-black px-4 py-2 text-white transition hover:bg-white hover:text-black"
        >
          Download Overview
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center rounded-md border border-black px-4 py-2 transition hover:bg-black hover:text-white"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
