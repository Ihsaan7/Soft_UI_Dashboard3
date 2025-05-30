import React from 'react';
import Link from 'next/link';

export default function AuthNavbar() {
  return (
    <div className="w-full flex justify-center pt-6 pb-2 bg-transparent">
      <nav className="w-full max-w-6xl flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-100" style={{marginTop: 0}}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-md text-black">Soft UI Dashboard 3</span>
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 font-bold hover:text-orange-500 transition text-sm">Dashboard</Link>
          <Link href="/Profile" className="text-gray-700 font-bold hover:text-orange-500 transition text-sm">Profile</Link>
          <Link href="/SignUp" className="text-gray-700 font-bold hover:text-orange-500 transition text-sm  ">Sign Up</Link>
          <Link href="/SignIn" className="text-gray-700 font-bold hover:text-orange-500 transition text-sm ">Sign In</Link>
        </div>
        {/* Buttons with gradient bg */}
        <div className="flex items-center gap-3  to-pink-100 rounded-full px-2 py-1">
          <button className="border-2 border-orange-400 text-orange-500 font-bold rounded-full px-2 py-1.5 hover:bg-white transition-all text-xs ">Online Builder</button>
          <button className="bg-black text-white font-bold rounded-full px-5 py-1.5 hover:bg-gray-800 transition-all text-sm">Free download</button>
        </div>
      </nav>
    </div>
  );
}
