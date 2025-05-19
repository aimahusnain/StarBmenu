import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starbucks Menu With Prices​ 2025 | USA",
  description: "Starbucks offers a diverse menu, including espresso, coffee, tea, bakery items, breakfast, and lunch options. In addition to their specialty coffee drinks, they also provide a selection of snacks and baked goods for those seeking a quick bite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3597647165623612"
     crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mb-[70px]">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
