"use client";

import Image from "next/image";
import React from "react";
import RegistrationModal from "@/components/form";

export default function Home() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    // Outer container ensures no horizontal scroll and fits images perfectly
    <div className="w-full max-w-full overflow-x-hidden bg-black">
      {/* Hero/Banner Image - fills width, no extra space */}
      <Image
        src="/images/hero1.png"
        alt="Event Hero"
        width={2892}
        height={4096}
        className="w-full max-w-full h-auto block select-none"
        priority
        draggable={false}
      />

      {/* Ticket Section - Clean ticket image without overlay */}
      <div className="relative w-full">
        {/* Ticket Image below the hero image - fills width, no extra space */}
        <Image
          src="/images/Ticket.jpeg"
          alt="Event Ticket"
          width={2892}
          height={4096}
          className="w-full max-w-full h-auto block select-none object-cover"
          draggable={false}
          style={{ display: 'block', lineHeight: 0 }}
        />
      </div>

      {/* Join Us Section - New appealing section below ticket */}
      <div className="relative w-full bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 py-16 md:py-24 lg:py-32">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12">

          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to Experience
              {/* Gradient headline with adjusted line height and padding to prevent clipping */}
              <span
                className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-rock-salt text-3xl md:text-4xl lg:text-5xl mt-3 md:mt-4 tracking-wide leading-[1.2] py-2"
              >
                MASTHI with DOSTHI?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Join us for an unforgettable night of live music, amazing vibes, and unlimited fun at Punami Ghat!
            </p>
          </div>

          {/* Event Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">

            {/* Date & Time */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">03</div>
                <div className="text-lg md:text-xl text-white font-semibold">AUG</div>
                <div className="text-gray-300 mt-2">4:00 PM</div>
              </div>
            </div>

            {/* Venue */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-lg md:text-xl text-white font-semibold mb-2">VENUE</div>
                <div className="text-yellow-400 text-2xl font-bold">PUNAMI GHAT</div>
                <div className="text-gray-300 mt-2 text-sm">Doors open at 4 PM</div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-lg md:text-xl text-white font-semibold mb-2">ENTRY</div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">₹599</div>
                <div className="text-gray-300 text-sm">Per Person</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">

            {/* Main Join Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <button
                onClick={openModal}
                className="
                  group relative overflow-hidden
                  bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600
                  hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700
                  text-white font-bold text-lg md:text-xl lg:text-2xl
                  px-12 py-4 md:px-16 md:py-5 lg:px-20 lg:py-6
                  rounded-full
                  shadow-2xl shadow-pink-500/50
                  border-2 border-yellow-400/50
                  hover:border-yellow-300
                  transition-all duration-500 ease-out
                  transform hover:scale-105 active:scale-95
                  uppercase tracking-wider
                  min-w-[280px] md:min-w-[320px]
                "
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Button Text */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span>🎉</span>
                  JOIN THE PARTY
                  <span>🎉</span>
                </span>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          {/* Reduced margin-top and padding-top, and removed extra bottom space */}
          <div className="mt-6 md:mt-8 pt-4 pb-0 border-t border-white/20">
            <div className="text-center">
              <p className="text-gray-300 text-sm md:text-base mb-2">
                For more information contact:
              </p>
              <p className="text-yellow-400 font-semibold text-base md:text-lg">
                📞 7695988710, 6281158582
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-2 font-rock-salt">
                @flixomedia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal remains unchanged */}
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

// Prevent horizontal scroll globally (in case of edge cases)
if (typeof window !== "undefined") {
  document.body.style.overflowX = "hidden";
}
