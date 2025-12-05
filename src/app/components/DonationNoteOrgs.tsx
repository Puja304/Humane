"use client"
import { bree, playfair } from "../../fonts";
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
        className="w-screen h-screen bg-sky-900 flex flex-col items-center">
            <div className="donation-note-overlay min-w-fit sm:mx-20 lg:mx-120 bg-note-bg/60 backdrop-blur-lg rounded-2xl p-10 flex flex-col items-center mx-10 sm:mt-10 md:mt-15 lg:mt-20 sm:py-15 md:py-20 lg:py-10">
               <div className={`${bree.className} donation-note-main text-gray-600 lg:text-2xl md:text-lg sm:w-50 lg:w-150`}>
                    <p>Thank you for helping keep our community warm and making sure clothing stays out of the landfill! </p>
               </div>
               <div className={`${bree.className} donation-note-sign-off lg:text-2xl mt-10 text-gray-600`}>
                <p className="text-center">- With heart,<br/>Humane<br/>The Thirft Store</p>
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
            <div className="donation-orgs flex flex-col items-center mt-10 sm:mt-6 md:mt-15 lg:mt-20 mx-22">
                <div className={`${bree.className} donation-orgs-heading underline text-white text-lg md:text-lg lg:text-3xl mb-2 lg:mb-5`}>
                    Organisations Helped
                </div>
                <div className={`${playfair.className} font-light donations-orgs-content text-white `}>
                    <ul className="list-disc space-y-2 text-m sm:text-m md:text-lg lg:text-xl">
                        <li>Calgary Drop-in Center</li>
                        <li>Good Neighbour</li>
                        <li>Sheldon Chumir Health Center Urgent Care</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default DonationNoteOrgs
