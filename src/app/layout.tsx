import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Navaneethan KV | Associate Software Analyst & Front-End Developer",
  description: "Portfolio of Navaneethan KV — Associate Software Analyst @ Agilysys specializing in Angular, React.js, Next.js, and high-performance front-end architecture.",
  keywords: ["Navaneethan KV", "Front End Developer", "Angular", "React", "Agilysys", "Next.js", "Software Analyst"],
  authors: [{ name: "Navaneethan KV" }],
  openGraph: {
    title: "Navaneethan KV | Front-End Developer Portfolio",
    description: "Building responsive, performance-driven web apps with Angular, React.js, and modern UI engineering.",
    type: "website",
  },
  icons: {
    icon: "/favicon.avif",
    apple: "/favicon.avif",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Navaneethan KV",
  "jobTitle": "Associate Software Analyst",
  "worksFor": {
    "@type": "Organization",
    "name": "Agilysys Technologies"
  },
  "knowsAbout": [
    "Angular",
    "React.js",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Front-End Engineering"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/navaneethan-k-v-546a9025b",
    "https://github.com/navanee1609",
    "https://www.instagram.com/navneethkrishna_05"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Ensure favicon is correctly linked */}
        <link rel="icon" href="/favicon.avif" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.avif" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD Schema Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
