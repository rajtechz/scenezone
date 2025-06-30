import React from "react";
import {
  Users,
  Search,
  MessageCircle,
  Music,
  Calendar,
  Star,
  ArrowRight,
  Play,
  MapPin,
  Clock,
  Quote,
  Shield,
  CreditCard,
  Smartphone,
} from "lucide-react";

import p3 from "@/assets/p3.png";
import cover1 from "@/assets/Cover (1).png"
import cover2 from "@/assets/Cover (2).png"
import cover3 from "@/assets/Cover (3).png"
const User = () => {
  const services = [
    {
      icon: Users,
      title: "Make Your Event Unforgettable",
      description:
        "Book top artists and entertainers for your special occasions",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Search,
      title: "Explore Verified Artists by Genre & Mood",
      description:
        "Find the perfect artist that matches your event's vibe and style",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: MessageCircle,
      title: "Chat & Book Directly",
      description:
        "Connect with artists directly and negotiate terms seamlessly",
      color: "from-green-500 to-teal-500",
    },
  ];
 const events = [
    {
      id: 1,
      title: "Indie Rock Explosion",
      artist: "Echo Waves",
      date: "05 Jul 2025",
      time: "19:00",
      location: "Mumbai, India",
      price: "$45.00",
      image: cover1,
      category: "Concert",
    },
    {
      id: 2,
      title: "Electronic Rave Night",
      artist: "Pulse Horizon",
      date: "12 Jul 2025",
      time: "20:30",
      location: "Delhi, India",
      price: "$65.00",
      image: cover2,
      category: "Festival",
    },
    {
      id: 3,
      title: "Acoustic Evening",
      artist: "Serene Strings",
      date: "18 Jul 2025",
      time: "18:30",
      location: "Bangalore, India",
      price: "$35.00",
      image: cover3,
      category: "Live Show",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Secure Ticketing",
      description:
        "Your data is safe with our industry-leading security protocols",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: CreditCard,
      title: "One-Tap Checkout",
      description: "Lightning-fast payments with no hidden fees or hassles",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "QR Codes. No Printouts. No Hassle.",
      description: "Digital tickets delivered instantly to your mobile device",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "I recently booked a Concert through SceneCore and it was absolutely incredible! The whole process was seamless, from booking to entry. The show exceeded my expectations!",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Sarah M.",
      rating: 5,
      text: "I recently booked a Concert through SceneCore and it was absolutely incredible! The whole process was seamless, from booking to entry. Amazing platform for live music!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Sarah M.",
      rating: 5,
      text: "I recently booked a Concert through SceneCore and it was absolutely incredible! The whole process was seamless, from booking to entry. Highly recommend this platform!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Users" },
    { number: "10K+", label: "Events Booked" },
    { number: "5K+", label: "Verified Artists" },
    { number: "4.9★", label: "Average Rating" },
  ];

  return (
    <>
      {/* Final Hero Globe Section */}
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-purple-400 text-sm font-medium tracking-wide uppercase">
              Experience Live Entertainment
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              YOUR EVENT, YOUR WAY —{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                DISCOVER, BOOK, ENJOY
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Discover the best live events in your city. From concerts to
              festivals, book your unforgettable experience today.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                Explore Events
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm overflow-hidden animate-[spin_20s_linear_infinite]">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-800/40 to-pink-800/40 opacity-60"></div>
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-700/30 to-pink-700/30 opacity-80"></div>
                <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                  <img
                    src={p3}
                    alt="Globe"
                    className="w-full h-full object-cover rounded-full p-3"
                  />
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Book Artists For Your Own Event
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Connect with talented artists and make your event truly memorable
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Learn More <span className="text-lg">→</span>
                  </button>
                </div>

                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

  <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Top Events For You
          </h2>
          <p className="text-gray-400 text-lg">
            Discover the hottest events happening near you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-purple-600/80 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 font-medium">{event.artist}</p>
                </div>

                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>{event.date}</span>
                    <Clock className="w-4 h-4 ml-2 text-purple-400" />
                    <span>{event.time} IST</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <span className="text-2xl font-bold text-white">
                    {event.price}
                  </span>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/40">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-purple-400 text-sm font-medium tracking-wide uppercase mb-4">
              Why Join Us As An Artist?
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Book Tickets Instantly
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience seamless booking with our cutting-edge platform
              designed for music lovers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/30 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Booking CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Start Booking Now
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Find Your Next Unforgettable Experience
          </p>
          <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto">
            Join thousands of music lovers who trust us to deliver amazing live
            experiences. Discover, book, and create memories that last a
            lifetime.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[Music, Calendar, Star].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-semibold">
                  {i === 2 ? "Start Managing Guest" : "Explore Event Now"}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="group bg-white text-purple-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3">
              Start Exploring Events Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-800 transition-all duration-300 hover:scale-105">
              Browse Events
            </button>
          </div>

          <p className="text-purple-200 text-sm mt-8">
            Create Memorable Nights Today!
          </p>
        </div>
      </section>
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Real Reviews. Real Experiences.
            </h2>
            <p className="text-purple-400 font-medium">
              ⭐ See What Our Community Is Saying
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-purple-400 opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {review.text}
                </p>

                {/* Reviewer info */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                  />
                  <div>
                    <p className="text-white font-semibold">{review.name}</p>
                    <p className="text-gray-400 text-sm">Verified Customer</p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </h3>
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
