import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import {Button} from "../components/ui/Button"
import SearchBox from "../components/ui/input/SearchBox";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "About", href: "/about" },
];

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-16 py-6">
        {/* Logo */}
        <Image
          src="/logo/logo.png"
          alt="ÉlÉGANCE logo"
          width={160}
          height={200}
          priority
        />

        {/* Navigation */}
        <nav>
          <ul className="flex gap-12 text-black text-lg font-inter font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-orange-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search */}

        {/* Icons */}
        <div className="flex items-center gap-6">
          <SearchBox />
          <Heart size={40} className="text-gray-600 p-2 rounded-lg hover:bg-orange-400 hover:text-white transition-colors" />
          <ShoppingBag
            size={40}
            className="text-gray-600 p-2 rounded-lg hover:bg-orange-400 hover:text-white transition-colors"
          />
         
        </div>
      </div>
    </header>
  );
};

export default Header;
