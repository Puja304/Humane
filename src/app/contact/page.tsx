"use client";
import Header from "../components/HeaderNew";
import { Footer } from "../components/Footer";
import { bree,quicksand } from "@/fonts";

export default function Contact() {
  return (
    <div className="flex flex-col align-center bg-sky-900">
      <Header/>
      <div className={`contact-us-block bg-sky-900 pt-20 min-h-screen flex flex-col items-center rounded-xl w-screen self-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-25 py-15 mb-20 overflow-hidden text-center`}>
        <p className={`contact-greeting text-white ${bree.className} text-2xl`}>We'd love to hear from you!</p>
        <p className={`contact-greeting text-white ${quicksand.className} text-xl mt-10`}>Whether you have questions, want to donate, or are looking for something specific, our team is here to help.</p>
        <div className="ccontact-grid grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-4 mt-25 h-full">
          <div className="location bg-white/20 rounded-xl p-4 py-16 lg:p-16">
            <h1 className={`location-title ${bree.className} text-xl`}>📍Location</h1>
             <p className="mt-5">
                <a href="https://maps.google.com/?q=1431+Kensington+Rd+NW,+Calgary,+AB+T2N+3R1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-200">
                  1431 Kensington Rd NW, Calgary, AB T2N 3R1
                </a>
              </p>
          </div>
          <div className="bg-white/20 rounded-xl p-4 py-16 lg:p-16">
            <h1 className={`store-hours-title ${bree.className} text-xl `}>🕒 Store Hours</h1>
            <p className="mt-5">10 AM - 8 PM, OPEN DAILY</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4 py-16 lg:p-16">
            <h1 className={`email-title ${bree.className} text-xl`}>📧 Email</h1>
            <p className="mt-5 text-md">
              <a href="mailto:humanethethriftstore@gmail.com"
                className="hover:text-gray-200">
                humanethethriftstore@gmail.com
              </a>
            </p>
          </div>
          <div className="bg-white/20 rounded-xl p-4 py-16 lg:p-16">
            <h1 className={`socials-title ${bree.className} text-xl`}>📱 Socials</h1>

            <div className="mt-5 space-y-4 flex flex-col items-center">

              <a
                href="https://instagram.com/humanethrift.yyc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-200"
              >
                <img
                  src="./insta.png"
                  alt="instagram-logo"
                  className="w-6 h-6"
                />
                <span className="ml-3">humanethrift.yyc</span>
              </a>
              <a
                href="https://tiktok.com/@humanethrift.yyc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-200"
              >
                <img
                  src="./tiktok.png"
                  alt="tiktok-logo"
                  className="w-6 h-6"
                />
                <span className="ml-3">humanethrift.yyc</span>
              </a>

            </div>
        </div>
        </div>
      </div>
    </div>
  ) ; 
};