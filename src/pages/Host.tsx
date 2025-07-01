// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion, useSpring } from "framer-motion";
// import { RefObject, useEffect, useRef } from "react";
// import mic from "@/assets/mic.png";
// import hostbanner from "@/assets/hostbanner.png";
// import img1 from "@/assets/img1.png";
// import img2 from "@/assets/img2.png";
// import img3 from "@/assets/img3.png";
// import img4 from "@/assets/img4.png";
// import img5 from "@/assets/img5.png";
// import gallery from "@/assets/gallery.png";
// import gallery1 from "@/assets/gallery1.png";
// import gallery2 from "@/assets/gallery2.png";
// import gallery3 from "@/assets/gallery3.png";
// import { Wrench, Zap, DollarSign } from "lucide-react";
// import applestore from "@/assets/icons/applestore.png";
// import playstore from "@/assets/icons/playstore.png";
// import { Search, CalendarPlus, Handshake } from "lucide-react";
// import { FaBullseye, FaChartBar, FaChartLine } from "react-icons/fa";

// // Spring configuration for smooth animation
// const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

// // Styles for the animated cursor
// const cursor = {
//   width: 50,
//   height: 50,
//   background:
//     "radial-gradient(circle, rgba(147, 51, 234, 0.8), rgba(236, 72, 153, 0.4))",
//   borderRadius: "50%",
//   position: "absolute" as const,
//   pointerEvents: "none" as const,
//   zIndex: 9999,
// };

// // Reusable hook to follow mouse pointer
// const useFollowPointer = (ref: RefObject<HTMLDivElement>) => {
//   const x = useSpring(0, spring);
//   const y = useSpring(0, spring);

//   useEffect(() => {
//     if (!ref.current) return;

//     const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
//       const element = ref.current!;
//       x.set(clientX - element.offsetWidth / 2);
//       y.set(clientY - element.offsetHeight / 2 + window.scrollY);
//     };

//     window.addEventListener("pointermove", handlePointerMove);

//     return () => window.removeEventListener("pointermove", handlePointerMove);
//   }, [ref, x, y]);

//   return { x, y };
// };

// const Host = () => {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const { x, y } = useFollowPointer(cursorRef);

