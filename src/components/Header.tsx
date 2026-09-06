import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingBag, ArrowRight } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

interface HeaderProps {
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { totalItemsCount } = useQuote();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header background logic:
  // On home page: transparent when at top, then transitions to solid ivory on scroll.
  // On other pages: always solid ivory.
  const isSolid = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isSolid
          ? 'bg-ivory/95 backdrop-blur-md border-b border-beige shadow-soft py-2.5 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Mobile Left: Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={onOpenMobileMenu}
              type="button"
              className="p-2 -ml-2 text-charcoal hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo / Wordmark */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md">
              <img
                src="/images/logo-dark.png"
                alt="AB TRADERS Logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-charcoal leading-none">
                  AB TRADERS
                </span>
                <span className="text-[9px] tracking-luxury uppercase text-charcoal-400 font-medium mt-0.5">
                  Packaging Solutions
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[14px] font-medium text-charcoal">
            <Link
              to="/"
              className={`transition-colors hover:text-gold relative py-1 ${
                location.pathname === '/' ? 'text-charcoal font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gold' : 'text-charcoal-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`transition-colors hover:text-gold relative py-1 ${
                location.pathname.startsWith('/shop') ? 'text-charcoal font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gold' : 'text-charcoal-600'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/custom-branding"
              className={`transition-colors hover:text-gold relative py-1 ${
                location.pathname === '/custom-branding' ? 'text-charcoal font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gold' : 'text-charcoal-600'
              }`}
            >
              Custom Branding
            </Link>
            <Link
              to="/industries"
              className={`transition-colors hover:text-gold relative py-1 ${
                location.pathname === '/industries' ? 'text-charcoal font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gold' : 'text-charcoal-600'
              }`}
            >
              Industries
            </Link>
            <Link
              to="/about"
              className={`transition-colors hover:text-gold relative py-1 ${
                location.pathname === '/about' ? 'text-charcoal font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gold' : 'text-charcoal-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`transition-colors hover:text-gold relative py-1 ${
                location.pathname === '/contact' ? 'text-charcoal font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gold' : 'text-charcoal-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              type="button"
              className="p-2 text-charcoal-600 hover:text-charcoal hover:bg-beige/50 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Search packaging products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quote Basket Trigger */}
            <Link
              to="/quote"
              className="p-2 text-charcoal-600 hover:text-charcoal hover:bg-beige/50 rounded-full transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={`View quote basket with ${totalItemsCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-gold text-white text-[11px] font-bold rounded-full flex items-center justify-center px-1 shadow-sm animate-fade-in">
                  {totalItemsCount}
                </span>
              )}
            </Link>

            {/* Desktop "Get Bulk Quote" Button */}
            <Link
              to="/quote"
              className="hidden sm:inline-flex items-center gap-1.5 bg-charcoal hover:bg-charcoal-800 text-ivory text-xs font-semibold px-4 py-2.5 rounded-md tracking-wide transition-all shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span>Get Bulk Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
