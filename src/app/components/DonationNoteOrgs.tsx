"use client"
import { bree, playfair, quicksand } from "../../fonts";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef,useEffect,useState } from "react";

//registed plugin
gsap.registerPlugin(ScrollTrigger);

const DonationNoteOrgs = () => {
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

    return (
        <div
        ref={containerRef} 
        className="w-screen min-h-screen max-h-screen bg-sky-900 flex flex-col items-center justify-center gap-[10vh] overflow-hidden">
                        <div className="donation-orgs flex flex-col items-center mx-22 gap-y-3 md:gap-y-4 lg:gap-y-6">
                <div className={`${bree.className} donation-orgs-heading text-white text-lg md:text-lg lg:text-3xl`}>
                    Organisations Helped
                </div>
                <div className={`${quicksand.className} donations-orgs-content text-white font-bold`}>
                    <ul className="list-disc space-y-2 text-m sm:text-m md:text-lg lg:text-xl">
                        <li>Calgary Drop-in Center</li>
                        <li>Good Neighbour</li>
                        <li>Sheldon Chumir Health Center Urgent Care</li>
                    </ul>
                </div>
            </div>
            
            <div className="donation-note-overlay max-w-9/10 bg-note-bg/60 backdrop-blur-lg rounded-2xl p-10 flex flex-col items-center sm:py-15 md:py-20 lg:py-10 sm:px-30">
               <div className={`${bree.className} donation-note-main text-gray-600 lg:text-2xl md:text-lg sm:w-50 lg:w-150`}>
                    <p>Thanks for helping good clothes go where they're needed!</p>
               </div>
               <div className={`${bree.className} donation-note-sign-off lg:text-2xl text-gray-600`}>
                <p className="text-center">- With heart,<br/>Humane<br/>The Thrift Store</p>
               </div>
               <div className="donation-note-img sm:mt-3 md:mt-3 lg:mt-5">
                    <img src='./circle-logo.png'
                    alt="humane-logo"
                        className="
                        w-24 h-24
                        sm:w-20 sm:h-20
                        md:w-24 md:h-24
                        lg:w-28 lg:h-28
                        object-contain
                        "
                    />
               </div>
            </div>
        </div>
    );
};


export default DonationNoteOrgs
