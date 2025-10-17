"use client";
import { useEffect,useState } from "react";
import AnimatedTitle from "./components/AnimateTitle";
import HeaderWrapper from "./components/HeaderWrapper";
import Image from "next/image";


export default function Home() {
  const [showPage, setShowPage] = useState(false);
  

  return (
    <>
      {!showPage && <AnimatedTitle onFinish={() => setShowPage(true)} />}
      {showPage && (
        <div className="home-page flex flex-col">
          <HeaderWrapper />
          <div className="px-1 sm:px-2 md:px-4">
            <div className="hero-element relative w-full h-[500px] sm:h-[400px] md:h-[700px] lg:h-[900px] overflow-hidden">
              <Image
                src="/thrift.jpg"
                alt="Thrift Store"
                fill
                className="object-cover brightness-90"
                priority
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight drop-shadow-lg">
                  Humane
                </h1>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mt-2 drop-shadow-md">
                  The Thrift Store
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}