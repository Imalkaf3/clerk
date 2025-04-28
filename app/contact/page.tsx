"use client";
import React from 'react';

export default function GenericPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8 font-sans">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">Page Title</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          This is a placeholder page. Update this content to suit your needs.
        </p>
      </div>
    </main>
  );
}
