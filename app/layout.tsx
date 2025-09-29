// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vilicus Capital",
  description: "Financing a regenerative, employee-owned real economy.",
  icons: { icon: "/favicon.ico" },

  // Set this to your live domain or current preview URL
  metadataBase: new URL("https://vilicus.us"),

  openGraph: {
    title: "Vilicus Capital",
    description: "Financing a regenerative, employee-owned real economy.",
    url: "https://vilicus.us",
    siteName: "Vilicus Capital",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vilicus Capital" }],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vilicus Capital",
    description: "Financing a regenerative, employee-owned real economy.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
