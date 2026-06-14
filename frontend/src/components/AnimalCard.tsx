import type { Animal } from "../types/animal";

interface Props {
  animal: Animal;
}

function AnimalCard({ animal }: Props) {
  return (
    <div className="bg-white rounded-xl shadow">

      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">

        <h2 className="font-bold text-xl">
          {animal.name}
        </h2>

        <p>
          {animal.destination_name}
        </p>

      </div>

    </div>
  );
}

export default AnimalCard;