"use client"
import {inter, playfair} from "../layout"
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
  const value = 15000;

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

      className="donation-box bg-sky-900 flex flex-col lg:flex-row items-center justify-center text-center py-40 px-4 sm:px-6 md:px-12 h-screen md:h-250 lg:h-250 gap-30"
    >
        <div>
          <div className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide flex flex-col">
            So far, we've donated...
          </div>
          <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
            {hasAnimated ? (
              <>
                $<CountUp end={value} duration={2.5} separator="," />
              </>
            ) : (
              "$0"
            )}
          </div>
          <div className={`${playfair.className} text-white text-m sm:text-xxxs md:text-s tracking-wide flex flex-col mt-3`}>
              With your help, we want to give back to the community :)
          </div>
        </div>
        <div className="relative mt-10 flex justify-center items-center hover:-translate-y-2">
        <img
          src="/donation.png"
          alt="thift 1"
          className="w-40 sm:w-56 h-80 rounded-lg shadow-lg transform rotate-[-6deg] z-10"
        />
        <img
          src="/donation.png"
          alt="thrift 2"
          className="w-40 sm:w-56 h-80 rounded-lg shadow-lg transform rotate-[6deg] -ml-20 z-0"
        />
      </div>
    </div>

    );

};


export default DonationCount