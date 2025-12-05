"use client";
import { Footer } from "../components/Footer";
import Header from "../components/HeaderNew";
import { bree,quicksand } from "@/fonts";

export default function About() {
  return (
    <div className="flex flex-col align-center">
      <Header/>
      <div className={`about-us-block bg-sky-900 mt-60 mx-20 flex flex-col items-center rounded-xl w-xs sm:w-sm md:w-md lg:w-xl xl:w-4xl self-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-25 py-15 mb-20 overflow-hidden text-center`}>
        <h1 className={`about-us-title ${bree.className} text-4xl mb-10 p-5 text-white`}>About <u>Humane</u></h1>
        <p className={`about-us-content leading-loose text-center ${quicksand.className} text-white text-lg/loose`}>Humane The Thrift Store is built on a simple belief: fashion should be affordable, accessible, and kind to the planet.
        <br/><br/>We make secondhand shopping feel exciting and inclusive, whether you are looking for unique pieces, building a budget-friendly wardrobe, or giving your items a new life.
        <br/><br/>Our inventory is a mix of community donations and carefully sourced finds.
        <br/><br/>Every purchase supports sustainability, giving back, and our local community. When you shop with us, you help reduce textile waste and support a more ethical, circular approach to fashion.
        <br/><br/>We aim to be a welcoming space where everyone can find something they love and feel good about their choices.
        <br/><br/>Thank you for being part of our story.</p>
        <div className="donation-note-img sm:mt-3 md:mt-3 lg:mt-5">
            <img src='./circle-logo-white.png'
            alt="humane-logo"
                className="
                pt-8
                w-24 h-24
                sm:w-20 sm:h-20
                md:w-24 md:h-24
                lg:w-28 lg:h-28
                object-contain
                "
            />
        </div>
      </div>
      <Footer/>
    </div>
  ) ; 
};