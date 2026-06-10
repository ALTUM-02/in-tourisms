interface Props {
  destination: any;
}

function DestinationCard({
  destination
}: Props) {

  return (
    <div className="bg-white rounded-xl shadow">

      <img
        src={destination.image}
        alt={destination.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-4">

        <h2 className="font-bold text-xl">
          {destination.name}
        </h2>

        <p>
          {destination.region}
        </p>

      </div>

    </div>
  );
}

export default DestinationCard;