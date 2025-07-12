"use client";

import React, { useEffect } from "react";
import FormLayout01 from "./form";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal Component for Event Registration
 * Displays the registration form in a modal overlay
 * Handles backdrop clicks and ESC key to close
 */
export default function Modal({ isOpen, onClose }: ModalProps) {
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Add event listener when modal is open
    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleEscKey);
      // Restore body scroll when modal is closed
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Don't render anything if modal is not open
  if (!isOpen) return null;

  /**
   * Handle backdrop click to close modal
   * Only close if clicking on the backdrop, not the modal content
   */
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content - Registration Form */}
        <div className="p-6">
          <FormLayout01 />
        </div>
      </div>
    </div>
  );
}
