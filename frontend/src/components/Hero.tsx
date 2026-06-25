import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    setMousePosition({
      x: clientX,
      y: clientY,
    });
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  x.set(mousePosition.x);
  y.set(mousePosition.y);

  const moveX = useTransform(x, [0, window.innerWidth], [-25, 25]);
  const moveY = useTransform(y, [0, window.innerHeight], [-25, 25]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Floating Images */}

      <motion.img
        style={{
          x: moveX,
          y: moveY,
        }}
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt=""
        className="absolute top-24 left-10 w-52 h-72 object-cover rounded-3xl shadow-2xl border-4 border-white"
      />

      <motion.img
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86"
        alt=""
        className="absolute top-40 right-20 w-64 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white"
      />

      <motion.img
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        src="https://images.unsplash.com/photo-1528127269322-539801943592"
        alt=""
        className="absolute bottom-16 left-32 w-44 h-60 object-cover rounded-3xl shadow-2xl border-4 border-white"
      />

      {/* Main Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-yellow-400 font-semibold tracking-widest uppercase"
            >
              Discover Tanzania
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white text-6xl md:text-8xl font-bold leading-tight"
            >
              Explore The Beauty Of Tanzania
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-200 mt-6 text-lg"
            >
              Experience wildlife safaris, breathtaking landscapes,
              luxury hotels and unforgettable adventures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex gap-4"
            >
              <button className="bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-full text-black font-semibold transition">
                Explore Now
              </button>

              <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                View Destinations
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Glass Card */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute bottom-10 right-10 z-30 backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 w-80"
      >
        <h3 className="text-white text-xl font-bold">
          Serengeti National Park
        </h3>

        <p className="text-gray-300 mt-2">
          Witness the Great Migration and Africa's most iconic wildlife.
        </p>
      </motion.div>
    </section>
  );
}