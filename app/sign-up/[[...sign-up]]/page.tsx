// app/sign-up/page.tsx

'use client';

import { SignUp } from '@clerk/nextjs';
import Image from 'next/image'; // Import Image from next/image

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
            {/* Right side - Clerk SignUp Form */}
            <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Create an Account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please sign up to create your account
            </p>
          </div>

          {/* Clerk SignUp */}
          <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </div>
      </div>
      {/* Left side - Image */}
      <div className="md:w-1/2 bg-gray-100 flex items-center justify-center">
        <div className="relative w-full h-64 md:h-full">
          <Image
            src="/OIP.jpg" // Replace with your image path
            alt="Sign Up Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
