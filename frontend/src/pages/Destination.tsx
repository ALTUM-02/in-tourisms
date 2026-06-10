import { useEffect, useState } from "react";
import { getDestinations } from "../services/destinationService";
import DestinationCard from "../components/DestinationCard";

function Destinations() {

  const [destinations, setDestinations] =
    useState([]);

  useEffect(() => {

    getDestinations()
      .then((res) => {
        setDestinations(
          res.data
        );
      });

  }, []);

  return (

    <div className="grid md:grid-cols-3 gap-6">

      {destinations.map(
        (destination: any) => (

          <DestinationCard
            key={destination.id}
            destination={destination}
          />

      ))}

    </div>
  );
}

export default Destinations;