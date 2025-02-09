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
  title: "DevFolio | Navaneethan KV",
  description: "Developer portfolio of Navaneethan KV",
  icons: {
    icon: "/favicon.png", // Use favicon from the public folder
    apple: "/favicon.png", // Apple touch icon
  },
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
