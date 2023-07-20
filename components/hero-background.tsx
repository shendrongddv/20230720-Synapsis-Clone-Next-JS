import Image from "next/image";
import React from "react";

const HeroBackground = () => {
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden z-[-1]">
        <Image
          src="/bg-hero-3.png"
          alt="Image"
          width={1370}
          height={900}
          className="h-full w-full"
        />
      </div>
    </>
  );
};

export default HeroBackground;
