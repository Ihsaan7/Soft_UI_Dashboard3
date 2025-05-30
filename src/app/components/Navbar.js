'use client'
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavItem = ({ icon, label, isActive, href }) => (
  <Link href={href} className="block">
    <div className={`flex items-center gap-3 w-full p-2.5 rounded-xl transition-all duration-300 cursor-pointer
      ${isActive 
        ? 'bg-gradient-to-r from-orange-500 to-orange-400 shadow-[0_4px_12px_0_rgba(251,146,60,0.5)]' 
        : 'hover:bg-gray-100'
      }`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] 
        ${isActive ? 'bg-white' : 'bg-gray-100'}`}>
        <img src={icon} alt={label} className="w-5 h-5" />
      </div>
      <h3 className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-700'}`}>
        {label}
      </h3>
    </div>
  </Link>
);

const Navbar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const scrollContainerRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const mainMenuItems = [
    { icon: './profileB.png', label: 'Dashboard', href: '/' },
    { icon: './profileB.png', label: 'Tables', href: '/Tables' },
    { icon: './profileB.png', label: 'Billing', href: '/Billing' },
    { icon: './profileB.png', label: 'Virtual Reality', href: '/VirtualReality' },
    { icon: './profileB.png', label: 'RTL', href: '/RTL' }
  ];

  const accountItems = [
    { icon: './profileB.png', label: 'Profile', href: '/Profile' },
    { icon: './profileB.png', label: 'Sign In', href: '/SignIn' },
    { icon: './profileB.png', label: 'Sign Up', href: '/SignUp' }
  ];

  // Check if content is scrollable
  const checkScrollable = () => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      setShowScrollIndicator(scrollHeight > clientHeight);
    }
  };

  // Handle scroll event
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const isBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      setIsAtBottom(isBottom);
    }
  };

  // Check on mount and when content changes
  useEffect(() => {
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  // Add scroll event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Close navbar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById('mobile-navbar');
      if (navbar && !navbar.contains(event.target) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 lg:hidden
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Navbar */}
      <nav 
        id="mobile-navbar"
        className={`fixed lg:sticky top-0 left-0 h-screen z-50 transition-transform duration-300 ease-in-out transform bg-gray-100
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="w-[320px] h-screen flex flex-col bg-gray-100 overflow-hidden lg:rounded-r-2xl">
          {/* Logo Section - Fixed at top */}
          <div className="flex-shrink-0 flex items-center justify-between gap-3 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 shadow-lg flex items-center justify-center">
                <img src="./profileB.png" alt="logo" className="w-6 h-6" />
              </div>
              <h3 className="text-lg text-gray-800 font-bold">Soft UI Dashboard</h3>
            </div>
            <button 
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-200 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="gray" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content with Indicator */}
          <div className="relative flex-1 overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="h-full overflow-y-scroll px-8 py-4 hide-scrollbar"
            >
              {/* Main Menu */}
              <div className="flex flex-col gap-2">
                {mainMenuItems.map((item, index) => (
                  <NavItem 
                    key={index} 
                    {...item} 
                    isActive={pathname === item.href}
                  />
                ))}
              </div>

              {/* Account Section */}
              <div className="mt-8">
                <h3 className="text-xs text-gray-400 font-semibold px-4 mb-4">
                  ACCOUNT PAGES
                </h3>
                <div className="flex flex-col gap-2">
                  {accountItems.map((item, index) => (
                    <NavItem 
                      key={index} 
                      {...item} 
                      isActive={pathname === item.href}
                    />
                  ))}
                </div>
              </div>

              {/* Help Section */}
              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-[0_8px_16px_-6px_rgba(0,0,0,0.2)]">
                <div className="w-10 h-10 rounded-xl bg-white backdrop-blur-xl flex items-center justify-center mb-4">
                  <img src="./profileB.png" alt="help" className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-1">Need Help?</h3>
                <p className="text-sm text-gray-300 mb-4">Please check our docs</p>
                <button className="w-full py-2.5 px-4 bg-white text-gray-800 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300">
                  Documentation
                </button>
              </div>

              {/* Upgrade Button */}
              <div className="mt-6 mb-4">
                <button className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-xl font-semibold shadow-[0_4px_12px_0_rgba(251,146,60,0.5)] hover:shadow-[0_6px_16px_0_rgba(251,146,60,0.6)] transition-all duration-300">
                  Upgrade to Pro
                </button>
              </div>
            </div>

            {/* Scroll Indicators */}
            {showScrollIndicator && (
              <>
                {/* Top fade */}
                {isAtBottom && (
                  <div className="absolute top-0 left-0 right-0 h-12 pointer-events-none bg-gradient-to-b from-gray-100 via-gray-100/80 to-transparent flex items-center justify-center">
                    <div className="animate-bounce mb-2">
                      <svg 
                        className="w-5 h-5 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Bottom fade */}
                {!isAtBottom && (
                  <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none bg-gradient-to-t from-gray-100 via-gray-100/80 to-transparent flex items-center justify-center">
                    <div className="animate-bounce mt-2">
                      <svg 
                        className="w-5 h-5 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </nav>

      <style jsx global>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Navbar;