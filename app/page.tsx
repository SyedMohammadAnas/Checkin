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

      {/* Ticket Section with JOIN US Button */}
      <div className="relative w-full">
        {/* Ticket Image below the hero image - fills width, no extra space */}
        <Image
          src="/images/Ticket.jpeg"
          alt="Event Ticket"
          width={2892}
          height={4096}
          className="w-full max-w-full h-auto block select-none"
          draggable={false}
        />

        {/* JOIN US Button - positioned over the ticket with matching colors */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 p-8 pb-105 pl-120">
            {/* Main JOIN US Button */}
            <button
              className="
                px-8 py-4 md:px-20 md:py-4
                bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700
                hover:from-purple-700 hover:via-pink-600 hover:to-purple-800
                text-white font-bold text-lg md:text-xl lg:text-2xl
                shadow-lg shadow-purple-500/50
                border-2 border-yellow-400
                hover:border-yellow-300 hover:shadow-xl hover:shadow-purple-500/70
                transition-all duration-300 ease-in-out
                transform hover:scale-105 active:scale-95
                uppercase tracking-wider
                backdrop-blur-sm
              "
              onClick={openModal}
            >
              JOIN US
            </button>

            {/* Secondary accent text */}
            <p className="
              text-yellow-400 font-semibold text-sm md:text-base
              text-center px-4 py-2
              bg-black/50 rounded-full
              border border-yellow-400/50
              backdrop-blur-sm
            ">
              Don&apos;t miss the ultimate experience!
            </p>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

// Prevent horizontal scroll globally (in case of edge cases)
if (typeof window !== "undefined") {
  document.body.style.overflowX = "hidden";
}
