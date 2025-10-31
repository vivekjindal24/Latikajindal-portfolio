"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, GraduationCap, Award, FileText, Lightbulb, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Awards", href: "#awards", icon: Award },
  { label: "Publications", href: "#publications", icon: FileText },
  { label: "Patents", href: "#patents", icon: Lightbulb },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // No indicator positioning needed anymore

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Side Navigation - Desktop */}
      <nav className="hidden lg:block fixed left-0 top-0 h-screen w-20 bg-navy z-50 shadow-xl overflow-hidden">
        <div className="flex flex-col items-center h-full py-8">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("#home")}
            className="text-2xl font-bold text-gold mb-12 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            LJ
          </motion.button>

          {/* Navigation Items */}
          <div className="relative flex-1 flex flex-col justify-center gap-4 w-full px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              const key = item.href;
              return (
                <div
                  key={key}
                  className="relative group overflow-visible"
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative w-full p-3 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive
                        ? "bg-gold text-navy"
                        : "text-white hover:bg-white/10"
                    }`}
                    title={item.label}
                  >
                    <div className="flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                  </button>

                  {/* Tooltip */}
                  <span className="absolute left-full ml-4 px-3 py-2 bg-white text-navy text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg z-10">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Header with Hamburger */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
        <div className="flex items-center justify-between px-6 h-16">
          <motion.button
            onClick={() => scrollToSection("#home")}
            className="text-xl font-bold text-navy"
            whileTap={{ scale: 0.95 }}
          >
            Dr. Latika Jindal
          </motion.button>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-navy p-2"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="lg:hidden fixed left-0 top-0 h-screen w-64 bg-navy z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gold">Menu</h2>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                          activeSection === item.href.slice(1)
                            ? "bg-gold text-navy font-semibold"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-white/20">
                  <p className="text-white/60 text-sm text-center">
                    Dr. Latika Jindal
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

