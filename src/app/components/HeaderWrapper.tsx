import { HeaderStatic } from "./HeaderStatic";
import { HeaderLinks } from "./HeaderLinks";
import { useEffect, useState } from "react";

export default function HeaderWrapper() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full flex items-center justify-between px-1 py-3 sm:px-2 md:px-4">
      <div className="w-full border px-2 sm:px-4 py-2 flex items-center justify-between">
        {/* Left section */}
        <div className="flex-1 flex justify-start">
          <HeaderStatic />
        </div>

        {/* Center section — hidden on small screens */}
        <div className="hidden md:flex flex-1 justify-center">
          <HeaderLinks scrolled={scrolled} />
        </div>

        {/* Right section — visible only on small screens */}
        <div className="flex md:hidden justify-end flex-1">
          <HeaderLinks scrolled={scrolled} />
        </div>

        {/* Optional placeholder for right content on desktop */}
        <div className="hidden md:flex flex-1 justify-end"></div>
      </div>
    </header>
  );
}
