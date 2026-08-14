"use client";

import { useState } from "react";
import Link from "next/link";
import { items } from "../components/search/data";
import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

// Define the shape of your search items
interface SearchItem {
  name: string;
  link: string;
  // Add any other properties that exist in your 'items' data
}

// Organized menu data for cleaner TSX
const menuItems = [
  {
    title: "the boys",
    links: [
      { name: "Billy Butcher", href: "/billy-butcher" },
      { name: "Frenchie", href: "/frenchie" },
      { name: "Hughie Campbell", href: "/hughie-campbell" },
      { name: "Kimiko Miyashiro", href: "/kimiko-miyashiro" },
      { name: "Mother's Milk", href: "/mothers-milk" },
      { name: "Ryan Butcher", href: "/ryan-butcher" },
      { name: "Starlight", href: "/starlight" },
    ],
  },
  {
    title: "heroes",
    links: [
      { name: "A-Train", href: "/a-train" },
      { name: "Black Noir I", href: "/black-noir-one" },
      { name: "Black Noir II", href: "/black-noir-two" },
      { name: "Firecracker", href: "/firecracker" },
      { name: "Homelander", href: "/homelander" },
      { name: "Oh Father", href: "/oh-father" },
      { name: "Queen Mauve", href: "/queen-mauve" },
      { name: "Soldier Boy", href: "/soldier-boy" },
      { name: "Stormfront", href: "/stormfront" },
      { name: "The Deep", href: "/the-deep" },
    ],
  },
  {
    title: "vought",
    links: [
      { name: "Ashley Barrett", href: "/ashley-barrett" },
      { name: "Marie Moreau", href: "/marie-moreau" },
      { name: "Stan Edgar", href: "/stan-edgar" },
      { name: "Dr. Thomas Godolkin", href: "/thomas-godolkin" },
      { name: "Victoria Neuman", href: "/victoria-neuman" },
    ],
  },
];

const Navbar = () => {
  // Added string type inference and SearchItem array typing
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<SearchItem[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Added string type to the query parameter
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredItems([]);
    } else {
      // TypeScript now knows 'item' is of type SearchItem
      const filtered = items.filter((item: SearchItem) => item.name.toLowerCase().includes(query.toLowerCase()));
      setFilteredItems(filtered);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white text-gray-800 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/">
              <Image src="/images/sister-sage-logo.webp" alt="Sister Sage logo" width={2800} height={900} /* Adjust this height to match your actual image's aspect ratio */ className="h-auto w-56 object-contain " />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
            <div className="flex space-x-6 xl:space-x-8">
              {menuItems.map((menu, index) => (
                <div key={index} className="group relative py-6">
                  <button className={`${inter.className} uppercase tracking-wide text-gray-700 transition hover:text-gray-900 focus:outline-none`}>{menu.title}</button>
                  {/* Dropdown Panel */}
                  <div className="invisible absolute left-0 top-full z-50 w-48 -translate-y-2 flex-col rounded-md bg-white py-2 opacity-0 shadow-xl transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {menu.links.map((link, linkIdx) => (
                      <Link key={linkIdx} href={link.href} className="block px-4 py-2 text-sm uppercase text-[#848285] hover:bg-gray-100 hover:text-gray-900">
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Search */}
            <div className="relative ml-8 w-full max-w-62.5 xl:max-w-75">
              <input type="text" placeholder="Search..." className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500" value={searchQuery} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)} />
              {filteredItems.length > 0 && (
                <ul className="absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto rounded-md bg-white py-1 shadow-lg border border-gray-200">
                  {filteredItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setSearchQuery("");
                          setFilteredItems([]);
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-50 border-t border-gray-200 shadow-inner" id="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {menuItems.map((menu, index) => (
              <div key={index} className="py-2">
                <p className="px-3 text-sm font-semibold uppercase tracking-wider text-gray-900">{menu.title}</p>
                <div className="mt-1 flex flex-col space-y-1">
                  {menu.links.map((link, linkIdx) => (
                    <Link key={linkIdx} href={link.href} className="block rounded-md px-3 py-2 pl-6 text-sm font-medium uppercase text-[#848285] hover:bg-gray-200 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Search */}
            <div className="relative mt-4 px-3 pb-4">
              <input type="text" placeholder="Search..." className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500" value={searchQuery} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)} />
              {filteredItems.length > 0 && (
                <ul className="absolute left-3 right-3 top-full z-50 mt-1 max-h-60 overflow-y-auto rounded-md bg-white py-1 shadow-lg border border-gray-200">
                  {filteredItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setSearchQuery("");
                          setFilteredItems([]);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