//   const features = [
//     {
//       icon: <FaBullseye className="w-6 h-6 text-white" />,
//       title: "Tools Tailored for Event Creators",
//       description:
//         "Comprehensive event management tools designed specifically for event creators and hosts.",
//     },
//     {
//       icon: <FaChartBar className="w-6 h-6 text-white" />,
//       title: "All-In-One Dashboard",
//       description:
//         "Control every aspect of your event from one central, intuitive dashboard interface.",
//     },
//     {
//       icon: <FaChartLine className="w-6 h-6 text-white" />,
//       title: "Advanced Reporting & Analytics in One Place",
//       description:
//         "Get detailed insights and analytics to optimize your events and maximize success.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white relative">
//       <motion.div ref={cursorRef} style={{ ...cursor, x, y }} />
//       <section className="py-20 bg-black relative overflow-hidden">
//         <div className="container mx-auto px-4 z-10 relative">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6 animate-fade-in">
//               <p className="text-sm text-gray-400 tracking-widest uppercase">
//                 DISRUPTING LIVE ENTERTAINMENT
//               </p>
//               <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//                 YOUR STAGE AWAITS – START <br />
//                 <span className="text-white">HOSTING TODAY</span>
//               </h1>
//               <p className="text-gray-300 text-base max-w-md">
//                 Bring your vision to life – start hosting events in minutes.
//               </p>
//               <div className="flex items-center space-x-4 pt-4">
//                 <img
//                   src={applestore}
//                   alt="App Store"
//                   className="h-12 w-auto object-contain cursor-pointer"
//                   loading="lazy"
//                 />
//                 <img
//                   src={playstore}
//                   alt="Google Play"
//                   className="h-12 w-auto object-contain cursor-pointer"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//             <div className="relative flex justify-center items-center animate-scale-in">
//               <div className="w-83 h-83 relative">
//                 <img
//                   src={mic}
//                   alt="Musical Note Design"
//                   className="w-full h-full object-contain animate-pulse"
//                   loading="lazy"
//                 />
//                 <div
//                   className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-spin"
//                   style={{ animationDuration: "10s" }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 w-full">
//           <img
//             src={hostbanner}
//             alt="Audience Silhouette"
//             className="w-full object-cover"
//             loading="lazy"
//           />
//         </div>
//       </section>
//       <section className="py-20 bg-black">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in">
//             Why Host With Us?
//           </h2>
//           <p className="text-gray-300 text-lg mb-12 max-w-4xl mx-auto animate-fade-in">
//             Create and share your existing live content with the world. Add them
//             to existing events, or build your own dream lineup. All with
//             advanced filters and smart recommendation systems.
//           </p>
//           <div className="space-y-6 mb-12 animate-fade-in">
//             <div className="flex items-center justify-center space-x-4">
//               <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
//                 <Wrench className="w-4 h-4 text-white" />
//               </div>
//               <p className="text-white text-lg">
//                 Access Powerful Tools And A Passionate Community.
//               </p>
//             </div>
//             <div className="flex items-center justify-center space-x-4">
//               <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
//                 <Zap className="w-4 h-4 text-white" />
//               </div>
//               <p className="text-white text-lg">
//                 Flexible Options, Quick Setup, And Full Control Over Your
//                 Events.
//               </p>
//             </div>
//             <div className="flex items-center justify-center space-x-4">
//               <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
//                 <DollarSign className="w-4 h-4 text-white" />
//               </div>
//               <p className="text-white text-lg">
//                 Earn Revenue, Grow Your Brand, And Connect With Your Audience.
//               </p>
//             </div>
//           </div>
//           <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
//             Sign up as a host →
//           </Button>
//         </div>
//       </section>
//       <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black overflow-hidden">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-white text-center mb-10">
//             Meet the Artists
//           </h2>
//           <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
//             <div className="flex animate-infinite-scroll">
//               {[
//                 { name: "Johney Deo", img: img1 },
//                 { name: "Liam Carter", img: img2 },
//                 { name: "Emma Thompson", img: img3 },
//                 { name: "Noah Johnson", img: img4 },
//                 { name: "Olivia Brown", img: img5 },
//               ]
//                 .concat([
//                   { name: "Johney Deo", img: img1 },
//                   { name: "Liam Carter", img: img2 },
//                   { name: "Emma Thompson", img: img3 },
//                   { name: "Noah Johnson", img: img4 },
//                   { name: "Olivia Brown", img: img5 },
//                 ])
//                 .map((artist, index) => (
//                   <div
//                     key={index}
//                     className="w-[200px] text-center flex-shrink-0 px-4"
//                   >
//                     <div className="relative w-[160px] h-[160px] rounded-full overflow-hidden mx-auto shadow-lg">
//                       <img
//                         src={artist.img}
//                         alt={artist.name}
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                       />
//                     </div>
//                     <h3 className="mt-4 text-white font-bold text-lg">
//                       {artist.name}
//                     </h3>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//         <style>{`
//           @keyframes infinite-scroll {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-50%);
//             }
//           }
//           .animate-infinite-scroll {
//             width: max-content;
//             animation: infinite-scroll 30s linear infinite;
//           }
//           .animate-infinite-scroll:hover {
//             animation-play-state: paused;
//           }
//         `}</style>
//       </section>
//       <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
//             How It Works?
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div
//               className="text-center animate-fade-in"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Search className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Search Event
//               </h3>
//               <p className="text-gray-200">
//                 Browse events tailored to your interests using powerful filters
//                 and tags.
//               </p>
//             </div>
//             <div
//               className="text-center animate-fade-in"
//               style={{ animationDelay: "0.4s" }}
//             >
//               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <CalendarPlus className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Create Events
//               </h3>
//               <p className="text-gray-200">
//                 Set up your event quickly with tools that offer full flexibility
//                 and control.
//               </p>
//             </div>
//             <div
//               className="text-center animate-fade-in"
//               style={{ animationDelay: "0.6s" }}
//             >
//               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Handshake className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Book and Connect
//               </h3>
//               <p className="text-gray-200">
//                 Connect with artists and manage every aspect of your booking
//                 seamlessly.
//               </p>
//             </div>
//           </div>
//           Thirteen
//         </div>
//       </section>
//       <section className="py-20 bg-black">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
//             Features For Hosts
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group transition-transform duration-300 transform hover:scale-105 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="p-[2px] h-full rounded-xl bg-gradient-to-b from-[#CC5500] via-[#663300] to-[#331A00]">
//                   <div className="bg-[#0A060F] rounded-xl p-8 h-[340px] flex flex-col justify-between text-left">
//                     <div>
//                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
//                         {feature.icon}
//                       </div>
//                       <h3 className="text-white text-lg font-semibold mb-3">
//                         {feature.title}
//                       </h3>
//                       <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in">
//             Upcoming Events
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 date: "14 DEC 2024",
//                 title: "Neon Jazz Night",
//                 venue: "Blue Moon",
//                 image: gallery,
//               },
//               {
//                 date: "18 DEC 2024",
//                 title: "Electric Rock Fest",
//                 venue: "Thunder Hall",
//                 image: gallery1,
//               },
//               {
//                 date: "22 DEC 2024",
//                 title: "Underground Hip Hop",
//                 venue: "Urban Beat",
//                 image: gallery2,
//               },
//               {
//                 date: "28 DEC 2024",
//                 title: "Synth Pop Showcase",
//                 venue: "Retro Club",
//                 image: gallery3,
//               },
//             ].map((event, index) => (
//               <Card
//                 key={event.title}
//                 className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer overflow-hidden"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                   <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded-full">
//                     <span className="text-white text-sm font-semibold">
//                       {event.date}
//                     </span>
//                   </div>
//                 </div>
//                 <CardContent className="p-6 bg-black/90">
//                   <h3 className="text-xl font-bold text-white mb-2">
//                     {event.title}
//                   </h3>
//                   <p className="text-purple-400">{event.venue}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Host;

