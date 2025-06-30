import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import cover1 from "@/assets/Cover1.png";
import cover2 from "@/assets/Cover2.png";
import cover3 from "@/assets/Cover3.png";
import working from "@/assets/working.png";
import mobilegroup from "@/assets/mobilegroup.png";
import applestore from "@/assets/icons/applestore.png";
import playstore from "@/assets/icons/playstore.png";
const Artist = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-900/30 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <p className="text-purple-400 text-sm font-medium mb-4 tracking-wider">
                  JOINED MUSIC LOVERS, LIVE STREAMING
                </p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  SHOWCASE YOUR TALENT,{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    GET BOOKED
                  </span>
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-lg">
                  Connect with fans and venues worldwide through our platform
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

            <div className="relative flex justify-center items-center animate-scale-in">
              <div className="w-80 h-80 relative">
                <img
                  src={p2}
                  alt="Musical Note Design"
                  className="w-full h-full object-contain animate-pulse"
                />
                <div
                  className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-spin"
                  style={{ animationDuration: "10s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artist Opportunities */}

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
            Featured Artist Opportunities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                cover: cover1,
                location: "Mumbai, India",
                date: "15 Jul, 2025",
                price: "12,000",
                type: "Pop",
                color: "bg-pink-600",
              },
              {
                cover: cover2,
                location: "Mumbai, India",
                date: "15 Jul, 2025",
                price: "12,000",
                type: "Comedy",
                color: "bg-purple-600",
              },
              {
                cover: cover3,
                location: "Mumbai, India",
                date: "15 Jul, 2025",
                price: "12,000",
                type: "Open Mic",
                color: "bg-indigo-600",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="bg-[#140C1C] border border-purple-800 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Cover Image */}
                <div className="relative h-48 w-full">
                  <img
                    src={event.cover}
                    alt="Event Cover"
                    className="w-full h-full object-cover"
                  />
                  {/* Optional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <CardContent className="p-4 space-y-3">
                  {/* Location and Genre */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white flex items-center gap-1">
                      <i className="fas fa-map-marker-alt" /> {event.location}
                    </span>
                    <span
                      className={`text-xs text-white px-3 py-1 rounded-full ${event.color}`}
                    >
                      {event.type}
                    </span>
                  </div>

                  {/* Date and Price */}
                  <div className="flex items-center justify-between text-gray-300 text-sm">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-calendar" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-rupee-sign" />
                      {event.price} <span className="text-xs">/event</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full mt-4 bg-purple-600 hover:bg-pink-600 text-white text-sm font-semibold rounded-full transition-colors duration-300`}
                  >
                    🎤 Apply for Gig
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join As An Artist Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
            Why Join As An Artist?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Opportunities that Match your Vibe
              </h3>
              <p className="text-gray-300 mb-6">
                Find gigs and opportunities that perfectly align with your
                musical style and preferences.
              </p>
           
            </div>

            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Perform More, Worry Less
              </h3>
              <p className="text-gray-300 mb-6">
                Focus on your music while we handle the bookings, payments, and
                logistics for you.
              </p>
            
            </div>

            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Built for Performers Like You
              </h3>
              <p className="text-gray-300 mb-6">
                Our platform is designed by artists, for artists, with features
                that understand your needs.
              </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Bring Your Crowd Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <p className="text-purple-200 text-sm font-medium mb-4 tracking-wider">
                  🎯 ARTISTS, TOOLS & FEATURES
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Bring Your Crowd - Add Them To Your Lists
                </h2>
                <p className="text-gray-200 text-lg mb-8">
                  Connect guest artists and grow your loyal audience.
                </p>
                <Button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                  Start Managing Guests →
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center items-center animate-scale-in">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse z-0" />
                <img
                  src={working}
                  alt=""
                  className="w-full h-full object-cover object-center z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Next Stage Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
            Your Next Stage Is Just A Tap Away
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Explore Events Looking For Artists
                    </h3>
                    <p className="text-gray-300">
                      Discover venues and events actively seeking talented
                      performers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Instant Access To Real-Time Opportunities
                    </h3>
                    <p className="text-gray-300">
                      Get notified immediately when new gigs match your profile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📅</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Get Booked By Venues & Hosts Instantly
                    </h3>
                    <p className="text-gray-300">
                      Connect directly with venue owners and event hosts.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                Sign up as a host →
              </Button>
            </div>

            <div className="relative flex justify-center items-center animate-scale-in">
              <div className="w-80 h-80 rounded-2xl flex items-center justify-center overflow-hidden  bg-transparent">
                <img
                  src={mobilegroup}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need To Succeed Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16 animate-fade-in">
      <p className="text-yellow-400 text-sm font-semibold mb-2 tracking-wide">
        🧰 Artists, Tools & Features
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Everything You Need To Succeed
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: "👤",
          title: "Your Artist Profile, Simplified",
          desc: "Showcase your work, set your rates, and update availability easily.",
        },
        {
          icon: "👥",
          title: "Guest List Management for Your Fans",
          desc: "Bring Your supporters – track and manage guest entries.",
        },
        {
          icon: "💳",
          title: "Easy Booking, Direct Payments, Zero Hassle",
          desc: "No middlemen. Transparent deals and fast payouts.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="text-center border border-[#5B21B6] rounded-xl p-8 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-purple-700/20"
        >
          <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl mx-auto mb-6">
            {item.icon}
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Join as an Artist Today Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <p className="text-purple-400 text-sm font-medium mb-4 tracking-wider">
              🎯 ARTIST TOOLS & FEATURES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Join as an Artists Today
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Don't just wait for gigs - go get them
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                Claim Your Stage →
              </Button>
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Learn More →
              </Button>
            </div>

            <p className="text-gray-500 text-sm">
              It's Free. The Spotlight Belongs Right Here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artist;
