interface Props {
  destination: any;
}

function DestinationCard({
  destination
}: Props) {

  return (
    <div className="bg-white rounded-xl shadow">

      const imageUrl = destination.image?.startsWith("http")
        ? destination.image
        : `http://127.0.0.1:8000${destination.image}`;

        <img
          src={imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover"
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