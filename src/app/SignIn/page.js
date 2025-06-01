'use client'

import AuthNavbar from '../components/AuthNavbar';

const ABSTRACT_IMAGE = "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-x-hidden">
      {/* Abstract Art Image - behind everything, tilted */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-screen z-0 pointer-events-none overflow-hidden">
        <img 
          src={ABSTRACT_IMAGE} 
          alt="Abstract Art" 
          className="w-full h-full object-cover -rotate-6 origin-top-right" 
        />
      </div>
      
      {/* Navbar (with transparency) */}
      <div className="relative z-50">
        <AuthNavbar />
      </div>

      <main className="flex flex-1 flex-col lg:flex-row w-full max-w-7xl mx-auto relative z-10">
        {/* Left: Form */}
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 bg-clip-text text-transparent">Welcome back</h2>
            <p className="text-gray-500 mb-8">Enter your email and password to sign in</p>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input type="email" placeholder="Email" className="border text-gray-700 border-gray-300 rounded-lg px-4 py-2 w-full placeholder-gray-700" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Password</label>
                <input type="password" placeholder="Password" className="border text-gray-700 border-gray-300 rounded-lg px-4 py-2 w-full placeholder-gray-700" />
              </div>
              <div className="flex items-center gap-2">
                {/* Modern toggle switch */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
                <span className="text-gray-700">Remember me</span>
              </div>
              <button type="submit" className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold rounded-lg px-4 py-2 hover:from-sky-500 hover:to-blue-600 transition-all mt-2">Sign in</button>
            </form>
            <p className="text-gray-500 text-center mt-6">
              Don't have an account?{' '}
              <a href="/SignUp" className="text-blue-600 font-bold hover:underline">Sign up</a>
            </p>
          </div>
        </div>
        {/* Right: Spacer for layout only, image is absolutely positioned */}
        <div className="hidden lg:block flex-1" />
      </main>
      {/* Footer */}
      <footer className="w-full py-8 bg-white border-t border-gray-100 flex flex-col items-center gap-4 mt-auto relative z-10">
        <div className="flex flex-wrap justify-center gap-2 text-gray-400 text-base font-medium">
          <a href="#" className="hover:text-orange-500">Company</a>
          <a href="#" className="hover:text-orange-500">About Us</a>
          <a href="#" className="hover:text-orange-500">Team</a>
          <a href="#" className="hover:text-orange-500">Products</a>
          <a href="#" className="hover:text-orange-500">Blog</a>
          <a href="#" className="hover:text-orange-500">Pricing</a>
        </div>
        <div className="text-gray-400 text-sm text-center">Copyright © 2025 Soft by Creative Tim.</div>
      </footer>
    </div>
  );
}
