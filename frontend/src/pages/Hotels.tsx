import { useEffect, useState } from "react";

import HotelCard from "../components/HotelCard";

import { getHotels } from "../services/hotelService";

function Hotels() {

  const [hotels, setHotels] =
    useState([]);

  useEffect(() => {

    getHotels().then((res) => {
      setHotels(res.data);
    });

  }, []);

  return (

    <div className="grid md:grid-cols-3 gap-6">

      {hotels.map((hotel: any) => (

        <HotelCard
          key={hotel.id}
          hotel={hotel}
        />

      ))}

    </div>

  );
}

export default Hotels;