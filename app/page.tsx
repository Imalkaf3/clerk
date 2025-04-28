"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  // Slideshow images
  const slides = [
    "/b635cc7d774753d046ab2b6481aa8ac0.jpg",
    "/OIP.jpg",
    "/Imalka Fernando.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-sans">
      {/* Hero Section with Slideshow */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Welcome to the Home Page
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-5xl w-full py-16 px-6 text-center space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Explore our amazing features
        </h2>
        <p className="text-gray-600 text-lg">
          Discover how we can help you achieve your goals faster and easier than ever before. 
          We provide top-notch solutions tailored to your needs.
        </p>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-600 text-white py-12 flex flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-bold">Ready to get started?</h2>
        <p className="max-w-2xl text-lg">
          Join thousands of others who trust us to deliver the best results.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
      
    </main>
  );
}
