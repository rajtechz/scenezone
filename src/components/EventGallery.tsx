import React from "react";
import gallery from "@/assets/gallery.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import gallery4 from "@/assets/gallery4.png";
import gallery5 from "@/assets/gallery5.png";
import gallery6 from "@/assets/gallery6.png";
import gallery7 from "@/assets/gallery7.png";
import gallery8 from "@/assets/gallery8.png";

const EventGallery = () => {
  const eventImages = [
    { img: gallery3, colSpan: "col-span-1", rowSpan: "row-span-2" },
    { img: gallery, colSpan: "col-span-1", rowSpan: "row-span-1" },

    { img: gallery2, colSpan: "col-span-1", rowSpan: "row-span-2" },
    { img: gallery5, colSpan: "col-span-1", rowSpan: "row-span-1" },
    
    { img: gallery4, colSpan: "col-span-1", rowSpan: "row-span-2" },
    { img: gallery6, colSpan: "col-span-1", rowSpan: "row-span-1" },
    { img: gallery7, colSpan: "col-span-1", rowSpan: "row-span-2" },
    { img: gallery8, colSpan: "col-span-1", rowSpan: "row-span-1" },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase text-purple-400 tracking-widest">
            Latest Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Take A Glance At Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 max-w-7xl mx-auto">
          {eventImages.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${item.colSpan} ${item.rowSpan}`}
            >
              <img
                src={item.img}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover overlay (optional) */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-sm">Live Event</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
