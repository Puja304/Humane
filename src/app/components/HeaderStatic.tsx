"use client";
import Image from 'next/image';

export const HeaderStatic = () => {
  return (
    <div className='flex items-center gap-2 w-full'>
      <Image src="./wings.png" width={40} height={40} alt="Humane Logo"/>
      {/* <span className="text-xs sm:text-sm font-bold tracking-tight">Humane</span> */}
    </div>
  );
};