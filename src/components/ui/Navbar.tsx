"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300",
        scrolled ? "glass border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform">
        <div className="text-xl md:text-2xl font-bold tracking-tight flex gap-1.5">
          <span className="text-white">
            Rushali
          </span>
          <span className="text-zinc-400">
            Jivrajani
          </span>
        </div>
        <div className="h-[2px] w-full mt-0.5 bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800 rounded-full opacity-50" />
      </div>
      
      <nav className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-500 transition-all group-hover:w-full" />
          </a>
        ))}
      </nav>

      <a href="/resume.pdf" target="_blank" className="hidden md:block px-6 py-2 bg-white text-black rounded-full font-medium hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        Resume
      </a>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2 text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a href="/resume.pdf" target="_blank" className="w-full mt-2 py-3 bg-white text-black rounded-xl font-bold text-center">
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
