"use client";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { HeaderStatic } from "./HeaderStatic";
import { bree } from "../../fonts";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    // ... (your navLinks)
    { label: "Home", href: "." },
    { label: "About Us", href: "about" },
    { label: "Contact Us", href: "contact" },
  ];

  useEffect(() => {
    // ... (your handleScroll logic remains the same)
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Full Header (Now contains only the logo, desktop nav, and the menu *button*) */}
      <header
        className={`fixed top-0 left-0 w-full max-w-full overflow-x-hidden z-50 transition-all duration-300
          ${scrolled ? "md:opacity-0 md:pointer-events-none md:translate-y-[-100%]" : "bg-sky-100/50 backdrop-blur-md border-b border-sky-200 shadow-md"}
        `}
      >
        <div className="w-full max-w-screen px-4 py-3 md:py-4 md:px-8 mx-auto flex items-center">
          {/* Left: Logo or Static */}
          <div className="flex-1 flex justify-start">
            <HeaderStatic />
          </div>

          {/* Center: Desktop Nav */}
          <div
            className={`hidden md:flex flex-1 justify-center
              ${scrolled ? "md:opacity-0 md:pointer-events-none md:translate-y-[-100%]" : ""}`}
          >
            <nav className={`${bree.className} flex gap-6 text-sky-800 font-medium`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-sky-600 transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Mobile Hamburger/Menu Button Placeholder */}
          {/* We keep this block for layout, but the Menu logic is moved below */}
          <div className="flex-1 flex justify-end md:hidden h-7 w-7"> 
            {/* An empty div to reserve space for the button */}
          </div>

          {/* Optional Right Placeholder for Desktop */}
          <div className="hidden md:flex flex-1 justify-end"></div>
        </div>
      </header>
      
      {/* 2. Floating Mobile Menu (NEW POSITION) */}
      {/* This component is now fixed and positioned exactly where the button was, 
          and it gets a much higher z-index (z-[100]) to guarantee it sits on top. */}
      <div className="fixed top-0 right-0 z-[100] p-4 md:hidden">
        <Menu as="div" className="relative inline-block text-left">
          {/* Menu Button (Hamburger/X Icon) */}
          <Menu.Button 
            className="text-sky-800 hover:text-sky-600 transition"
            aria-label="Toggle menu"
          >
            {({ open }) => (
              open ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />
            )}
          </Menu.Button>
          
          {/* Menu Items Dropdown */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className={`
              absolute right-0 mt-3 w-48 origin-top-right 
              bg-white/95 backdrop-blur-sm divide-y divide-sky-100 rounded-lg shadow-2xl 
               focus:outline-none p-2
            `}>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Menu.Item key={link.href}>
                    {({ active }) => (
                      <a
                        href={link.href}
                        className={`${bree.className} block px-4 py-2 text-sm font-medium rounded-md
                          ${active ? 'bg-sky-100 text-sky-700' : 'text-sky-800'}
                        `}
                      >
                        {link.label}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {/* 3. Floating Pill Nav on Scroll (Desktop Only) */}
      <div
        className={`
          hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 
          bg-white/70 backdrop-blur-l shadow-xl rounded-full px-20 py-2
          transition-all duration-300 border border-white/30
          ${scrolled ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"}
        `}
      >
        <nav className={`${bree.className} flex justify-around gap-10 text-sky-800 font-medium`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-sky-600 transition">
                {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}