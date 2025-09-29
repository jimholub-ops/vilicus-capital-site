// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Vilicus Capital",
  description: "Get in touch with Vilicus Capital.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-semibold">Contact Vilicus Capital</h1>
      <p className="mb-8 text-sm text-neutral-600">
        Have a question or opportunity? Send us a note and we’ll get back to you.
      </p>

      {/* 🔴 Replace ONLY the endpoint below with your Formspree code */}
      <form
        action="https://formspree.io/f/xjkakqba"
        method="POST"
        className="space-y-5"
      >
        {/* Anti-bot honeypot (leave hidden) */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-black"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-black"
            placeholder="you@domain.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-black"
            placeholder="How can we help?"
          />
        </div>

        {/* Optional helpers */}
        <input type="hidden" name="_subject" value="New inquiry from vilicus.us" />
        {/* To change the post-submit redirect, set a URL here: */}
        {/* <input type="hidden" name="_next" value="https://vilicus.us/thanks" /> */}

        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-black bg-black px-4 py-2 text-white transition hover:bg-white hover:text-black"
        >
          Send
        </button>
      </form>
    </main>
  );
}
