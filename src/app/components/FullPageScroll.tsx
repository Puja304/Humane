"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FullPageScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(container.children) as HTMLElement[];

    // Make sure container is properly styled
    container.style.position = "relative";
    container.style.overflow = "hidden";

    // Set each panel to full viewport height
    // Set heights per breakpoint
    sections.forEach((section) => {
      if (window.innerWidth >= 768) {
        section.style.height = "100vh"; // desktop: full screen
      } else {
        section.style.height = "auto"; // mobile: natural height
      }
    });

    // Also, container overflow:
    if (window.innerWidth >= 768) {
      container.style.overflow = "hidden"; // desktop: pin + snap
    } else {
      container.style.overflow = "visible"; // mobile: normal scrolling
    }

    // Use the new gsap.matchMedia API
    const mm = gsap.matchMedia();

    mm.add(
      {
        // Define breakpoints
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions as any;

        if (isDesktop) {
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
        }

        if (isMobile) {
          sections.forEach((s) => (s.style.height = "auto"));
          container.style.overflow = "visible";
          // On mobile you might want normal scroll (no snapping)
          gsap.to(sections, {
            y: 0,
            scrollTrigger: {
              trigger: container,
              start: "top top",
            },
          });
        }
      }
    );

    // Cleanup on unmount
    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
