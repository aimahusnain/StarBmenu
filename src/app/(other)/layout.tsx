import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Loading from "@/src/providers/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarBucks Menu",
  description: "Starbucks offers a diverse menu, including espresso, coffee, tea, bakery items, breakfast, and lunch options. In addition to their specialty coffee drinks, they also provide a selection of snacks and baked goods for those seeking a quick bite.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#0b7555" />
      <body className={inter.className}>
        {/* <Loading> */}
        <Navbar />
  <div className="mt-[100px]">
  {children}
  </div>
        <Footer />
        {/* </Loading> */}
      </body>
    </html>
  );
}
