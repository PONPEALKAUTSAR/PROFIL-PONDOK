// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Daftar menu navigasi
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil", href: "/profil" },
    { name: "Pendidikan", href: "/pendidikan" },
    { name: "Kajian Kitab", href: "/kitab" },
    { name: "Fasilitas", href: "/fasilitas" },
    { name: "Peraturan", href: "/peraturan" },
    { name: "PSB", href: "/psb" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Ponpes */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 overflow-hidden rounded-full shadow-md flex items-center justify-center bg-[#134225] ring-2 ring-green-600/20 group-hover:scale-105 transition">
              <img src="/images/Al kautsar logo.png" alt="Logo Ponpes Al Kautsar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#134225] tracking-tight">
                Ponpes Al Kautsar
              </span>
              <span className="text-xs text-gray-500 font-medium">Tanah Bumbu, Kalsel</span>
            </div>
          </Link>

          {/* Menu Navigasi Desktop dengan Efek Glow & Apple Style */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-100/70 p-1.5 rounded-full border border-gray-200/60 shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#134225] text-white shadow-[0_0_20px_rgba(19,66,37,0.4)] scale-105"
                      : "text-gray-600 hover:text-[#134225] hover:bg-white/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Hamburger Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-[#134225] focus:outline-none p-2 rounded-xl bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition ${
                  isActive
                    ? "bg-[#134225] text-white shadow-[0_0_15px_rgba(19,66,37,0.4)] font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}