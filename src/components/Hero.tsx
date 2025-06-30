import React from "react";
import applestore from "@/assets/icons/applestore.png";
import playstore from "@/assets/icons/playstore.png";
import homehero from "@/assets/HomeHero.png";

const Hero = () => {
  return (
    <section className="relative bg-[#0A060F] py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 items-center relative">
          {/* Right Side Image Positioned Absolutely */}
          <div className="hidden md:block absolute right-0 top-0 w-[500px] h-[600px] z-10 rounded-xl overflow-hidden">
            <img
              src={homehero}
              alt="Main singer performance"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left Content Overlapping on Image */}
          <div className="z-20 relative space-y-6">
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

            <div className="pt-4">
              <p className="text-white font-semibold text-sm md:text-base mb-2">DOWNLOAD APP NOW</p>
              <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
