'use client'
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';

// Create the NavbarContext
export const NavbarContext = createContext();

export default function ClientLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      <div className="flex bg-gray-100 min-h-screen">
        {/* Navbar - Fixed on large screens */}
        <div className="lg:w-[320px] flex-shrink-0">
          <Navbar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 min-h-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </NavbarContext.Provider>
  );
} 