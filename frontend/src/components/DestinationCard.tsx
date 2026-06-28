import type { Destination } from "../types/destination";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface Props {
  destination: Destination;
}

function DestinationCard({ destination }: Props) {

  // Build the correct image URL
  const imageUrl =
    destination.image?.startsWith("http")
      ? destination.image
      : `http://127.0.0.1:8000${destination.image}`;

  return (
    <div
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
      hover:-translate-y-2
      group
      "
    >

      <div className="relative h-64 overflow-hidden">

        <img
          src={imageUrl}
          alt={destination.name}
          className="
          w-full
          h-full
          object-cover
          group-hover:scale-110
          transition-transform
          duration-700
          "
        />

        <div className="absolute inset-0 bg-gradient from-black/70 to-transparent" />

        <div className="absolute bottom-4 left-4 text-white">

          <h2 className="text-2xl font-bold">
            {destination.name}
          </h2>

          <div className="flex items-center gap-2">

            <MapPin size={16} />

            <span>{destination.region}</span>

          </div>

        </div>

      </div>

      <div className="p-5">

        <p className="text-gray-600 line-clamp-3">
          {destination.description}
        </p>

        <div className="mt-4 flex justify-between">

          <span className="font-semibold">
            Entry Fee
          </span>

          <span className="text-emerald-700 font-bold">
            {destination.entry_fee}
          </span>

        </div>

        <Link
          to={`/destinations/${destination.id}`}
          className="
          mt-5
          inline-block
          bg-emerald-600
          hover:bg-emerald-700
          text-white
          px-5
          py-2
          rounded-lg
          transition
          "
        >
          Explore
        </Link>

      </div>

    </div>
  );
}

export default DestinationCard;