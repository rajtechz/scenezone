import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "HOST", path: "/host" },
    { name: "ARTIST", path: "/artist" },
    { name: "USER", path: "/user" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          SceneZone
        </div>

        <nav className="md:flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-white transition-colors ${
                    isActive ? "text-purple-400" : "hover:text-purple-400"
                  }`
                }
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Hamburger Menu for Mobile (replacing Login button position) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu (sliding down from top with full width) */}
          {isOpen && (
            <div
              className="md:hidden fixed top-0 left-0 w-screen h-screen bg-black/90 shadow-lg transition-all duration-300 ease-in-out transform origin-top"
              style={{
                transform: isOpen ? "translateY(0)" : "translateY(-100%)",
              }}
            >
              <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white self-end focus:outline-none margin-right-4"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `block text-white py-2 text-xl transition-colors ${
                        isActive ? "text-purple-400" : "hover:text-purple-400"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 w-full mt-6">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Login button for desktop */}
        <div className="hidden md:block">
          <Link to="/login">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
