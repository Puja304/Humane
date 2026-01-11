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
      className="relative w-full h-screen overflow-hidden flex justify-center md:justify-start"
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}

      <div 
      className="absolute inset-0 bg-cover bg-center" 
      style={{ backgroundImage: "url('thrift-mobile-2.jpeg')" }} 
      />

      {/* bigger screens */}
      <div 
      className="absolute inset-0 bg-cover bg-center hidden md:block" 
      style={{ backgroundImage: "url('thrift4.jpeg')" }} 
      />

      {/* Text box always fully visible */}
      <div className="relative inset-y-0 sm:left-10 flex flex-col justify-center items-center text-center px-6 md:px-8 lg:px-10 xl:px-16 py-3 sm:py-4 self-center text-zinc-300">
      {/* SHAPE LAYER (defines the blob)
      <div
        className="
          absolute
          left-1/2 top-1/2
          w-[36rem] h-[28rem]
          -translate-x-1/2 -translate-y-1/2
          bg-blue-200/55
          opacity-80
          pointer-events-none
          animate-blob
        "
      />

      {/* GLOW LAYER (softens it) */}
      {/* <div
        className="
          absolute
          left-1/2 top-1/2
          w-[30rem] h-[24rem]
          -translate-x-1/2 -translate-y-1/2
          bg-blue-100/30
          blur-3xl
          opacity-90
          pointer-events-none
          animate-blob
        "
      /> */} 

        <div
      className="
        absolute
        left-1/2 top-1/2
        w-[20rem] h-[14rem]
        -translate-x-1/2 -translate-y-1/2
        bg-black/20
        blur-xl
        opacity-75
        pointer-events-none
        border-red-400
      "
    />
    


      {/* CONTENT */}
      <img
        src="./name-with-wings-cropped.png"
        alt="Humane Logo"
        className="
          relative
          grayscale brightness-400 contrast-120 opacity-90
          w-48 sm:w-48 md:w-72 lg:w-96
          object-contain
        "
      />

      <h1
        className={`${bree.className} relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] leading-[1.05]`}
      >
        the thrift store
      </h1>

      <p
        className={`${rouge_script.className} relative md:mt-2 lg:mt-4 text-lg sm:text-2xl md:text-4xl text-white font-extrabold drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]`}
      >
        Ethical&nbsp;•&nbsp;Local&nbsp;•&nbsp;Circular&nbsp;
      </p>
    </div>

    </section>
  );
};

export default HeroSection;
