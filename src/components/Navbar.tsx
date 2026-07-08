import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenPartnerModal: () => void;
  onOpenGetStartedModal: () => void;
}

export default function Navbar({
  activePage,
  setActivePage,
  onOpenPartnerModal,
  onOpenGetStartedModal
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const coreNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'business', label: 'Our Business' },
    { id: 'team', label: 'Our Team' },
    { id: 'investors', label: 'Investor Relations' }
  ];

  const moreNavItems = [
    { id: 'blogs', label: 'Blogs' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const isMoreActive = moreNavItems.some(item => activePage === item.id);

  return (
    <header 
      id="main-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-slate-150/60' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          id="brand-logo-btn"
          to="/"
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <Logo className="h-8 md:h-9" />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1">
          {coreNavItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <Link
                id={`nav-item-${item.id}`}
                key={item.id}
                to={item.id === 'home' ? '/' : `/${item.id}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className={`relative px-3 py-2 font-display text-xs md:text-sm font-semibold tracking-tight transition-colors duration-200 cursor-pointer ${
                  isActive 
                    ? 'text-brand-primary' 
                    : 'text-slate-600 hover:text-brand-primary'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-primary rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* More Dropdown */}
          <div 
            className="relative" 
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              id="more-dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 px-3 py-2 font-display text-xs md:text-sm font-semibold tracking-tight transition-colors duration-200 cursor-pointer relative ${
                isMoreActive 
                  ? 'text-brand-primary font-bold' 
                  : 'text-slate-600 hover:text-brand-primary'
              }`}
            >
              <span>More</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              {isMoreActive && (
                <motion.span 
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-primary rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-1 w-44 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-100 py-1.5 z-50 origin-top-right"
                >
                  {moreNavItems.map((item) => {
                    const isActive = activePage === item.id;
                    return (
                      <Link
                        id={`nav-item-${item.id}`}
                        key={item.id}
                        to={`/${item.id}`}
                        onClick={() => {
                          setDropdownOpen(false);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs md:text-sm font-semibold tracking-tight transition-colors duration-150 cursor-pointer block ${
                          isActive 
                            ? 'text-brand-primary bg-slate-50' 
                            : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="become-partner-nav-btn"
            onClick={onOpenPartnerModal}
            className="text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 transition-all duration-300 hover:shadow-xs cursor-pointer"
          >
            Become a Partner
          </button>
          
          <button
            id="get-started-nav-btn"
            onClick={onOpenGetStartedModal}
            className="text-xs font-bold text-white bg-brand-primary hover:bg-brand-secondary shadow-xs hover:shadow-md hover:shadow-brand-primary/10 rounded-lg px-4 py-2 transition-all duration-300 transform active:scale-95 flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" /> Get Started
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Quick CTA button for mobile */}
          <button
            id="get-started-quick-btn"
            onClick={onOpenGetStartedModal}
            className="text-[10px] font-bold text-white bg-brand-primary px-3 py-1.5 rounded-lg block cursor-pointer"
          >
            Get Started
          </button>
          
          <button
            id="mobile-hamburger-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-650 hover:text-brand-primary bg-slate-50 border border-slate-200 rounded-lg cursor-pointer flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-2xl z-40 max-h-[85vh] overflow-y-auto py-4 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Navigation</span>
              
              {[...coreNavItems, ...moreNavItems].map((item) => (
                <Link
                  id={`nav-item-mobile-${item.id}`}
                  key={item.id}
                  to={item.id === 'home' ? '/' : `/${item.id}`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-2 px-3 rounded-xl text-sm font-semibold transition-all ${
                    activePage === item.id 
                       ? 'bg-brand-primary/10 text-brand-primary font-bold' 
                       : 'text-slate-600 hover:bg-slate-50 hover:text-brand-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-slate-150 pt-4 mt-2 flex flex-col gap-2">
                <button
                  id="mobile-partner-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPartnerModal();
                  }}
                  className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 cursor-pointer"
                >
                  Become a Partner
                </button>
                <button
                  id="mobile-getstarted-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGetStartedModal();
                  }}
                  className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-brand-primary hover:bg-brand-secondary shadow-md cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
