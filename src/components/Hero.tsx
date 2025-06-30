import React from 'react';
import home1 from '@/assets/home1.png'; // Main foreground image (singer)
import home3 from '@/assets/home3.png'; // Background image (drum set)

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0A060F] flex items-center overflow-hidden">
      {/* Dot indicator on right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <div className="w-3 h-3 rounded-full border border-white" />
      </div>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <p className="text-white text-sm tracking-widest uppercase">
            DISRUPTING LIVE ENTERTAINMENT
          </p>
          <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight">
            GET GIGS,<br />
            BOOK ARTISTS,<br />
            ENTER TICKET GUESTLISTS
          </h1>

          <div className="text-gray-300 text-base md:text-lg space-y-2 max-w-md">
            <p>Imagine being able to book the best live band or DJ for your next party or event.</p>
            <p>Imagine being able to find the best live music happening near you–anytime, anywhere.</p>
          </div>

          <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium shadow-md hover:opacity-90 transition-all duration-300">
            Coming Soon →
          </button>
        </div>

        {/* Right Side Images */}
        <div className="relative flex justify-center items-center mt-12 md:mt-0">
          {/* Background image (drums) */}
          <img
            src={home1}
            alt="Background drum lights"
            className="absolute top-10 right-0 w-[100%] max-w-md rounded-xl opacity-60 z-0"
          />

          {/* Foreground image (singer) */}
          <div className="relative z-10 rounded-xl overflow-hidden w-[90%] max-w-md">
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
