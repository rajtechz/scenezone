import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import mic from "@/assets/mic.png";
import hostbanner from "@/assets/hostbanner.png";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import img5 from "@/assets/img5.png";
import gallery from "@/assets/gallery.png"
import gallery1 from "@/assets/gallery1.png"
import gallery2 from "@/assets/gallery2.png"
import gallery3 from "@/assets/gallery3.png"

const Host = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-sm text-gray-400 tracking-widest uppercase">
                DISRUPTING LIVE ENTERTAINMENT
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                YOUR STAGE AWAITS – START <br />
                <span className="text-white">HOSTING TODAY</span>
              </h1>
              <p className="text-gray-300 text-base max-w-md">
                Bring your vision to life – start hosting events in minutes.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full text-md font-semibold transition-all duration-300">
                Coming Soon →
              </Button>
            </div>

            {/* Right Image */}
            {/* <div className="flex justify-center items-center animate-scale-in relative">
              <img
                src={mic}
                alt="Mic"
                className="w-[300px] h-auto z-20 relative"
              />
            
            </div> */}

             <div className="relative flex justify-center items-center animate-scale-in">
              <div className="w-83 h-83 relative">
                <img
                  src={mic}
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

        {/* Bottom Crowd Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <img
            src={hostbanner}
            alt="Audience Silhouette"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Why Host With Us Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in">
            Why Host With Us?
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-4xl mx-auto animate-fade-in">
            Create and share your existing live content with the world. Add them
            to existing events, or build your own dream lineup. All with
            advanced filters and smart recommendation systems.
          </p>

          <div className="space-y-6 mb-12 animate-fade-in">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🛠️</span>
              </div>
              <p className="text-white text-lg">
                Access Powerful Tools And A Passionate Community.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">⚡</span>
              </div>
              <p className="text-white text-lg">
                Flexible Options, Quick Setup, And Full Control Over Your
                Events.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💰</span>
              </div>
              <p className="text-white text-lg">
                Earn Revenue, Grow Your Brand, And Connect With Your Audience.
              </p>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
            Sign up as a host →
          </Button>
        </div>
      </section>

      {/* Artist Profiles Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Johney Deo", img: img1 },
              { name: "Liam Carter", img: img2 },
              { name: "Emma Thompson", img: img3 },
              { name: "Noah Johnson", img: img4 },
              { name: "Olivia Brown", img: img5 },
            ].map((artist, index) => (
              <div
                key={index}
                className="w-[160px] text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-[160px] h-[160px] rounded-full overflow-hidden mx-auto shadow-lg">
                  <img
                    src={artist.img}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold py-1">
                    Crowd Guarantee
                  </div>
                </div>
                <h3 className="mt-4 text-white font-bold text-lg">
                  {artist.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
            How It Works?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Search Event
              </h3>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt
              </p>
            </div>

            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Create Events
              </h3>
              <p className="text-gray-200">
                Set up your event quickly and easily with our powerful event
                creation tools and features
              </p>
            </div>

            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Book and Connect
              </h3>
              <p className="text-gray-200">
                Connect directly with artists, book performances, and manage all
                your event logistics
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Features For Hosts Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
            Features For Hosts
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Tools Tailored for Event Creators",
                description:
                  "Comprehensive event management tools designed specifically for event creators and hosts.",
              },
              {
                icon: "📊",
                title: "All-In-One Dashboard",
                description:
                  "Control every aspect of your event from one central, intuitive dashboard interface.",
              },
              {
                icon: "📈",
                title: "Advanced Reporting & Analytics in One Place",
                description:
                  "Get detailed insights and analytics to optimize your events and maximize success.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group transition-transform duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Border Wrapper */}
                <div className="p-[2px] h-full rounded-xl bg-gradient-to-b from-[#CC5500] via-[#663300] to-[#331A00]">
                  {/* Inner Content Box */}
                  <div className="bg-[#0A060F] rounded-xl p-8 h-[340px] flex flex-col justify-between text-left">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white mb-6 text-2xl">
                        {feature.icon}
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                        {feature.description}
                      </p>
                    </div>

                    <button className="mt-6 text-sm text-white font-medium inline-flex items-center gap-2 group-hover:text-pink-400 transition-colors">
                      Read More <span className="ml-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
   <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
      Upcoming Events
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          date: "14 DEC 2024",
          title: "Neon Jazz Night",
          venue: "Blue Moon",
          image: gallery,
        },
        {
          date: "18 DEC 2024",
          title: "Electric Rock Fest",
          venue: "Thunder Hall",
          image: gallery1,
        },
        {
          date: "22 DEC 2024",
          title: "Underground Hip Hop",
          venue: "Urban Beat",
          image: gallery2,
        },
        {
          date: "28 DEC 2024",
          title: "Synth Pop Showcase",
          venue: "Retro Club",
          image: gallery3,
        },
      ].map((event, index) => (
        <Card
          key={event.title}
          className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer overflow-hidden"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded-full">
              <span className="text-white text-sm font-semibold">
                {event.date}
              </span>
            </div>
          </div>
          <CardContent className="p-6 bg-black/90">
            <h3 className="text-xl font-bold text-white mb-2">
              {event.title}
            </h3>
            <p className="text-purple-400">{event.venue}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Host;
