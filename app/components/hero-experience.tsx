"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Play } from "lucide-react";

export function HeroExperience() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isBookingHovered, setIsBookingHovered] = useState(false);

  // Idle animation loop for hero animations (always use mobile-style idle animation)
  useEffect(() => {
    let rafId: number;
    let t = 0;
    const loop = () => {
      setMousePosition({
        x: (Math.sin(t) + 1) / 2,
        y: (Math.cos(t) + 1) / 2,
      });
      t += 0.01;
      rafId = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(rafId);
  }, []);

  const sectionBg = "bg-gradient-to-br from-white via-stone-100 to-brand/10";

  const animatedDotColor = "bg-brand/30";

  const shapeBorderColor = "border-brand/20";
  const secondaryShapeBorderColor = "border-brand/30";

  const hobTitleColor = "text-brand";

  const subtitleColor = "text-brand/90";
  const studioTitleColor = "text-stone-500";

  const dividerColor = "bg-gradient-to-r from-transparent via-brand to-transparent";

  const paragraphTextColor = "text-stone-700";
  const paragraphAccentColor = "text-brand";

  const primaryButtonClasses = "bg-gradient-to-r from-brand to-brand/80 text-white hover:shadow-brand/30";
  const primaryButtonHoverEffect = "bg-gradient-to-r from-brand/90 to-brand/70";

  const secondaryButtonClasses = "border border-brand text-brand hover:bg-brand/10";

  const scrollIndicatorColor = "text-brand/70";

  const heroBgImage = "/haus-light.png";

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/haus-light.png')` }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${animatedDotColor} rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive Geometric Shapes (hidden on small screens) */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div
          className={`absolute w-96 h-96 border ${shapeBorderColor} rounded-full transition-all duration-1000 ease-out`}
          style={{
            left: "10%",
            top: "20%",
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 30
              }px) rotate(${mousePosition.x * 10}deg)`,
          }}
        />
        <div
          className={`absolute w-64 h-64 border ${secondaryShapeBorderColor} transition-all duration-700 ease-out`}
          style={{
            right: "15%",
            bottom: "25%",
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 40
              }px) rotate(${-mousePosition.y * 15}deg)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div
          className="mb-12 transition-all duration-500 ease-out"
          style={{
            transform: `translateY(${mousePosition.y * -20}px)`,
          }}
        >
          <h1
            className={`text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-thin tracking-[0.2em] ${hobTitleColor} mb-6`}
          >
            HOB
          </h1>
          <div
            className={`text-xl md:text-2xl tracking-[0.3em] ${subtitleColor} mb-4 uppercase`}
          >
            Haus of Banstead
          </div>
          <div className={`text-sm tracking-[0.4em] ${studioTitleColor} uppercase`}
          >
            INTERIOR DESIGN
          </div>
        </div>

        <div className={`w-32 h-px ${dividerColor} mx-auto mb-12`} />


        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contact-us"
            onMouseEnter={() => setIsBookingHovered(true)}
            onMouseLeave={() => setIsBookingHovered(false)}
            className={`group relative px-8 py-4 font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${primaryButtonClasses}`}
          >
            <span className="relative z-10">Book a Consultation</span>
            <div
              className={`absolute inset-0 ${primaryButtonHoverEffect} transition-all duration-300 ${isBookingHovered ? "scale-110" : "scale-100"}`}
            />
          </a>



          {/* Secondary Contact Us Button */}
          <a

            className="border border-brand text-brand px-8 py-4 rounded-full transition-colors hover:bg-brand/10"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
