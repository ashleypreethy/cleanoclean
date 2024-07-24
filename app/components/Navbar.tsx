"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type NavLink = {
  href: string;
  key: string;
  label: string;
  sublinks?: { href: string; key: string; label: string }[];
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-slate-950 flex items-center justify-between px-5 py-1 relative z-30">
      <div className="flex items-center space-x-4">
        <Link href="/" aria-label="Homepage">
          <Image src="/CleanOLogo.png" alt="Logo" width={148} height={58} />
        </Link>
        <Link href="/" aria-label="Homepage">
          <Image src="/logo.png" alt="Logo" width={74} height={29} />
        </Link>
      </div>
      <ul className={`hidden h-full gap-12 md:flex ${menuOpen ? 'block' : 'hidden'}`}>
        {NAV_LINKS.map((link: NavLink) => (
          <li
            key={link.key}
            className="relative"
            onMouseEnter={() => handleMouseEnter(link.key)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={link.href}
              className="regular-16 text-white flex items-center cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-600"
            >
              {link.label}
              {link.sublinks && (
                <span className="ml-2">
                  {activeDropdown === link.key ? <FaMinus /> : <FaPlus />}
                </span>
              )}
            </Link>
            {link.sublinks && activeDropdown === link.key && (
              <div className="absolute left-0 top-full mt-4 w-48 bg-white shadow-lg z-10">
                {link.sublinks.map((sublink) => (
                  <Link
                    key={sublink.key}
                    href={sublink.href}
                    className="block px-4 py-2 text-navy-900 hover:text-green-600"
                  >
                    {sublink.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4">
        <div className="relative hidden xl:flex">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white rounded-full py-2 pl-4 focus:outline-none"
          />
          <button
            aria-label="Search"
            className="absolute right-3 top-2/4 transform -translate-y-2/4 hover:text-green-500"
          >
            <Image src="/search-icon.svg" alt="Search Icon" width={16} height={16} />
          </button>
        </div>
        <div className="cursor-pointer relative">
          <div className="relative">
            <Image
              src="/shopping-cart.svg"
              alt="Shopping Cart"
              width={32}
              height={32}
            />
            <span className="absolute bottom-4 left-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
              5
            </span>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <Button
            type="button"
            title="CONTACT US"
            icon="/arrow-right.svg"
            variant="btn_dark_green"
          />
        </div>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        <Image src="/menu.svg" alt="Menu" width={32} height={32} className="cursor-pointer" />
      </div>
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-slate-950 md:hidden">
          {NAV_LINKS.map((link: NavLink) => (
            <li key={link.key} className="relative">
              <div
                onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}
                className="flex items-center justify-between p-4 text-white cursor-pointer"
              >
                {link.label}
                {link.sublinks && (
                  <span>
                    {activeDropdown === link.key ? <FaMinus /> : <FaPlus />}
                  </span>
                )}
              </div>
              {link.sublinks && activeDropdown === link.key && (
                <div className="bg-white text-navy-900">
                  {link.sublinks.map((sublink) => (
                    <Link key={sublink.key} href={sublink.href} className="block px-4 py-2 hover:text-green-600">
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
