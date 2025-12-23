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
        relative flex items-center rounded-xl transition-all duration-300
        bg-gray-100 border border-gray-300 md:w-[52vw]  lg:w-[19vw]
      `}
    >
      {/* Icon */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          z-10 ml-2 text-gray-500 hover:text-orange-400
          rounded-full p-2 transition
          lg:cursor-pointer
        "
        aria-label="Search"
      >
        <Search size={22} />
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
          bg-transparent text-gray-700
          py-2 text-sm outline-none
          transition-all  duration-300 ease-in-out

          
          w-100 pl-3 pr-4 ml-2 opacity-100

          /* lg and above → TOGGLE */
          lg:${
            open ? "w-100 opacity-100 pl-3 pr-4 ml-2" : "w-0 opacity-0 px-0 ml-0"
          }
        `}
      />
    </div>
  );
};

export default SearchBox;
