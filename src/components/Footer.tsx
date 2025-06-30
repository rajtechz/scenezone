
import React from 'react';
import footerlogo from '@/assets/icons/footerlogo.png'; // Assuming you have a logo image
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-900/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
           <img src={footerlogo} alt="" />
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionize your entertainment experience with the ultimate platform for events, artists, and unforgettable nights.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Artists</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@scenezone.com</li>
              <li>📞 +91 9654551209</li>
              <li>📍 India Main Office</li>
              <li>🌐 www.scenezone.com</li>
            </ul>
          </div>
          
         <div>
  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
    >
      <FaFacebookF size={18} />
    </a>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
    >
      <FaTwitter size={18} />
    </a>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
    >
      <FaInstagram size={18} />
    </a>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
    >
      <FaYoutube size={18} />
    </a>
  </div>
</div>
        </div>
        
        <div className="border-t border-purple-900/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © Copyright 2024 | All Rights Reserved 
          </p>
          <p className="text-gray-400 text-sm">
            Terms & Conditions | Privacy Policy | Contact Us
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
