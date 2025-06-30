import React from 'react';
import calling from '@/assets/icons/calling.png';
import instagram from '@/assets/icons/instagram.png';
import whatsapp from '@/assets/icons/whatsapp.png';

const ContactSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl px-8 py-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Left Side - Text and Contact Info */}
            <div className="text-left w-full md:w-2/3">
              <p className="text-sm text-pink-500 font-medium mb-2 uppercase">
                Our Event Direction
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Book An Event Now, Thrive<br />
                On The Zest Of Life
              </h2>

              {/* Contact Info */}
              <div className="flex items-center gap-6 mt-6 flex-wrap">
                <img src={calling} alt="Call Icon" className="w-10 h-10" />

                <div className="text-white text-sm space-y-1">
                  <p><span className="font-semibold">Apurv Anand</span></p>
                  <p><span className="font-semibold">9654551209</span></p>
                </div>
                <div className="text-white text-sm space-y-1">
                  <p><span className="font-semibold"> Kanika Tanwar</span></p>
                  <p><span className="font-semibold">8130092813</span></p>
                </div>
                <div className="text-white text-sm space-y-1">
                  <p><span className="font-semibold">Raj Kumar</span></p>
                  <p><span className="font-semibold">8826078408</span></p>
                </div>
              </div>
            </div>

            {/* Right Side - Social Icons */}
            <div className="flex flex-col gap-6 w-full md:w-auto items-center">
              <a
                href="#"
                className="w-40 h-20 border border-[#2c2c2c] rounded-lg flex items-center justify-center flex-col hover:scale-105 transition-transform duration-300"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 mb-1" />
                <span className="text-green-400 text-sm font-medium">Whatsapp</span>
              </a>
              <a
                href="#"
                className="w-40 h-20 border border-[#2c2c2c] rounded-lg flex items-center justify-center flex-col hover:scale-105 transition-transform duration-300"
              >
                <img src={instagram} alt="Instagram" className="w-6 h-6 mb-1" />
                <span className="text-pink-500 text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
