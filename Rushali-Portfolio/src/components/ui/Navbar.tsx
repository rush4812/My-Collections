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
      setScrolled(window.scrollY > 10);
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
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform max-w-7xl mx-auto w-full justify-between">
        <div className="flex items-center gap-2">
          {/* Montor-style script/elegant logo approach */}
          <div className="text-3xl font-black tracking-tight flex gap-1">
            <span className="text-[#009ca6] italic pr-1">Rushali</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[15px] font-semibold text-[#0B253D] hover:text-[#009ca6] transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#009ca6] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden lg:block px-8 py-3 bg-[#0B253D] text-white rounded-md font-bold text-sm hover:bg-[#009ca6] hover:text-white transition-colors duration-300">
          CONTACT ME
        </a>

        <button 
          className="lg:hidden p-2 text-[#0B253D]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 flex flex-col gap-6 shadow-xl lg:hidden origin-top"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#0B253D] hover:text-[#009ca6] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full mt-2 py-3 bg-[#0B253D] text-white rounded-md font-bold text-center text-sm">
                CONTACT ME
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
