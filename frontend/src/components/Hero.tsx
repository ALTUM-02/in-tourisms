// HeroSection.tsx

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

  return (
    <section className="relative min-h-screen bg-[#f8f7f3] overflow-hidden flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="z-20">
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
            Discover Tanzania
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">
            Explore The
            <br />
            Beauty Of
            <span className="text-green-600">
              {" "}Tanzania
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            Experience wildlife safaris, beautiful beaches,
            luxury hotels and unforgettable adventures.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-7 py-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition">
              Explore Now
            </button>

            <button className="px-7 py-4 rounded-full border border-gray-300 hover:bg-white transition">
              Watch Video
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative h-650px">

          {/* Main Image */}
          <div
            className="absolute right-0 top-0 w-500px h-620px rounded-[40px] overflow-hidden shadow-2xl transition-all duration-300"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          >
            <img
              src="/public/images/Serengeti.jpg"
              alt="serengeti"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card 1 */}
          <div
            className="absolute left-0 top-20 w-56 h-72 rounded-3xl overflow-hidden shadow-xl transition-all duration-300"
            style={{
              transform: `translate(${
                -position.x * 1.5
              }px, ${-position.y * 1.5}px)`,
            }}
          >
            <img
              src="/images/zanzibar.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card 2 */}
          <div
            className="absolute right-10 bottom-0 w-64 h-44 rounded-3xl overflow-hidden shadow-xl transition-all duration-300"
            style={{
              transform: `translate(${
                position.x * 2
              }px, ${position.y * 2}px)`,
            }}
          >
            <img
              src="/images/kilimanjaro.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Info Card */}
          <div className="absolute left-10 bottom-20 bg-white/80 backdrop-blur-md rounded-3xl p-5 shadow-xl">
            <p className="text-sm text-gray-500">
              Popular Destination
            </p>

            <h3 className="font-bold text-xl">
              Serengeti Safari
            </h3>

            <p className="text-green-600 font-semibold">
              ⭐ 4.9 Rating
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}