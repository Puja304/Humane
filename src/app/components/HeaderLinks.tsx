"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const HeaderLinks = ({ scrolled }: { scrolled: boolean }) => {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "transition-all duration-500 ease-in-out flex gap-6 text-sm font-medium",
        scrolled
          ? "fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md px-6 py-2 rounded-full"
          : ""
      )}
    >
      {[
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            !scrolled &&
              "sm:px-0 md:px-2 text-xs sm:text-sm whitespace-nowrap",

            // --- When SCROLLED ---
            scrolled &&
              "px-3 py-1 rounded-full hover:-translate-y-1 hover:shadow-md",

            // Active link states
            pathname === href
              ? scrolled
                ? "bg-black text-white"
                : "text-black font-semibold after:w-full"
              : scrolled
              ? "text-gray-700"
              : "text-gray-800"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
