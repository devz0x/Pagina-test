
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-bold text-brand-light tracking-wider">
          ARQUITECTURA <span className="text-brand-accent">SANCHIZ</span>
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium uppercase tracking-widest text-brand-light hover:text-brand-accent transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium uppercase tracking-widest text-brand-light hover:text-brand-accent transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
