"use client";
import React from 'react';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-400 p-8 sm:p-20 font-sans">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Learn more about our mission, vision, and the team behind this project. 
          We are committed to delivering the best experience for our users.
        </p>
      </div>
    </main>
  );
}
