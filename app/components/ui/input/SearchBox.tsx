"use client";

import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const SearchBox = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const handleSearch = () => {
    if (!query.trim()) return;
    console.log("Searching:", query);
  };

  return (
    <div
      className={`
    relative flex items-center rounded-full transition-all duration-300
    ${
      open
        ? "bg-gray-100 border border-gray-300"
        : "bg-transparent border border-transparent"
    }
  `}
    >
      {/* Icon */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="z-10 ml-2 text-gray-500 hover:text-white hover:bg-orange-400 rounded-lg p-2 transition"
        aria-label="Search"
      >
        <Search size={24} />
      </button>

      {/* Input */}
      <input
        ref={inputRef}
        type="search"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className={`
      transition-all duration-300 ease-in-out
      bg-transparent text-gray-700
      py-2 text-sm outline-none
      ${open ? "w-50 opacity-100 pl-3 pr-4 ml-2" : "w-0 opacity-0 px-0"}
    `}
      />
    </div>
  );
};

export default SearchBox;
