import { Destination } from "../types/destination";

interface Props {
  destination: Destination;
}

function DestinationCard({ destination }: Props) {
  return (
    <div>
      <h2>{destination.name}</h2>
      <p>{destination.region}</p>
    </div>
  );
}

export default DestinationCard;