
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Get Latest Updates Subscribe<br />
          To Our Newsletter
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
            required
          />
          <Button 
            type="submit"
            className="bg-white text-purple-900 hover:bg-white/90 px-8"
          >
            →
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
