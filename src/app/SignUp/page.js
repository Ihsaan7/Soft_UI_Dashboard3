'use client'

import AuthNavbar from '../components/AuthNavbar';
import Link from 'next/link';

export default function SignUp() {
  const ABSTRACT_IMAGE = "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Navbar - transparent, sits on top of image */}
      <div className="absolute w-full z-30">
        <AuthNavbar customClassName="bg-transparent shadow-none border-none" />
      </div>
      {/* Hero Section with Background */}
      <div className="relative w-full flex flex-col items-center justify-center p-2" style={{ minHeight: '350px' }}>
        <img
          src={ABSTRACT_IMAGE}
          alt="Abstract Art"
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-b-2xl max-h-[400px]"
        />
        {/* Removed fade/overlay */}
        <div className="relative z-20 flex flex-col items-center justify-center py-16 px-4 w-full">
          <h1 className="text-5xl font-bold text-white mb-4 text-center drop-shadow-lg">Welcome!</h1>
          <p className="text-lg text-white/90 text-center max-w-xl mx-auto drop-shadow-md">
            Use these awesome forms to login or create new account in your project for free.
          </p>
        </div>
      </div>
      {/* Registration Card */}
      <div className="flex-1 flex flex-col items-center justify-center py-8 px-2 bg-white">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 mt-[-120px] z-30 relative flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-center mb-2 text-black">Register with</h2>
          {/* Social Buttons */}
          <div className="flex justify-center gap-4 mb-2">
            {/* Facebook */}
            <button className="border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition flex items-center justify-center" aria-label="Sign up with Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F3" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#1877F3"/>
                <path d="M15.5 8.5H14V7.5C14 7.22 14.22 7 14.5 7H15.5V5H14.5C13.12 5 12 6.12 12 7.5V8.5H11V10.5H12V17H14V10.5H15.09L15.5 8.5Z" fill="white"/>
              </svg>
            </button>
            {/* Apple */}
            <button className="border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition flex items-center justify-center" aria-label="Sign up with Apple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#000"/>
                <path d="M16.5 17.5C16.09 18.13 15.61 18.75 14.91 18.75C14.21 18.75 13.97 18.34 13.13 18.34C12.29 18.34 12.01 18.75 11.34 18.75C10.67 18.75 10.13 18.13 9.72 17.5C8.81 16.13 8.99 13.97 10.13 13.97C10.77 13.97 11.13 14.41 11.91 14.41C12.69 14.41 13.01 13.97 13.72 13.97C14.86 13.97 15.09 16.13 14.18 17.5H16.5ZM13.5 7.5C13.5 8.05 13.05 8.5 12.5 8.5C11.95 8.5 11.5 8.05 11.5 7.5C11.5 6.95 11.95 6.5 12.5 6.5C13.05 6.5 13.5 6.95 13.5 7.5Z" fill="white"/>
              </svg>
            </button>
            {/* Google */}
            <button className="border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition flex items-center justify-center" aria-label="Sign up with Google">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#fff"/>
                <g clipPath="url(#clip0)">
                  <path d="M21.805 12.23c0-.68-.06-1.36-.18-2.01H12v3.81h5.5c-.24 1.29-.97 2.39-2.07 3.13v2.6h3.34c1.96-1.81 3.08-4.48 3.08-7.53z" fill="#4285F4"/>
                  <path d="M12 22c2.7 0 4.97-.89 6.63-2.41l-3.34-2.6c-.93.62-2.13.99-3.29.99-2.53 0-4.68-1.71-5.44-4.01H3.09v2.52C4.82 19.36 8.13 22 12 22z" fill="#34A853"/>
                  <path d="M6.56 13.97A5.98 5.98 0 016 12c0-.68.12-1.34.32-1.97V7.51H3.09A9.98 9.98 0 002 12c0 1.64.39 3.19 1.09 4.49l3.47-2.52z" fill="#FBBC05"/>
                  <path d="M12 6.5c1.47 0 2.78.51 3.81 1.51l2.85-2.85C16.97 3.89 14.7 3 12 3 8.13 3 4.82 5.64 3.09 7.51l3.47 2.52C7.32 8.21 9.47 6.5 12 6.5z" fill="#EA4335"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="20" fill="white" transform="translate(2 2)"/>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          {/* Divider */}
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          {/* Form */}
          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Name" className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600" />
            <input type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600" />
            <input type="password" placeholder="Password" className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600" />
            <div className="flex items-center gap-2 mt-1">
              <input id="terms" type="checkbox" className="accent-orange-500 w-4 h-4" />
              <label htmlFor="terms" className="text-sm text-gray-700">I agree the <span className="font-bold">Terms and Conditions</span></label>
            </div>
            <button type="submit" className="bg-black text-white font-bold rounded-lg px-4 py-2 mt-2 hover:bg-gray-900 transition-all">Sign up</button>
          </form>
          <p className="text-center text-gray-500 text-sm mt-2">
            Already have an account?{' '}
            <Link href="/SignIn" className="font-semibold text-black hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
