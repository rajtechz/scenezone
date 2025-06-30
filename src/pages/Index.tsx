import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ContactSection from '@/components/ContactSection';
import EventGallery from '@/components/EventGallery';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <ContactSection />
      <EventGallery />
      <Newsletter />
    </div>
  );
};

export default Index;
