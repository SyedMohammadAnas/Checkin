import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Rock_Salt } from "next/font/google";
import "./globals.css";

// Configure Geist Sans font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure Geist Mono font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Rock Salt font for decorative text
const rockSalt = Rock_Salt({
  weight: "400",
  variable: "--font-rock-salt",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masthi with Dosthi - Event Registration",
  description: "Join us for an unforgettable night of live music, amazing vibes, and unlimited fun at Punami Ghat!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts preconnect links for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rockSalt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
