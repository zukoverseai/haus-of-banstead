"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, Palette, Camera, Lightbulb, Calendar, Mail } from "lucide-react";

interface NavigationProps {
  currentSection: number;
  setCurrentSection: (section: number) => void;
}

export function Navigation({
  currentSection,
  setCurrentSection,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const navItems = [
    { name: "Experience", icon: Home, href: "#hero" },
    { name: "Services", icon: Palette, href: "#services" },
    { name: "Portfolio", icon: Camera, href: "#portfolio" },
    { name: "Studio", icon: Lightbulb, href: "#studio" },
    { name: "Book", icon: Calendar, href: "#booking" },
    { name: "Connect", icon: Mail, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Static light theme classes
  const navBgColor = "bg-white/80";
  const navBorderColor = "border-brand/30";
  const logoTextColor = "text-brand";
  const linkTextColor = "text-stone-700";
  const activeLinkBgColor = "bg-brand/20";
  const activeLinkTextColor = "text-brand";
  const hoverLinkTextColor = "hover:text-brand";
  const hoverLinkBgColor = "hover:bg-stone-200/50";
  const mobileMenuBgColor = "bg-white/95";
  const mobileLinkTextColor = "text-stone-800";
  const mobileHoverLinkTextColor = "hover:text-brand";
  const iconColor = "text-brand";

  return (
    <>
      {/* Floating Navigation */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${scrollY > 100 ? "scale-95 opacity-90" : "scale-100 opacity-100"
          }`}
      >
        <div
          className={`${navBgColor} ${navBorderColor} backdrop-blur-xl border rounded-full px-4 py-3 sm:px-6`}
        >
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div
              className={`text-xl font-thin tracking-wider ${logoTextColor}`}
            >
              HOB
            </div>

            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${currentSection === index
                    ? `${activeLinkBgColor} ${activeLinkTextColor}`
                    : `${linkTextColor} ${hoverLinkTextColor} ${hoverLinkBgColor}`
                    }`}
                  onClick={() => setCurrentSection(index)}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm tracking-wide">{item.name}</span>
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden transition-colors ${iconColor} hover:opacity-80`}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className={`absolute inset-0 ${mobileMenuBgColor} backdrop-blur-xl`}
            onClick={() => setIsOpen(false)}
          />
          <div className="relative flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 text-2xl ${mobileLinkTextColor} ${mobileHoverLinkTextColor} transition-colors`}
                onClick={() => {
                  setCurrentSection(index);
                  setIsOpen(false);
                }}
              >
                <item.icon className="h-6 w-6" />
                <span className="tracking-wide">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
