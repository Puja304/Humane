"use client";
import { useState, useRef, useEffect } from "react";
import { bree, imperial_script, rouge_script } from "../../fonts";
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
      <div className="absolute inset-y-0 sm:left-10 flex flex-col justify-center text-centern px-6 md:px-8 lg:px-10 xl:px-16 py-3 sm:py-4 max-w-xl bg-white/8 backdrop-blur-sm
                rounded-xl shadow-lg max-h-fit self-center text-zinc-300">
        <img
         src="./name-with-wings-cropped.png" 
         alt="Humane Logo" 
         className="grayscale brightness-400 contrast-120 opacity-90
            w-48 h-auto
            sm:w-48
            md:w-72
            lg:w-96
            object-contain"
         />
        <h1 
        className={`${bree.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] leading-[1.05]`}>
          the thrift store
        </h1>
        <p className={`${rouge_script.className} md:mt-2 lg:mt-4 text-lg sm:text-2xl md:text-4xl font-extrabold`}>
          Ethical&nbsp;•&nbsp;Local&nbsp;•&nbsp;Circular&nbsp;
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
