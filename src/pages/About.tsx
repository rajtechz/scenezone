import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Users,
  Music,
  Heart,
  Star,
  Lightbulb,
  Shield,
  Globe,
  Award,
} from "lucide-react";
import bg from "@/assets/bg-image (1).png";
import bg1 from "@/assets/bg-image (2).png";
import about from "@/assets/about.png";
import cover1 from "@/assets/Cover (1).png";
import cover2 from "@/assets/Cover (2).png";
import cover3 from "@/assets/Cover (3).png";
const About = () => {
  const steps = [
    {
      title: "Host Journey",
      color: "from-red-500 to-pink-500",
      border: "border-[#FF4081]",
      icon: "👑",
      items: [
        "Quick Registration",
        "Easy event creation",
        "Event Promotion",
        "Artist Discovery",
        "Real-time analytics",
        "Secure payment system",
      ],
    },
    {
      title: "Artist Journey",
      color: "from-purple-500 to-pink-500",
      border: "border-[#FF4081]",
      icon: "🎤",
      items: [
        "Profile setup",
        "Upload portfolio",
        "Discover events",
        "Smart matching",
        "Contract management",
        "Performance",
      ],
    },
    {
      title: "User Side",
      color: "from-pink-500 to-purple-500",
      border: "border-[#FF4081]",
      icon: "💖",
      items: [
        "Browse events by interests",
        "Get personalized events",
        "Smooth ticket purchase",
        "Enjoy amazing music experiences",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section
        className="py-24 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SceneZone
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Connecting Hosts, Artists, And Music Lovers In One Seamless
              Platform For Unforgettable Event Experiences. Our Innovative
              Approach Fosters Collaboration And Creativity, Ensuring Every
              Event Is A Unique Celebration Of Talent And Passion.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[cover1, cover2, cover3].map((img, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-purple-500/40 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "both",
                }}
              >
                <img
                  src={img}
                  alt={`Cover ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              To revolutionize the event industry by creating a comprehensive
              ecosystem that seamlessly connects passionate event hosts,
              talented artists, and enthusiastic audiences. We believe in the
              power of music to unite communities and create lasting memories
              through extraordinary live experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 ">
            {[
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "Empowering Hosts",
                text: "Transform your vision into reality. Create spectacular events, discover exceptional artists, and build unforgettable experiences that resonate with your audience long after the last note.",
              },
              {
                icon: <Music className="w-8 h-8 text-white" />,
                title: "Elevating Artists",
                text: "Showcase your unique talent on the perfect stage. Connect with hosts who value your artistry and perform at events that align with your creative vision and target audience.",
              },
              {
                icon: <Heart className="w-8 h-8 text-white" />,
                title: "Delighting Audiences",
                text: "Discover your next favorite artists or gems. Book tickets with confidence and immerse yourself in carefully curated musical experiences that speak to your soul.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-[2px] rounded-[20px] bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: "both",
                }}
              >
                <Card className="bg-black rounded-[18px] h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {card.text}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                SceneZone was born from a simple observation: the music industry
                needed a bridge. A bridge between talented artists seeking the
                right stage, passionate hosts with grand visions, and music
                lovers hungry for authentic experiences.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded by a team of music enthusiasts and tech innovators, we
                recognized that the traditional event booking process was
                fragmented, inefficient, and often left so parties unsatisfied.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, SceneZone stands as more than just a platform; it's a
                thriving community where creativity meets opportunity, where
                dreams take the stage, and where every event becomes a
                masterpiece of shared experience.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 h-96 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop"
                  alt="Musicians performing"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">
              Our Core Values
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These principles guide everything we do, from product development
              to community building.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Lightbulb className="w-6 h-6 text-white" />,
                title: "Innovation",
                text: "Constantly pushing boundaries to create better solutions for our community.",
              },
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: "Trust",
                text: "Building reliable relationships based on shared values for our ecosystem.",
              },
              {
                icon: <Globe className="w-6 h-6 text-white" />,
                title: "Community",
                text: "Fostering connection for the greater good to create lasting bonds.",
              },
              {
                icon: <Award className="w-6 h-6 text-white" />,
                title: "Excellence",
                text: "Striving for perfection in every effort, every interaction, every moment.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black rounded-xl p-6 border border-pink-500/30 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0A0215] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How SceneZone Works</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm">
              Our Platform Is Designed With Three Distinct User Journeys, Each
              Optimized For Maximum Success And Satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 ${step.border} border-[1.5px] bg-[#0A0215] hover:shadow-xl hover:scale-[1.02] transition duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-10 h-10 text-2xl rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <ul className="space-y-3 mt-4">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-[2px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
