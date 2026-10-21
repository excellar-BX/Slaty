import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-white">
          Slaty<span className="text-orange">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/80">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-orange" : "hover:text-white transition"}>
            Home
          </NavLink>
          <NavLink to="/become-a-tutor" className={({ isActive }) => isActive ? "text-orange" : "hover:text-white transition"}>
            Become a Tutor
          </NavLink>
        </nav>

        {/* Desktop Call to Action */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZYzOU5Gri3AiOXn_WkT8zTG9sXRqT9fnbSTeZCZ9U4ZBV4Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-orange px-4 py-2 text-sm font-semibold text-black transition hover:opacity-95"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden rounded-lg p-2 text-white/80 hover:bg-white/10 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black px-6 py-4 space-y-4">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-white/80 hover:text-orange"
          >
            Home
          </Link>
          <Link
            to="/become-a-tutor"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-white/80 hover:text-orange"
          >
            Become a Tutor
          </Link>
          <div className="pt-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZYzOU5Gri3AiOXn_WkT8zTG9sXRqT9fnbSTeZCZ9U4ZBV4Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-orange px-4 py-2 text-center text-sm font-semibold text-black"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
