import React from 'react';
import Link from 'next/link';

export default function AuthNavbar({ type = 'signin' }) {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center gap-2">
        <img src="/profileB.png" alt="Logo" className="w-10 h-10 rounded-lg" />
        <span className="font-bold text-xl text-orange-500">Soft UI</span>
      </div>
      <div>
        {type === 'signin' ? (
          <span className="text-gray-600 text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/SignUp" className="text-orange-500 font-bold hover:underline">Sign Up</Link>
          </span>
        ) : (
          <span className="text-gray-600 text-sm">
            Already have an account?{' '}
            <Link href="/SignIn" className="text-orange-500 font-bold hover:underline">Sign In</Link>
          </span>
        )}
      </div>
    </nav>
  );
}
