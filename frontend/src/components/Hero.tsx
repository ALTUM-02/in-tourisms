import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform for 3D tilt effect
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;

    const offsetX = e.clientX - rect.left - width / 2;
    const offsetY = e.clientY - rect.top - height / 2;

    x.set(offsetX);
    y.set(offsetY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient from-sky-50 to-white px-6">

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">

        {/* TEXT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover Tanzania's
            <span className="text-sky-500"> Hidden Paradise</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Explore wildlife, beaches, mountains, and unforgettable adventures
            with AI-powered travel planning.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-sky-500 text-white rounded-xl shadow hover:bg-sky-600 transition">
              Explore Now
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* IMAGE CARD */}
        <div className="flex justify-center">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              perspective: 1000,
            }}
            className="w-340px h-420px rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-white"
          >
            {/* Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Tanzania Safari"
              className="w-full h-full object-cover scale-110"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 120 }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient- from-black/40 to-transparent" />

            {/* Card Label */}
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-xl font-semibold">Serengeti Safari</h3>
              <p className="text-sm opacity-80">Wildlife Experience</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}