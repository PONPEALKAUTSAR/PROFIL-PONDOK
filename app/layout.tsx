// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pondok Pesantren Al Kautsar",
  description: "Terwujudnya sumber daya manusia yg islami, berakhlak mulia, cerdas, terampil, sehat jasmani dan rohani.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">{children}</main>
        {/* Footer TODO */}
        <footer className="bg-pesantren-dark text-white py-8 text-center">
          <p>© 2026 Pondok Pesantren Al Kautsar. Semua Hak Cipta Dilindungi.</p>
        </footer>
      </body>
    </html>
  );
}