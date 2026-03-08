"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <span className="text-white font-black text-lg">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-blue-800 font-extrabold text-lg leading-none tracking-wide">WALKINS</span>
              <span className="text-blue-500 text-[9px] font-medium tracking-widest leading-none">WALKINDRIVES.IN</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/drives" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">
              Browse Drives
            </Link>
            <Link href="/#companies" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">
              Companies
            </Link>
            <Link href="/#how-it-works" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">
              How It Works
            </Link>
            <Link href="/employer/dashboard" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">
              For Employers
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200"
            >
              Post a Drive
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3 shadow-lg">
          <Link href="/drives" className="block text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors" onClick={() => setIsOpen(false)}>
            Browse Drives
          </Link>
          <Link href="/#companies" className="block text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors" onClick={() => setIsOpen(false)}>
            Companies
          </Link>
          <Link href="/#how-it-works" className="block text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors" onClick={() => setIsOpen(false)}>
            How It Works
          </Link>
          <Link href="/employer/dashboard" className="block text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors" onClick={() => setIsOpen(false)}>
            For Employers
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <Link href="/login" className="text-center py-2.5 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>
              Sign In
            </Link>
            <Link href="/signup" className="text-center py-2.5 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors" onClick={() => setIsOpen(false)}>
              Post a Drive
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
