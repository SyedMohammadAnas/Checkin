"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as LabelPrimitive from "@radix-ui/react-label";
import { X } from "lucide-react";
import Image from "next/image";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

// Modal Component Interface
interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  // State for form data
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phoneNumber: ""
  });

  // State for payment method selection
  const [paymentMethod, setPaymentMethod] = React.useState<"googlepay" | "phonepe" | null>(null);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", { ...formData, paymentMethod });

    // Close modal after submission
    onClose();
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Close modal on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Don't render if modal is closed
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur effect */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 transition-opacity duration-300 ease-out"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Modal Content */}
        <div className="relative w-full max-w-md sm:max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl transform transition-all duration-300 ease-out scale-100 opacity-100">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 z-10"
          >
            <X size={20} className="text-gray-600 dark:text-gray-400" />
          </button>

          {/* Modal Header */}
          <div className="p-6 pb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Join the Event! 🎉
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Fill in your details to register for the ultimate experience
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 pb-6">
            <div className="space-y-5">

              {/* Full Name Field */}
              <div>
                <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300 font-medium">
                  Full Name
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="mt-2 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500/20"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                  Email
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="mt-2 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500/20"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <Label htmlFor="phoneNumber" className="text-gray-700 dark:text-gray-300 font-medium">
                  Phone Number
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="mt-2 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500/20"
                  required
                />
              </div>

              {/* Payment Method Selection */}
              <div>
                <Label className="text-gray-700 dark:text-gray-300 font-medium mb-3 block">
                  Payment Method
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <div className="grid grid-cols-2 gap-3">

                  {/* Google Pay Button */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("googlepay")}
                    className={cn(
                      "p-4 rounded-xl border-2 transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/20",
                      paymentMethod === "googlepay"
                        ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300"
                        : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-purple-300"
                    )}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      {/* Google Pay Icon */}
                      <div className="w-8 h-8 flex items-center justify-center">
                        {/* Actual Google Pay icon - updated path and extension */}
                        <Image
                          src="/icons/googlepay-icon.jpeg"
                          alt="Google Pay"
                          width={32}
                          height={32}
                          className="object-contain rounded-full"
                        />
                      </div>
                      <span className="text-sm font-medium">Google Pay</span>
                    </div>
                  </button>

                  {/* PhonePe Button */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("phonepe")}
                    className={cn(
                      "p-4 rounded-xl border-2 transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/20",
                      paymentMethod === "phonepe"
                        ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300"
                        : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-purple-300"
                    )}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      {/* PhonePe Icon */}
                      <div className="w-8 h-8 flex items-center justify-center">
                        {/* Actual PhonePe icon - updated path and extension */}
                        <Image
                          src="/icons/phonepe-icon.jpeg"
                          alt="PhonePe"
                          width={32}
                          height={32}
                          className="object-contain rounded-full"
                        />
                      </div>
                      <span className="text-sm font-medium">PhonePe</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between space-x-4 mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 h-12 rounded-xl border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className={cn(
                  "flex-1 h-12 rounded-xl font-semibold transition-all duration-300 ease-out transform hover:scale-105 focus:scale-105",
                  paymentMethod
                    ? "bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 hover:from-purple-700 hover:via-pink-600 hover:to-purple-800 text-white shadow-lg shadow-purple-500/25"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                )}
                disabled={!paymentMethod}
              >
                {paymentMethod ? `Proceed with ${paymentMethod === "googlepay" ? "Google Pay" : "PhonePe"}` : "Select Payment Method"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
