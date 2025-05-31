import React, { useState } from 'react';
import Link from 'next/link';

export default function AuthNavbar({ customClassName = "" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center pt-6 pb-2 bg-transparent">
      <nav
        className={
          customClassName
            ? `w-full max-w-6xl flex items-center justify-between px-6 py-3 ${customClassName}`
            : "w-full max-w-6xl flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-100"
        }
        style={{ marginTop: 0 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-md text-black">Soft UI Dashboard 3</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 font-bold hover:text-orange-500 transition text-sm">Dashboard</Link>
          <Link href="/Profile" className="text-gray-700 font-bold hover:text-orange-500 transition text-sm">Profile</Link>
          <Link href="/SignUp" className="text-gray-700 font-bold hover:text-orange-500 transition text-sm">Sign Up</Link>
          <Link href="/SignIn" className="text-gray-700 font-bold hover:text-orange-500 transition text-sm">Sign In</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3 to-pink-100 rounded-full px-2 py-1">
          <button className="border-2 border-orange-400 text-orange-500 font-bold rounded-full px-2 py-1.5 hover:bg-white transition-all text-xs">Online Builder</button>
          <button className="bg-black text-white font-bold rounded-full px-5 py-1.5 hover:bg-gray-800 transition-all text-sm">Free download</button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-xl shadow-lg border border-gray-100 py-2 md:hidden z-50">
            <div className="flex flex-col">
              <Link 
                href="/" 
                className="px-4 py-2 text-gray-700 font-bold hover:bg-gray-50 hover:text-orange-500 transition text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/Profile" 
                className="px-4 py-2 text-gray-700 font-bold hover:bg-gray-50 hover:text-orange-500 transition text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link 
                href="/SignUp" 
                className="px-4 py-2 text-gray-700 font-bold hover:bg-gray-50 hover:text-orange-500 transition text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link 
                href="/SignIn" 
                className="px-4 py-2 text-gray-700 font-bold hover:bg-gray-50 hover:text-orange-500 transition text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <div className="border-t border-gray-100 my-2"></div>
              <div className="px-4 py-2 flex flex-col gap-2">
                <button className="w-full border-2 border-orange-400 text-orange-500 font-bold rounded-lg px-4 py-2 hover:bg-orange-50 transition-all text-sm">
                  Online Builder
                </button>
                <button className="w-full bg-black text-white font-bold rounded-lg px-4 py-2 hover:bg-gray-800 transition-all text-sm">
                  Free download
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
