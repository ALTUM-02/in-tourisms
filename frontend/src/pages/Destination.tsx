import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { getDestinations } from "../services/destinationService";
import DestinationCard from "../components/DestinationCard";

function Destinations() {
  const [destinations, setDestinations] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    getDestinations().then((res) => {
      setDestinations(res.data);
    });
  }, []);

  const filteredDestinations =
    destinations.filter((destination: any) =>
      destination.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO SECTION */}

      <section
        className="
        relative
        h-500px
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-4">

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            mb-6
            "
          >
            Discover Tanzania
          </h1>

          <p
            className="
            text-lg
            md:text-2xl
            mb-8
            "
          >
            Explore National Parks,
            Mountains, Beaches and
            Wildlife Adventures
          </p>

          {/* SEARCH */}

          <div
            className="
            max-w-xl
            mx-auto
            relative
            "
          >
            <Search
              size={20}
              className="
              absolute
              left-4
              top-4
              text-gray-500
              "
            />

            <input
              type="text"
              placeholder="Search destination..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
              w-full
              pl-12
              pr-4
              py-4
              rounded-full
              text-black
              shadow-lg
              "
            />
          </div>

        </div>
      </section>

      {/* DESTINATIONS */}

      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        py-16
        "
      >
        <div
          className="
          flex
          justify-between
          items-center
          mb-10
          "
        >
          <h2
            className="
            text-4xl
            font-bold
            "
          >
            Featured Destinations
          </h2>

          <span
            className="
            text-gray-500
            "
          >
            {filteredDestinations.length}
            {" "}Destinations
          </span>
        </div>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {filteredDestinations.map(
            (destination: any) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            )
          )}
        </div>
      </section>

    </div>
  );
}

export default Destinations;