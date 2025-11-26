"use client"
import { quicksand, merriweather } from "../layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { useRef,useEffect,useState } from "react";


function useBreakpoint() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1024) setColumns(3); // lg
      else if (width >= 768) setColumns(2); // md
      else setColumns(1); // sm
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return columns;
}

gsap.registerPlugin(ScrollTrigger);

const FeaturedItems = () => {
  const columns = useBreakpoint();
  const containerRef = useRef(null);
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



    const placeholders = [1, 2, 3];

    return (
    <div 
    ref={containerRef} 
    className="featured-box w-screen flex justify-center items-center bg-white h-screen">
    <div className="w-full bg-whitep-8 sm:p-10 flex flex-col items-center">

    {/* Title */}
    <h1 className={`${quicksand.className} text-4xl sm:text-5xl font-bold text-sky-900 mb-3 tracking-tight`}>
        Shop Now!
    </h1>

    {/* Subtitle */}
    <h3 className={`${merriweather.className} text-lg sm:text-xl text-sky-700 mb-8 italic`}>
        Our Featured Items
    </h3>

    {/* --- RESPONSIVE GRID FOR CARDS --- */}
    <div className="w-full mt-8 px-4 sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {placeholders.slice(0, columns).map((i) => (
          <div
            key={i}
            className="w-72 h-88 rounded-xl border border-sky-300 bg-gradient-to-br from-sky-50 to-sky-100 shadow-md flex items-center justify-center transition hover:shadow-xl hover:-translate-y-1"
          >
            <p className="text-lg text-sky-700 opacity-75 font-medium">
              Coming Soon
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
</div>
);
};

export default FeaturedItems