import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { getDestinations } from "../services/destinationService";
import type { Destination } from "../types/destination";

function FeaturedDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDestinations()
      .then((res) => {
        setDestinations(res.data.slice(0, 6));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="text-center text-gray-500">
          Loading destinations...
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient from-white to-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-4xl font-bold text-slate-800">
              Featured Destinations
            </h2>

            <p className="text-gray-500 mt-2">
              Discover Tanzania's most beautiful places.
            </p>

          </div>

          <Link
            to="/destinations"
            className="
              hidden md:flex
              items-center
              gap-2
              text-emerald-600
              font-semibold
              hover:text-emerald-700
            "
          >
            View All

            <ArrowRight size={18} />

          </Link>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {destinations.map((destination) => (

            <div
              key={destination.id}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition
                duration-300
                hover:-translate-y-2
                cursor-pointer
              "
            >

              <div className="relative h-64 overflow-hidden">

                <img
                  src={destination.image}
                  alt={destination.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 text-white">

                  <h3 className="text-2xl font-bold">
                    {destination.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">

                    <MapPin size={16} />

                    <span className="text-sm">
                      {destination.region}
                    </span>

                  </div>

                </div>

              </div>

              <div className="p-6">

                <p className="text-gray-600 line-clamp-3">
                  {destination.description}
                </p>

                <div className="mt-5 flex justify-between items-center">

                  <span className="font-semibold text-emerald-700">
                    Entry Fee:
                  </span>

                  <span className="font-bold text-slate-700">
                    {destination.entry_fee}
                  </span>

                </div>

                <Link
                  to={`/destinations/${destination.id}`}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    bg-emerald-600
                    hover:bg-emerald-700
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    transition
                  "
                >
                  Explore

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedDestinations;