import { useEffect, useState, useRef } from "react";
import axios from "axios";

type ImageItem = {
  id: number;
  url: string;
};

export default function HeroSection() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Example API (replace with your backend)
    axios.get("https://api.unsplash.com/photos/random?count=6&client_id=YOUR_KEY")
      .then((res) => {
        const formatted = res.data.map((img: any, index: number) => ({
          id: index,
          url: img.urls.small,
        }));
        setImages(formatted);
      })
      .catch(console.error);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    const items = containerRef.current.querySelectorAll(".parallax");

    items.forEach((item, index) => {
      const depth = (index + 1) * 6;
      (item as HTMLElement).style.transform =
        `translate(${x * depth}px, ${y * depth}px) rotate(${x}deg)`;
    });
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#0b0b0f]">
      
      {/* HERO CARD */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-900px h-500px rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
      >

        {/* LEFT TEXT */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20 text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Discover
            <br />
            Beautiful Places
          </h1>
          <p className="text-white/60 mt-4 max-w-sm">
            Explore curated destinations with interactive visual experience.
          </p>

          <button className="mt-6 px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition">
            Explore Now
          </button>
        </div>

        {/* FLOATING IMAGE STACK */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-420px h-420px">
          {images.map((img, i) => (
            <img
              key={img.id}
              src={img.url}
              className={`parallax absolute rounded-2xl shadow-xl object-cover transition-transform duration-300 ease-out
                ${i === 0 ? "w-72 h-96 z-50" : ""}
                ${i === 1 ? "w-64 h-80 top-10 left-10 z-40" : ""}
                ${i === 2 ? "w-56 h-72 top-20 left-20 z-30" : ""}
                ${i === 3 ? "w-52 h-64 top-28 left-28 z-20" : ""}
              `}
              style={{
                transform: `translate(${i * 8}px, ${i * 8}px)`,
              }}
            />
          ))}
        </div>

        {/* GLOW EFFECT */}
        <div className="absolute inset-0 bg-gradient from-purple-500/10 to-cyan-500/10 pointer-events-none" />
      </div>
    </section>
  );
}