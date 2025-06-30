import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import send from "@/assets/icons/send.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Get Latest Updates Subscribe
          <br />
          To Our Newsletter
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto w-full bg-gradient-to-r from-purple-700 to-pink-600 p-1 rounded-full"
        >
          <div className="flex items-center bg-transparent rounded-full pl-6 pr-2 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-white/80 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md"
            >
              <img src={send} alt="Send" className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
