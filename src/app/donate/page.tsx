"use client";
import { useEffect, useState,useRef } from "react";
import { Footer } from "../components/Footer";
import Header from "../components/HeaderNew";
import { bree,quicksand } from "@/fonts";
import DosDontsGrid from "../components/DosDontGrid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Donate() {

    const [showFooter, setShowFooter] = useState(false);
    const [gridState, setGridState] = useState("dos"); // begin with dos
    const pageRef = useRef<HTMLDivElement>(null);

 
    useEffect (() => {
        // show footer only if window big enough
        setShowFooter(window.innerWidth >= 768)
    }, []);

    useEffect(() => {
        if (!pageRef.current) return;

        const elements = pageRef.current.querySelectorAll(".animate-on-scroll");

        elements.forEach((el) => {
            gsap.from(el, {
            x: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,           // trigger each element individually
                start: "top 80%",      // when element is 80% from viewport top
                toggleActions: "play none none none", // play once
            },
            });
        });
    }, []);
    
    return (
        <div ref={pageRef} className="donation-page ">
        <Header/>
        <div className="donation-page-body mt-11">
            <div className={` ${quicksand.className} discount-note bg-highlight mt-13 text-white py-5 text-center text-md animate-on-scroll`}>
                <h1 className="text-xl animate-bounce"><b>10% off!</b></h1>
                <p className="text-sm">Bring in a bag of donations and enjoy 10% off on your next purchase!</p>
            </div>
            <div className="donations-details flex flex-col items-center py-10 w-screen">
                <div className="donation-titles flex flex-col items-center mb-10 animate-on-scroll">
                    <h1 className={` ${bree.className} donation-title text-2xl text-main-blue font-bold`}> Donate With Us</h1>
                    <h3 className={` ${quicksand.className} text-sm md:text-lg px-4`}>Let's stitch a better future together, one piece at a time!</h3>
                </div>
                <div className="donation-dos-donts bg-main-blue rounded-xl flex flex-col p-10 w-9/10 md:w-3/5 items-center animate-on-scroll">
                    <div className="donation-toggle relative inline-flex bg-black rounded-full p-1 mb-10 w-1/1 md:w-1/4">

                        <div
                            className={`absolute top-0 left-0 h-full w-1/2 bg-highlight rounded-full transition-transform duration-300 ${
                            gridState === "dos" ? "translate-x-0" : "translate-x-full"
                            }`}
                        ></div>
                        <button
                            className="relative w-1/2 text-center z-10 text-white font-semibold"
                            onClick={() => setGridState("dos")}
                        >
                        Do Accept
                        </button>
                        <button
                            className="relative w-1/2 text-center z-10 text-white font-semibold"
                            onClick={() => setGridState("donts")}
                        >
                            Don’t Accept
                        </button>
                    </div>
                    <div className="dos-dons-grid-render w-1/1 mt-10">
                        <DosDontsGrid 
                            mode={gridState}
                        />
                    </div>
                </div>
                
            </div>
        </div>
        <div className="other-opportunities flex flex-col items-center mb-10 animate-on-scroll">
            <h1 className={` ${bree.className} opportunities-note text-2xl text-main-blue font-bold`}> Other Opportunities</h1>
            <h3 className={` ${quicksand.className} text-sm md:text-lg w-3/5 mt-5`}>No items to donate for the store? No problem! Any items that we have too many of, have been in our store for too long, or are clean/wearable save for Minor cosmetic damage are passed on to Calgary Drop-in Centre, Good Neighbor and other small local organizations based on what their needs are at the time. We will surely be giving updates on the latest needs.</h3>
        </div>
        <div className="donation-note-confused flex flex-col items-center mb-10 animate-on-scroll">
            <h1 className={` ${bree.className} confused-title text-2xl text-main-blue font-bold`}> Confused?</h1>
            <h3 className={` ${quicksand.className} text-sm md:text-lg mt-5 px-12`}>Don't hesitate to contact us! We hate to turn anyone down and will do our best to accomodate your needs</h3>
        </div>
        {showFooter && <Footer/>}
        </div>
    );
};


