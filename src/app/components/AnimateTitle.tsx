"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

interface Props {
  onFinish?: () => void;
}

const AnimatedTitle = ({ onFinish }: Props) => {
  const humaneRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onFinish?.(),
    });

    // Set initial positions
    gsap.set(humaneRef.current, {
      position: "absolute",
      opacity: 1,
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      fontSize: "clamp(1rem, 8vw, 6rem)",
      color: "white",
      fontWeight: "700",
      textAlign: "center",
    });

    gsap.set(subtitleRef.current, {
      position: "absolute",
      top: "60%", // just under Humane
      left: "100%", // start off screen right
      xPercent: 0,
      yPercent: -50,
      fontSize: "clamp(0.5rem, 4vw, 2rem)",
      color: "white",
      fontWeight: "500",
      textAlign: "center",
    });

    // Timeline
    tl.to(humaneRef.current, {
      duration: 2,
      scrambleText: {
        chars: "lowerCase",
        text: "Humane",
        revealDelay: 0.2,
        tweenLength: false,
      },
      ease: "power1.inOut",
    })
      // Subtitle enters from right
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          duration: 0.5,
          left: "50%",
          xPercent: -50,
          ease: "power2.out",
        },
        "-=0.5" // start a little before Humane finishes scrambling
      )
      // Pause subtitle for 1s
      .to(subtitleRef.current, { duration: 1 }, "+=0.5")
      // Move both off screen
      .to(
        humaneRef.current,
        {
          duration: 1,
          top: "-20%", // move up
          yPercent: -50,
          ease: "power2.in",
        },
        "+=0.2"
      )
      .to(
        subtitleRef.current,
        {
          duration: 1,
          left: "-100%", // move off left
          xPercent: 0,
          ease: "power2.in",
        },
        "<" // run at the same time as humane moves up
      );
  }, []);

  return (
    <>
      <h1 ref={humaneRef} className="opacity-0">Loading...</h1>
      <h3 ref={subtitleRef} className="opacity-0">The Thrift Store</h3>
    </>
  );
};

export default AnimatedTitle;
