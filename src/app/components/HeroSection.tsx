"use client";
import { useState, useRef, useEffect } from "react";
import { bree } from "../../fonts";
import gsap
 from "gsap";
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });
  const [isDesktop, setIsDesktop] = useState(false);

  // Track screen size
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

    useEffect(() => {
    if (!containerRef.current) return;

      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          x: 100, 
        },
        {
          opacity: 1,
          x: 0, 
          y: 0, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play play none none",
          },
        }
      );
    }, []);


  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDesktop) setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex"
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('thrift4.jpeg')" }}
      />

      {/* Text box always fully visible */}
      <div className="absolute inset-y-0 sm:left-10 flex flex-col justify-center text-center items-center px-4 sm:px-6 py-3 sm:py-4 max-w-xl bg-white/5 backdrop-blur-xs
                rounded-xl shadow-lg max-h-fit self-center">
        <h1
          className={`${bree.className} text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold bg-clip-text text-sky-400 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] leading-[1.05]`}
        >
          Humane<br/>the thrift store
        </h1>
        <p className="mt-2 sm:mt-3 text-md sm:text-xl md:text-2xl text-sky-100 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
          <i>where every purchase makes a difference</i>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
