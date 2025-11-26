"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FullPageScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Every direct child becomes a "panel"
    const sections = Array.from(container.children) as HTMLElement[];

    // Make sure container is properly styled
    container.style.position = "relative";
    container.style.overflow = "hidden";

    // Set each panel to full viewport height
    sections.forEach((section) => {
      section.style.height = "100vh";
    });

    ScrollTrigger.matchMedia({
      "(min-width: 1px)": function () {
        gsap.to(sections, {
          yPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            pinSpacing: false,
            trigger: container,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => `+=${container.offsetHeight}`,
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="fullpage-container m-0 p-0">
      {children}
    </div>
  );
}