import React, { RefObject, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import mic from "@/assets/mic.png";
import hostbanner from "@/assets/hostbanner.png";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import img5 from "@/assets/img5.png";
import gallery from "@/assets/gallery.png";
import gallery1 from "@/assets/gallery1.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import applestore from "@/assets/icons/applestore.png";
import playstore from "@/assets/icons/playstore.png";
import {
  Wrench,
  Zap,
  DollarSign,
  Search,
  CalendarPlus,
  Handshake,
} from "lucide-react";
import { FaBullseye, FaChartBar, FaChartLine } from "react-icons/fa";

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

const cursor = {
  width: 50,
  height: 50,
  background:
    "radial-gradient(circle, rgba(147, 51, 234, 0.8), rgba(236, 72, 153, 0.4))",
  borderRadius: "50%",
  position: "absolute" as const,
  pointerEvents: "none" as const,
  zIndex: 9999,
};

const useFollowPointer = (ref: RefObject<HTMLDivElement>) => {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      x.set(clientX - element.offsetWidth / 2);
      y.set(clientY - element.offsetHeight / 2 + window.scrollY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, x, y]);

  return { x, y };
};

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const Host = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(cursorRef);

  const features = [
    {
      icon: <FaBullseye className="w-6 h-6 text-white" />,
      title: "Tools Tailored for Event Creators",
      description:
        "Comprehensive event management tools designed specifically for event creators and hosts.",
    },
    {
      icon: <FaChartBar className="w-6 h-6 text-white" />,
      title: "All-In-One Dashboard",
      description:
        "Control every aspect of your event from one central, intuitive dashboard interface.",
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-white" />,
      title: "Advanced Reporting & Analytics in One Place",
      description:
        "Get detailed insights and analytics to optimize your events and maximize success.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <motion.div ref={cursorRef} style={{ ...cursor, x, y }} />

     
      <motion.section
        className="py-20 bg-black relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        {/* Hero content here */}

        <section className="py-20 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4 z-10 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                <div className="flex items-center space-x-4 pt-4">
                  <img
                    src={applestore}
                    alt="App Store"
                    className="h-12 w-auto object-contain cursor-pointer"
                    loading="lazy"
                  />
                  <img
                    src={playstore}
                    alt="Google Play"
                    className="h-12 w-auto object-contain cursor-pointer"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="relative flex justify-center items-center animate-scale-in">
                <div className="w-83 h-83 relative">
                  <img
                    src={mic}
                    alt="Musical Note Design"
                    className="w-full h-full object-contain animate-pulse"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-spin"
                    style={{ animationDuration: "10s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 w-full">
            <img
              src={hostbanner}
              alt="Audience Silhouette"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>
      </motion.section>

      {/* Similarly wrap the remaining sections with motion.section or motion.div and apply fadeInVariant or custom animations */}

      {/* Inject your full component layout here following the pattern */}
    </div>
  );
};

export default Host;
