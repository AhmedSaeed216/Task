
import React from 'react';
import image from "../assets/heroSectionBg3.png";
import EmailCaptureFooter from './EmialCTA';

const HeroSection = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center text-center text-white px-4 z-20"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 w-full max-w-3xl">
        <h1 className="text-6xl   font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-base sm:text-lg mb-6 font-semibold">
          Starts at Rs 250. Cancel anytime.
        </p>

        <div className="w-full flex justify-center">
          <EmailCaptureFooter />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;