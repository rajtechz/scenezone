import React from "react";
import home1 from "@/assets/home1.png";
import home3 from "@/assets/home3.png";
import applestore from "@/assets/icons/applestore.png";
import playstore from "@/assets/icons/playstore.png";

const Hero = () => {
  return (
    <section className="relative bg-[#0A060F] flex items-center overflow-hidden py-16">
      {/* Dot indicator on right */}

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <p className="text-white text-sm tracking-widest uppercase">
            DISRUPTING LIVE ENTERTAINMENT
          </p>
          <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight">
            GET GIGS,
            <br />
            BOOK ARTISTS,
            <br />
            ENTER TICKET GUESTLISTS
          </h1>

          <div className="text-gray-300 text-base md:text-lg space-y-2 max-w-lg">
            <p>
              Imagine being able to book the best live band or DJ for your next
              party or event.
            </p>
            <p>
              Imagine being able to find the best live music happening near
              you–anytime, anywhere.
            </p>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <img
              src={applestore}
              alt="App Store"
              className="h-12 w-auto object-contain cursor-pointer"
            />
            <img
              src={playstore}
              alt="Google Play"
              className="h-12 w-auto object-contain cursor-pointer"
            />
          </div>
        </div>

        {/* Right Side Images */}
        <div className="relative flex justify-center items-center mt-16 md:mt-0">
          {/* Background image (drums) */}
          <img
            src={home1}
            alt="Background drum lights"
            className="absolute top-0 right-0 w-full max-w-md opacity-60 z-0"
          />

          {/* Foreground image (singer) */}
          <div className="relative z-10 rounded-xl overflow-hidden w-[90%] max-w-md border border-[#B20D5D]">
            <img
              src={home3}
              alt="Main singer performance"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
