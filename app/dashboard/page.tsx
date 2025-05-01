"use client";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    fetch("/api/create-user", { method: "POST" });
  }, []);

  return <div>Welcome to your dashboard!</div>;
}
