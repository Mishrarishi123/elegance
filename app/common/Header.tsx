import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import {Button} from "../components/ui/Button"

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

        {/* Search Icon */}
        <Button variant="ghost" size="icon" className="hidden lg:flex">
          <Search size={20} className="text-gray-600"/>
        </Button>
      </div>
    </header>
  );
};

export default Header;
