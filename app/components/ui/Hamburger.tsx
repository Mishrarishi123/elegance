"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "About", href: "/about" },
];

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Menu"
        aria-expanded={open}
        className="relative z-[60] w-8 h-8 flex items-center justify-center"
      >
        <span
          className={`
            absolute w-6 h-[2px] bg-black
            transition-all duration-300
            ${open ? "rotate-45" : "-translate-y-[4px]"}
          `}
        />
        <span
          className={`
            absolute w-6 h-[2px] bg-black
            transition-all duration-300
            ${open ? "-rotate-45" : "translate-y-[4px]"}
          `}
        />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
          z-40
        `}
      />

      {/* Right Drawer */}
      <aside
        className={`
          fixed top-0 right-0 h-screen w-[80%] max-w-sm
          bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          z-50
          flex flex-col
        `}
      >
        {/* Menu Items */}
        <nav className="flex flex-col gap-6 px-8 py-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xl font-medium text-gray-900 hover:text-orange-500 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Hamburger;
