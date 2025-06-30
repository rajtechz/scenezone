import React, { useState } from 'react';
import { Calendar, Music, Users, Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import whatsapp from "@/assets/icons/whatsapp.png"
import instagram from "@/assets/icons/instagram.png"
const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    userType: '',
    subject: '',
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const supportOptions = [
    {
      icon: Calendar,
      title: "Host Support",
      description: "Need help managing events, sending invites, or managing your bookings?",
      features: [
        "Event creation assistance",
        "Artist hiring guidance", 
        "Pricing consultations"
      ],
      buttonText: "Contact Host Support",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Music,
      title: "Artist Support", 
      description: "Questions about joining, bookmarking, editing dates, or profile optimization?",
      features: [
        "Profile setup help",
        "Event protection tips",
        "Payment inquiries"
      ],
      buttonText: "Contact Artist Support",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Users,
      title: "User Support",
      description: "Need help with booking events, refunds, or event information?",
      features: [
        "Ticket booking help",
        "Refund processing",
        "Event recommendations"
      ],
      buttonText: "Contact User Support", 
      color: "from-pink-600 to-red-600"
    }
  ];

  const faqs = [
    {
      question: "How Do I Create An Event As A Host?",
      answer: "Sign Up As A Host, Complete Your Profile, And Use Our Event With Details, Pricing, And Artist Requirements."
    },
    {
      question: "What Steps Should I Follow To Host An Event?",
      answer: "To Become A Host Register On Our Platform, Fill Out Your Profile, Add Review The Event Details, Pricing, And Artist Requirements For Artists."
    },
    {
      question: "What Are The Steps To Create An Event As A Host?",
      answer: "First, Sign Up As A Host, Complete Your Profile, And Then Set Up Your Event With All The Necessary Details, Pricing, And Artist Requirements."
    },
    {
      question: "How Can I Set Up An Event As A Host?",
      answer: "Begin By Signing Up As A Host, Providing Your Profile, And Then Use Our Platform To Define Your Event, Including Details, Pricing, And Any Artist Needs."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Get In Touch Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether You're A Host, Artist, Or Event-Goer, We're Here To Help You
              Create Amazing Experiences
            </p>
          </div>

          {/* Support Options Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {option.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 text-sm text-gray-300">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button className={`w-full bg-gradient-to-r ${option.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 mt-6`}>
                    {option.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Send Us A Message
            </h2>
            <p className="text-gray-400 text-lg">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-6">
              {/* User Type */}
              <div>
                <label className="block text-sm font-medium mb-2">I am a</label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  required
                >
                  <option value="">Select your role</option>
                  <option value="host">Host</option>
                  <option value="artist">Artist</option>
                  <option value="user">User</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Select a subject"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter Your Full Name"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your inquiry in detail..."
                rows={6}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-12">
            <p className="text-purple-400 text-sm font-medium tracking-wide uppercase mb-4">
              DON'T JUST SUBSCRIBE
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Book An Event Now, Thrive
              <br />
              On The Zest Of Life
            </h2>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Ms Jonita Jones</p>
                <p className="font-bold">0146537038</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Ms Jonita Jones</p>
                <p className="font-bold">0130904315</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Ms Bell Lizard</p>
                <p className="font-bold">0824078458</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6">
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                {/* <whatsapp className="w-4 h-4" /> */}
                <img src={whatsapp} alt="" />

              </div>
              <span className="text-sm">WhatsApp</span>
            </div>
            <div className="flex items-center gap-2 text-pink-400">
              <div className="w-8 h-8 bg-gradient-to-r to-purple-500 rounded-full flex items-center justify-center">
           <img src={instagram} alt="" />
              </div>
              <span className="text-sm">Instagram</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
              Quick Answers To Common Questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;