"use client";

import { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => setMenuOpen(false);  // Helper function to close menu

  return (
    <header className="px-6 py-4 shadow-md bg-white">
      <div className="flex justify-between items-center h-16">
        {/* Left side: Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          MyBrand
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition">
            Home
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-gray-900 transition">
            Shop
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 transition">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition">
            Contact Us
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <Link href="/sign-in">
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition cursor-pointer"
                onClick={handleMenuClose} // Close menu when clicking
              >
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition cursor-pointer"
                onClick={handleMenuClose} // Close menu when clicking
              >
                Sign Up
              </button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-900 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-gray-700 hover:text-gray-900 transition"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-gray-900 transition"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-gray-900 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

          {/* Auth Buttons inside Mobile menu */}
          <SignedOut>
            <Link href="/sign-in">
              <button
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition cursor-pointer"
                onClick={handleMenuClose} // Close menu when clicking
              >
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition cursor-pointer"
                onClick={handleMenuClose} // Close menu when clicking
              >
                Sign Up
              </button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
    </header>
  );
}
