import type { Hotel } from "../types/hotel";

interface Props {
  hotel: Hotel;
}

function HotelCard({ hotel }: Props) {
  return (
    <div className="bg-white rounded-xl shadow">

      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">

        <h2 className="font-bold">
          {hotel.name}
        </h2>

        <p>
          {hotel.destination_name}
        </p>

        <p>
          ${hotel.price_per_night}
        </p>

        <p>
          ⭐ {hotel.stars}
        </p>

      </div>

    </div>
  );
}

export default HotelCard;