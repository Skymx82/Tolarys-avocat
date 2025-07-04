'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo et nom */}
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/logo.png" 
            alt="Tolarys Logo" 
            width={40} 
            height={40}
            className="w-10 h-10"
          />
          <span className="font-semibold text-lg">
            <span className="text-black">Tolarys</span> <span className="text-[#6B4DE6]">Avocat</span>
          </span>
        </Link>

        {/* Navigation desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-black hover:text-[#6B4DE6] transition-colors"
          >
            Accueil
          </Link>
          <Link 
            href="#audit-form" 
            className="bg-[#6B4DE6] hover:bg-[#5A3DD3] text-white px-5 py-2 rounded-md transition-colors"
          >
            Audit gratuit
          </Link>
        </div>

        {/* Hamburger menu pour mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              href="/" 
              className="block text-black hover:text-[#6B4DE6] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="#audit" 
              className="block bg-[#6B4DE6] hover:bg-[#5A3DD3] text-white px-4 py-2 rounded-md transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Audit gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
