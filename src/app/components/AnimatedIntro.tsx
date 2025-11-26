"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { bree } from "../layout";

interface AnimatedIntroProps {
  onFinish?: () => void;
}

const AnimatedIntro = ({ onFinish }: AnimatedIntroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const split = new SplitType(titleRef.current!, { types: "chars" });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        setIsVisible(false);
        if (onFinish) onFinish();
      },
    });

    tl.set(containerRef.current, { visibility: "visible", opacity: 1 });

    // ✨ NEW: Elastic drop + slight rotation
    tl.from(
      split.chars,
      {
        y: -120, // higher drop
        opacity: 0,
        rotation: () => gsap.utils.random(-12, 12), // small random angle
        ease: "elastic.out(1, 0.5)", // bouncy but not too chaotic
        duration: 1.4,
        stagger: 0.1,
      },
      "-=0.3"
    );

    // Subtitle
    tl.from(
      subtitleRef.current,
      {
        y: -30,
        opacity: 0,
        duration: 0.7,
      },
      "-=0.4"
    );

    // Wings image (after subtitle)
    tl.from(
      imageRef.current,
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Pause before outro
    tl.to({}, { duration: 0.7 });

    // Outro: float upward + fade out
    tl.to(containerRef.current, {
      opacity: 0,
      y: -80,
      duration: 1,
      ease: "power2.inOut",
    });

    return () => split.revert();
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      style={{ visibility: "hidden", opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div className="text-center select-none flex flex-col items-center">
        <img
          ref={imageRef}
          src="/wings.png"
          alt="Wings"
          className="w-24 sm:w-32 mb-4"
        />

        <h1
          ref={titleRef}
          className={`${bree.className} text-5xl sm:text-7xl font-bold tracking-tight text-sky-900`}
        >
          Humane
        </h1>

        <h2
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-sky-600 mt-3 font-medium"
        >
          the thrift store
        </h2>
      </div>

    </div>
  );
};

export default AnimatedIntro;
