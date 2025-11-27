"use client";
import { useEffect,useState } from "react";
import Image from "next/image";
import DonationCount from "./components/DonationCount";
import { Footer } from "./components/Footer";
import FeaturedItems from "./components/FeaturedItems";
import AnimatedIntro from "./components/AnimatedIntro";
import HeroSection from "./components/HeroSection";
import { useRef } from "react";
import gsap from "gsap";
import Header from "./components/HeaderNew";
import FullPageScroll from "./components/FullPageScroll";
import DonationNoteOrgs from "./components/DonationNoteOrgs";


export default function Home() {
 const [showPage, setShowPage] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showFooter, setShowFooter] = useState(false);


  useEffect(() => {
    if (showPage && contentRef.current) {
      const sections = Array.from(contentRef.current.children);

      // Initially hide all sections except header/hero
      sections.forEach((section, i) => {
        if (i > 1) {
          (section as HTMLElement).style.opacity = "0";
        }
      });

      // Animate visible sections
      gsap.from([sections[0], sections[1]], {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate sections on scroll
      sections.slice(2).forEach((section) => {
        gsap.fromTo(
          section,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, [showPage]);

  useEffect(() => {
     if (!showPage) return;
    const handleResize = () => setShowFooter(window.innerWidth >= 768);
    handleResize(); // set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showPage]);

  return (
    <>
      {!showPage && <AnimatedIntro onFinish={() => setShowPage(true)} />}
      {showPage && (
        <div  className="home-page flex flex-col">
          <Header />

          <FullPageScroll>
          <section className="panel h-screen"><HeroSection /></section>
          <section className="panel h-screen"><FeaturedItems /></section>
          <section className="panel h-screen"><DonationCount /></section>
          <section className="panel h-screen"><DonationNoteOrgs /></section>
          {<div className={showFooter ? "h-1" : "display-none"}></div>}
        </FullPageScroll>
        {showFooter && <Footer />}
        </div>

      )}
    </>
  );
}