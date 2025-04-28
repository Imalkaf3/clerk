'use client';
import React from 'react';

export default function Shop() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Shop</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example cards */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Welcome Back&apos;s</h2> {/* Escaped apostrophe */}
            <p className="text-gray-600">Here&apos;s a quick overview of your activities.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Statistics</h2>
            <p className="text-gray-600">View your performance metrics.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Tasks</h2>
            <p className="text-gray-600">Track your progress and upcoming tasks.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
