"use client"
import {inter, playfair, bree} from "../../fonts"
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { useRef,useState, useEffect } from "react";

const DonationCount  = () => {
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const value = 1000;

  useEffect(() => {
    if (inView && containerRef.current && !hasAnimated) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          onComplete: () => setHasAnimated(true),
        }
      );
    }
  }, [inView, hasAnimated]);




    return(

    <div
      ref={(node) => {
        ref(node); // for inView
        containerRef.current = node; // for gsap
      }}

      className="donation-box bg-sky-900 flex flex-col lg:flex-col items-center justify-center text-center py-40 px-4 sm:px-6 md:px-12 h-screen md:h-250 lg:h-250 gap-30"
    >
        <div>
          <div className={`${bree.className} text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide flex flex-col`}>
            So far, we've donated...
          </div>
          <div className="text-white text-5xl sm:text-5xl md:text-6xl font-bold mt-10">
            {hasAnimated ? (
              <>
               <CountUp end={value} duration={2.5} separator="," />
              </>
            ) : (
              "0"
            )}
          </div>
          <div className={`${bree.className} text-white text-lg sm:text-xxs md:text-m tracking-wide flex flex-col mt-2`}>
              Clothing Items
          </div>
        </div>
        <div className="relative flex -mt-10 justify-center items-center hover:-translate-y-2 bg-remove">
        <img
          src="/rack.png"
          alt="thift 1"
          className=""
        />
      </div>
    </div>

    );

};


export default DonationCount