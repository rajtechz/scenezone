import React from 'react';
import { Briefcase, Mic, CalendarHeart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      // icon: <Briefcase size={24} />,  
      icon: "🎤",
      title: "For Event Hosts",
      description:
        "Having trouble finding the right performers for your events and getting crowd? Get the most affordable and the top A-listed Artists.",
    },
    {
      // icon: <Mic size={24} />,
            icon: "🎵",
      title: "For Performers",
      description:
        "If you aren’t booked for as many events as they would like, we get you 10 guaranteed gigs a month.",
    },
    {
      // icon: <CalendarHeart size={24} />,
          icon: "🎉",
      title: "For Visitors",
      description:
        "Don't have an easy way to find events happening near you? Here you can get into discounted guestlists on a daily basis and book tickets for flagship live entertainment performances.",
    },
  ];

  return (
    <section className="py-20 bg-[#0A060F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why You Should Join<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SceneZone  ?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group transition-transform duration-300 transform hover:scale-105"
            >
              {/* Gradient Border Wrapper */}
              <div className="p-[2px] h-full rounded-xl bg-gradient-to-b from-[#CC5500] via-[#663300] to-[#331A00]">
                {/* Inner Content Box */}
                <div className="bg-[#0A060F] rounded-xl p-8 h-[340px] flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white mb-6">
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
  );
};

export default Features;
