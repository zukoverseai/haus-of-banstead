"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export function LoadingExperience() {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Crafting your experience...",
    "Designing the perfect space...",
    "Curating luxury details...",
    "Welcome to HOB Studio",
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textTimer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 750);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, [loadingTexts.length]);

  const sectionBg =
    theme === "light"
      ? "bg-gradient-to-br from-white via-stone-100 to-brand/10"
      : "bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900";

  const hobTextColor = theme === "light" ? "text-brand" : "text-amber-100";
  const subtitleColor =
    theme === "light" ? "text-brand/80" : "text-amber-200/70";

  const progressBarBgColor =
    theme === "light" ? "bg-stone-300" : "bg-stone-700";
  const progressBarIndicatorColor =
    theme === "light"
      ? "bg-gradient-to-r from-brand to-brand/70"
      : "bg-gradient-to-r from-amber-400 to-amber-200";

  const loadingTextColor =
    theme === "light" ? "text-brand/90" : "text-amber-200/80";

  return (
    <div
      className={`fixed inset-0 ${sectionBg} flex items-center justify-center`}
    >
      <div className="text-center space-y-8">
        <div className="relative">
          <div
            className={`text-6xl md:text-8xl font-thin tracking-[0.3em] ${hobTextColor} mb-4`}
          >
            HOB
          </div>
          <div
            className={`text-sm tracking-[0.5em] ${subtitleColor} uppercase`}
          >
            Interior Design Studio
          </div>
        </div>

        <div
          className={`w-64 h-1 ${progressBarBgColor} rounded-full overflow-hidden mx-auto`}
        >
          <div
            className={`h-full ${progressBarIndicatorColor} transition-all duration-100 ease-out`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="h-6">
          <p
            className={`${loadingTextColor} text-sm tracking-wide animate-pulse`}
          >
            {loadingTexts[currentText]}
          </p>
        </div>
      </div>
    </div>
  );
}
