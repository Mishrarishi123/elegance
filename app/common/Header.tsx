"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import SearchBox from "../components/ui/input/SearchBox";
import Hamburger from "../components/ui/Hamburger";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "About", href: "/about" },
];

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 px-6 lg:px-16">
      <div className="container mx-auto ">
        {/* Top Row */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Image
            src="/logo/logo.png"
            alt="ÉLÉGANCE logo"
            width={160}
            height={60}
            priority
            className="w-[120px] sm:w-[140px] lg:w-[160px] h-auto"
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-16 text-lg font-medium text-black font-inter">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-500 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search: md and up inline */}
            <div className="hidden md:block">
              <SearchBox />
            </div>

            {/* Icons: md and up */}
            <div className="flex items-center gap-2">
              <Heart className="w-9 h-9 p-2 text-gray-600 rounded-lg hover:bg-orange-400 hover:text-white transition" />
              <ShoppingBag className="w-9 h-9 p-2 text-gray-600 rounded-lg hover:bg-orange-400 hover:text-white transition" />
            </div>

            {/* Hamburger: below lg */}
            <div className="lg:hidden">
              <Hamburger />
            </div>
          </div>
        </div>

        {/* Mobile Search (below header) */}
        <div className="md:hidden pb-3">
          <SearchBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
