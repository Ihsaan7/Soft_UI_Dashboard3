'use client'

import AuthNavbar from '../components/AuthNavbar';

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AuthNavbar type="signup" />
      <main className="flex flex-1 items-center justify-center">
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign Up</h2>
          <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="password" placeholder="Password" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <button type="submit" className="bg-orange-500 text-white font-bold rounded-lg px-4 py-2 hover:bg-orange-600 transition-all">Sign Up</button>
        </form>
      </main>
    </div>
  );
}
