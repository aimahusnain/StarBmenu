import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0b7555" />
      </head>
      <body className={inter.className}>
        <main>
          <div className="mb-[70px]">
            <Navbar />
          </div>
          <div className="flex mt-[110px] px-5 md:px-[60px] my-9">
            <Sidebar />
            <div className="w-full">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
