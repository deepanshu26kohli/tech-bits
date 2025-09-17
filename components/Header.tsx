"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div
        className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center
                   bg-white/10 backdrop-blur-xl border border-white/20
                   rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
      >
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-blue-400">Launch</span>UrPlatform
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={index}
                href={link.href}
                className={`transition font-medium ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 hover:text-blue-400"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-2 mx-6 bg-white/10 backdrop-blur-xl border border-white/20
                     rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] p-4 flex flex-col space-y-4"
        >
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition font-medium ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
