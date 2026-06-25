import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="
      h-screen
      bg-cover
      bg-center
      flex
      items-center
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5')",
      }}
    >

      <div className="bg-black/50 w-full h-full flex items-center">

        <div className="container mx-auto px-10 text-white">

          <h1 className="text-6xl font-bold mb-6">
            Discover Tanzania
          </h1>

          <p className="text-xl max-w-2xl mb-8">
            Explore wildlife,
            book hotels,
            discover local foods,
            and plan your perfect trip.
          </p>

          <Link
            to="/register"
            className="
            bg-emerald-600
            px-8
            py-4
            rounded-lg
            "
          >
            Start Adventure
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;