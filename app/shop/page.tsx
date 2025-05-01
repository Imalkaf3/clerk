"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function HomePage() {
  const { user } = useUser();

  useEffect(() => {
    if (user?.emailAddresses[0]?.emailAddress) {
      fetch("/api/send-welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.emailAddresses[0].emailAddress,
          name: user.firstName,
        }),
      });
    }
  }, [user]);

  return (
    <main className="p-4">
      <h1>Welcome, {user?.firstName} 👋</h1>
    </main>
  );
}
