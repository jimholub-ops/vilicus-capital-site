import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vilicus Capital",
  description: "Financing a regenerative, employee-owned real economy.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vilicus Capital",
    description: "Financing a regenerative, employee-owned real economy.",
    url: "https://example.com",
    siteName: "Vilicus Capital",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Vilicus Capital",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
