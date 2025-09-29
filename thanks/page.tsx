// app/thanks/page.tsx
export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="mb-4 text-3xl font-semibold">Thanks — message received</h1>
      <p className="text-neutral-600">
        We’ll get back to you shortly. In the meantime, feel free to explore the site.
      </p>
      <div className="mt-8">
        <a
          href="/"
          className="inline-flex items-center rounded-md border border-black bg-black px-4 py-2 text-white transition hover:bg-white hover:text-black"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
