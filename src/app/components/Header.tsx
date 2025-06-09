"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
  <Link href="/" className="text-lg sm:text-xl font-bold text-blue-600 tracking-wide">Semarang Mengaji</Link>
  <span className="text-xs sm:text-sm text-gray-500 font-normal">database kajian sunnah semarang</span>
</div>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 lg:gap-8 text-gray-700 font-medium text-sm lg:text-base">
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Kajian Rutin</Link></li>
            <li><Link href="/tematik" className="hover:text-blue-600 transition-colors">Tematik</Link></li>
            <li><Link href="/jumat" className="hover:text-blue-600 transition-colors">Khotbah Jum&#39;at</Link></li>
            <li><Link href="/asatidzah" className="hover:text-blue-600 transition-colors">Asatidzah</Link></li>
            <li><Link href="/lokasi" className="hover:text-blue-600 transition-colors">Lokasi</Link></li>
            <li><Link href="/partners" className="hover:text-blue-600 transition-colors">Our Partners</Link></li>
            <li><Link href="/about-us" className="hover:text-blue-600 transition-colors">About Us</Link></li>
          </ul>
        </nav>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-gray-100 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col gap-1 px-6 py-4 text-gray-700 font-medium text-base animate-fade-in">
            <li><Link href="/" className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">Kajian Rutin</Link></li>
            <li><Link href="/tematik" className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">Tematik</Link></li>
            <li><Link href="/jumat" className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">Khotbah Jum'at</Link></li>
            <li><Link href="/asatidzah" className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">Asatidzah</Link></li>
            <li><Link href="/lokasi" className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">Lokasi</Link></li>
            <li><Link href="/partners" className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">Our Partners</Link></li>
            <li><Link href="/about-us" className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">About Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
