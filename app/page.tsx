"use client";

import { useState, useEffect } from "react";
import { HeroExperience } from "./components/hero-experience";
import { LoadingExperience } from "./components/loading-experience";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.className = "bg-white";
    } else {
      document.body.className = "bg-white";
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingExperience />;
  }

  return (
    <main className="relative overflow-hidden bg-white text-stone-800">
      <HeroExperience />
    </main>
  );
}
