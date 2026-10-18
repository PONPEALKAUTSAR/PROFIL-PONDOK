"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo & Nama Ponpes */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 overflow-hidden rounded-full shadow-md flex items-center justify-center bg-[#134225]">
              <img 
                src="/images/Al kautsar logo.png" 
                alt="Logo Ponpes Al Kautsar" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-bold text-[#134225] group-hover:opacity-85 transition">
              Ponpes Al Kautsar
            </span>
          </Link>

          {/* Menu Navigasi Desktop */}
          <div className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
            <a href="/" className="hover:text-[#134225] transition">Beranda</a>
            <a href="/profil" className="hover:text-[#134225] transition">Profil</a>
            <a href="/pendidikan" className="hover:text-[#134225] transition">Pendidikan</a>
            <a href="/fasilitas" className="hover:text-[#134225] transition">Fasilitas</a>
            <a href="/psb" className="hover:text-[#134225] transition">PSB</a>
          </div>

          {/* Tombol Hamburger Menu untuk Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#134225] focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Dropdown Menu untuk Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#134225]">Beranda</a>
          <a href="/profil" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#134225]">Profil</a>
          <a href="/pendidikan" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#134225]">Pendidikan</a>
          <a href="/fasilitas" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#134225]">Fasilitas</a>
          <a href="/psb" className="block px-3 py-2 rounded-md text-base font-medium text-[#134225] bg-gray-50 hover:bg-gray-100">Daftar PSB</a>
        </div>
      )}
    </nav>
    // components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 overflow-hidden rounded-full shadow-md flex items-center justify-center bg-[#134225]">
              <img src="/images/Al kautsar logo.png" alt="Logo Ponpes Al Kautsar" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-bold text-[#134225] group-hover:opacity-85 transition">
              Ponpes Al Kautsar
            </span>
          </Link>

          {/* Menu Navigasi Desktop */}
          <div className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
            <a href="/" className="hover:text-[#134225] transition">Beranda</a>
            <a href="/profil" className="hover:text-[#134225] transition">Profil</a>
            <a href="/pendidikan" className="hover:text-[#134225] transition">Pendidikan</a>
            <a href="/kitab" className="hover:text-[#134225] transition border-b-2 border-transparent hover:border-[#134225]">Kajian Kitab</a>
            <a href="/fasilitas" className="hover:text-[#134225] transition">Fasilitas</a>
            <a href="/psb" className="hover:text-[#134225] transition">PSB</a>
          </div>

          {/* Hamburger Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#134225] focus:outline-none p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#134225]">Beranda</a>
          <a href="/profil" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#134225]">Profil</a>
          <a href="/pendidikan" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#134225]">Pendidikan</a>
          <a href="/kitab" className="block px-3 py-2 rounded-md text-base font-medium text-[#134225] bg-green-50">Kajian Kitab</a>
          <a href="/fasilitas" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#134225]">Fasilitas</a>
          <a href="/psb" className="block px-3 py-2 rounded-md text-base font-medium text-[#134225] bg-gray-50 hover:bg-gray-100">Daftar PSB</a>
        </div>
      )}
    </nav>
  );
}
  );
}